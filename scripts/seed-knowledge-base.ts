import { Pinecone } from "@pinecone-database/pinecone"
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { readFileSync, readdirSync } from "fs"
import { join } from "path"
import OpenAI from "openai"

const KNOWLEDGE_DIR = "./knowledge"
const CHUNK_SIZE = 1000
const CHUNK_OVERLAP = 200

// Load the .md files from the knowledge directory
async function loadMarkdownFiles(): Promise<
  { content: string; source: string }[]
> {
  const files = readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith(".md"))
  return files.map(file => ({
    content: readFileSync(join(KNOWLEDGE_DIR, file), "utf-8"),
    source: file,
  }))
}

// Load the .pdf file from the knowledge directory
async function loadPDFFiles(): Promise<{ content: string; source: string }[]> {
  const files = readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith(".pdf"))
  const docs: { content: string; source: string }[] = []

  for (const file of files) {
    const loader = new PDFLoader(join(KNOWLEDGE_DIR, file))
    const pages = await loader.load()
    docs.push({
      content: pages.map(p => p.pageContent).join("\n\n"),
      source: file,
    })
  }

  return docs
}

async function chunkDocuments(
  docs: { content: string; source: string }[]
): Promise<{ text: string; source: string; chunkIndex: number }[]> {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
  })

  const chunks: { text: string; source: string; chunkIndex: number }[] = []

  for (const doc of docs) {
    const splits = await splitter.splitText(doc.content)
    splits.forEach((text, i) => {
      chunks.push({ text, source: doc.source, chunkIndex: i })
    })
  }

  return chunks
}

async function generateEmbeddings(
  chunks: { text: string; source: string; chunkIndex: number }[],
  openai: OpenAI
): Promise<
  { id: string; values: number[]; metadata: { text: string; source: string } }[]
> {
  const vectors: {
    id: string
    values: number[]
    metadata: { text: string; source: string }
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
        },
      })
    })
  }

  return vectors
}

async function seed() {
  console.log("Starting knowledge base seeding...\n")

  // Initialize clients
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })
  const index = pc.index(process.env.PINECONE_INDEX!)

  // Load documents
  console.log("Loading documents...")
  const markdownDocs = await loadMarkdownFiles()
  const pdfDocs = await loadPDFFiles()
  const allDocs = [...markdownDocs, ...pdfDocs]
  console.log(
    `Loaded ${allDocs.length} documents: ${allDocs.map(d => d.source).join(", ")}\n`
  )

  // Chunk documents
  console.log("Chunking documents...")
  const chunks = await chunkDocuments(allDocs)
  console.log(`Created ${chunks.length} chunks\n`)

  // Generate embeddings
  console.log("Generating embeddings...")
  const vectors = await generateEmbeddings(chunks, openai)
  console.log(`Generated ${vectors.length} embeddings\n`)

  // Upsert to Pinecone
  console.log("Upserting to Pinecone...")
  await index.upsert(vectors)
  console.log("Done!\n")

  // Verify
  const stats = await index.describeIndexStats()
  console.log("Index stats:", stats)
}

seed().catch(console.error)
