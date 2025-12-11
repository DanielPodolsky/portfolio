import { Pinecone } from "@pinecone-database/pinecone"
import OpenAI from "openai"

export async function retrieveContext(query: string): Promise<string> {
  // Initialize clients
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })
  const index = pc.index(process.env.PINECONE_INDEX!)

  // Embed user's query
  const queryEmbeddedVector = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  })

  const result = await index.query({
    vector: queryEmbeddedVector.data[0].embedding,
    topK: 5,
    includeMetadata: true,
  })

  return result.matches
    .slice(0, 3)
    .map(match => match.metadata?.text)
    .filter(Boolean)
    .join("\n\n")
}
