import { Pinecone } from "@pinecone-database/pinecone"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { readFileSync, readdirSync } from "fs"
import { join } from "path"
import OpenAI from "openai"

const KNOWLEDGE_DIR = "./knowledge"
const CHUNK_SIZE = 1000 // Reduced from 1500 for better granularity
const CHUNK_OVERLAP = 200 // Reduced from 300 to match

// Map source files to categories for metadata filtering
const SOURCE_CATEGORIES: Record<string, string> = {
  "background.md": "professional",
  "interview-responses.md": "interview",
  "personal.md": "personal",
  "projects.md": "projects",
  "skills.md": "skills",
  "tech-opinions.md": "technical",
  "currently.md": "current",
}

// Extract keywords from the "Also:" lines for better retrieval
function extractKeywords(content: string): string[] {
  const alsoMatches = content.match(/### Also: ([^\n]+)/g) || []
  const keywords: string[] = []

  for (const match of alsoMatches) {
    const keywordsStr = match.replace("### Also: ", "")
    keywords.push(...keywordsStr.split(",").map(k => k.trim().toLowerCase()))
  }

  return [...new Set(keywords)] // Remove duplicates
}

// Load the .md files from the knowledge directory
async function loadMarkdownFiles(): Promise<
  { content: string; source: string; category: string; keywords: string[] }[]
> {
  const files = readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith(".md"))
  return files.map(file => {
    const content = readFileSync(join(KNOWLEDGE_DIR, file), "utf-8")
    return {
      content,
      source: file,
      category: SOURCE_CATEGORIES[file] || "general",
      keywords: extractKeywords(content),
    }
  })
}

async function chunkDocuments(
  docs: {
    content: string
    source: string
    category: string
    keywords: string[]
  }[]
): Promise<
  {
    text: string
    source: string
    category: string
    keywords: string[]
    chunkIndex: number
  }[]
> {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
    separators: ["\n---\n", "\n\n", "\n", " "], // Split on section dividers first
  })

  const chunks: {
    text: string
    source: string
    category: string
    keywords: string[]
    chunkIndex: number
  }[] = []

  for (const doc of docs) {
    const splits = await splitter.splitText(doc.content)
    splits.forEach((text, i) => {
      chunks.push({
        text,
        source: doc.source,
        category: doc.category,
        keywords: doc.keywords,
        chunkIndex: i,
      })
    })
  }

  return chunks
}

async function generateEmbeddings(
  chunks: {
    text: string
    source: string
    category: string
    keywords: string[]
    chunkIndex: number
  }[],
  openai: OpenAI
): Promise<
  {
    id: string
    values: number[]
    metadata: {
      text: string
      source: string
      category: string
      keywords: string[]
    }
  }[]
> {
  const vectors: {
    id: string
    values: number[]
    metadata: {
      text: string
      source: string
      category: string
      keywords: string[]
    }
  }[] = []

  // Process in batches of 100 (OpenAI limit)
  const batchSize = 100
  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize)
    const texts = batch.map(c => c.text)

    console.log(
      `Embedding batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(chunks.length / batchSize)}...`
    )

    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: texts,
    })

    response.data.forEach((embedding, j) => {
      const chunk = batch[j]
      vectors.push({
        id: `${chunk.source}-${chunk.chunkIndex}`,
        values: embedding.embedding,
        metadata: {
          text: chunk.text,
          source: chunk.source,
          category: chunk.category,
          keywords: chunk.keywords,
        },
      })
    })
  }

  return vectors
}

async function seed() {
  console.log("╔════════════════════════════════════════════════════════════╗")
  console.log("║         KNOWLEDGE BASE SEEDING (Enhanced)                  ║")
  console.log(
    "╚════════════════════════════════════════════════════════════╝\n"
  )

  // Initialize clients
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })
  const namespace = process.env.PINECONE_NAMESPACE!
  const index = pc.index(process.env.PINECONE_INDEX!).namespace(namespace)

  console.log(`📍 Target namespace: ${namespace}`)

  // Clear old vectors before re-seeding (if any exist)
  console.log("🗑️  Checking for existing vectors...")
  try {
    const existingStats = await index.describeIndexStats()
    if (existingStats.totalRecordCount && existingStats.totalRecordCount > 0) {
      console.log(
        `   Found ${existingStats.totalRecordCount} vectors. Clearing...`
      )
      await index.deleteAll()
      console.log("   Cleared!")
    } else {
      console.log("   Index is empty. Skipping delete.")
    }
  } catch (e) {
    console.log("   No existing vectors to clear (index may be new).")
  }
  console.log("")

  // Load documents
  console.log("📄 Loading documents...")
  const docs = await loadMarkdownFiles()
  console.log(`   Loaded ${docs.length} documents:`)
  docs.forEach(d => {
    console.log(
      `   - ${d.source} (${d.category}) [${d.keywords.length} keywords]`
    )
  })
  console.log("")

  // Chunk documents
  console.log("✂️  Chunking documents...")
  const chunks = await chunkDocuments(docs)
  console.log(`   Created ${chunks.length} chunks\n`)

  // Show chunk distribution
  const chunksBySource: Record<string, number> = {}
  chunks.forEach(c => {
    chunksBySource[c.source] = (chunksBySource[c.source] || 0) + 1
  })
  console.log("   Chunks per file:")
  Object.entries(chunksBySource).forEach(([source, count]) => {
    console.log(`   - ${source}: ${count} chunks`)
  })
  console.log("")

  // Generate embeddings
  console.log("🧠 Generating embeddings...")
  const vectors = await generateEmbeddings(chunks, openai)
  console.log(`   Generated ${vectors.length} embeddings\n`)

  // Upsert to Pinecone
  console.log("📤 Upserting to Pinecone...")
  await index.upsert(vectors)
  console.log("   Done!\n")

  // Wait for Pinecone to index (serverless can be slow)
  console.log("⏳ Waiting for Pinecone to index vectors...")

  let stats = await index.describeIndexStats()
  let attempts = 0
  const maxAttempts = 10

  while (stats.totalRecordCount === 0 && attempts < maxAttempts) {
    attempts++
    console.log(`   Attempt ${attempts}/${maxAttempts} - waiting 3 seconds...`)
    await new Promise(resolve => setTimeout(resolve, 3000))
    stats = await index.describeIndexStats()
  }

  console.log("\n📊 Index stats:", JSON.stringify(stats, null, 2))

  if (stats.totalRecordCount === 0) {
    console.log(
      "\n⚠️  WARNING: Vectors may not be indexed yet. Wait a minute and run diagnose-rag.ts"
    )
  } else {
    console.log("\n✅ Knowledge base seeded successfully!")
  }
  console.log(
    "   Run 'npx tsx scripts/diagnose-rag.ts' to verify retrieval quality."
  )
}

seed().catch(console.error)
