import { openai } from "@ai-sdk/openai"
import { Pinecone } from "@pinecone-database/pinecone"
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"

async function verify() {
  console.log("✓ @ai-sdk/openai imported")
  console.log("✓ @pinecone-database/pinecone imported")
  console.log("✓ @langchain/community PDFLoader imported")
  console.log("✓ @langchain/textsplitters imported")

  // Test pinecone connection first
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  })

  const index = pc.index(process.env.PINECONE_INDEX!)
  const stats = await index.describeIndexStats()
  console.log("✓ Connected to Pinecone index:", stats)
}

verify().catch(console.error)
