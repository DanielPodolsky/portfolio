import { streamText, UIMessage, convertToModelMessages } from "ai"
import { openai } from "@ai-sdk/openai"
import { Pinecone } from "@pinecone-database/pinecone"
import OpenAI from "openai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  const lastMessage = messages[messages.length - 1]?.content || ""

  const context = await retrieveContext(lastMessage)

  const result = streamText({
    model: openai("gpt-5-mini"),
    system: process.env.CHATBOT_SYSTEM_PROMPT!.replace("{context}", context),
    messages: convertToModelMessages(messages as UIMessage[]),
  })

  return result.toUIMessageStreamResponse()
}

async function retrieveContext(query: string): Promise<string> {
  // Initialize clients
  const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })
  const index = pc.index(process.env.PINECONE_INDEX!)

  // Embed user's query
  const queryEmbeddedVector = await openaiClient.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  })

  const result = await index.query({
    vector: queryEmbeddedVector.data[0].embedding,
    topK: 5,
    includeMetadata: true,
  })

  return result.matches
    .slice(0, 1)
    .map(match => match.metadata?.text)
    .filter(Boolean)
    .join("\n\n")
}
