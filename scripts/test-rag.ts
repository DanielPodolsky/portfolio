import { Pinecone } from "@pinecone-database/pinecone"
import OpenAI from "openai"

async function retrieveContext(query: string): Promise<string> {
  const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })
  const index = pc.index(process.env.PINECONE_INDEX!)

  const queryEmbeddedVector = await openaiClient.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  })

  const result = await index.query({
    vector: queryEmbeddedVector.data[0].embedding,
    topK: 7,
    includeMetadata: true,
  })

  console.log("Top 5 matches:")
  result.matches.forEach((match, i) => {
    console.log(`\n--- Match ${i + 1} (score: ${match.score?.toFixed(4)}) ---`)
    console.log(`Source: ${match.metadata?.source}`)
    console.log(
      `Text: ${(match.metadata?.text as string)?.substring(0, 200)}...`
    )
  })

  return result.matches
    .slice(0, 3)
    .map(match => match.metadata?.text)
    .filter(Boolean)
    .join("\n\n")
}

async function test() {
  const query = "do you play any games"
  console.log("Query:", query)
  console.log("\n========================================\n")

  const context = await retrieveContext(query)
  console.log("\n========================================")
  console.log("\nFinal context sent to LLM:\n")
  console.log(context)
}

test().catch(console.error)
