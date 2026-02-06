import { streamText, UIMessage, convertToModelMessages } from "ai"
import { Pinecone } from "@pinecone-database/pinecone"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { anthropic } from "@ai-sdk/anthropic"
import OpenAI from "openai"

// ============================================
// Configuration
// ============================================
const MAX_MESSAGE_LENGTH = 1000
const MAX_MESSAGES = 20
const SCORE_THRESHOLD = 0.25
const TOP_K = 7
const GREETINGS = [
  "hello",
  "hi",
  "hey",
  "hola",
  "שלום",
  "sup",
  "yo",
  "good morning",
  "good afternoon",
  "good evening",
  "what's up",
  "how are you",
  "howdy",
]

const FALLBACK_CONTEXT = `
I'm Daniel, a Full Stack Developer and AI Workflow Architect.
Creator of ownyourcode.dev (63+ GitHub Stars) and Claude Code enthusiast.
I build systems that combine thoughtful architecture with the power of LLMs.
Feel free to ask me about my projects, skills, or background!
`.trim()

let ratelimit: Ratelimit | null = null

// ============================================
// Singleton Clients (initialized once per cold start)
// ============================================
let openaiClient: OpenAI | null = null
let pineconeIndex: ReturnType<Pinecone["index"]> | null = null

function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  }
  return openaiClient
}

function getPineconeIndex(): ReturnType<Pinecone["index"]> {
  if (!pineconeIndex) {
    const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })
    const namespace = process.env.PINECONE_NAMESPACE!
    pineconeIndex = pc.index(process.env.PINECONE_INDEX!).namespace(namespace)
  }
  return pineconeIndex
}

function getRateLimit(): Ratelimit {
  if (!ratelimit) {
    ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(20, "60 s"), // 20 requests per minute
      prefix: "portfolio-chat",
      analytics: true,
      ephemeralCache: new Map(),
    })
  }
  return ratelimit
}

function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  return forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1"
}

function isGreeting(query: string): boolean {
  const normalized = query.toLowerCase().trim()
  return GREETINGS.some(g => normalized === g || normalized.startsWith(g + " "))
}

// ============================================
// Context Retrieval
// ============================================
interface RetrievalResult {
  context: string
  matchCount: number
  topScore: number
}

async function retrieveContext(query: string): Promise<RetrievalResult> {
  // Skip retrieval for very short or greeting-like queries
  if (query.length < 3 || isGreeting(query)) {
    return { context: FALLBACK_CONTEXT, matchCount: 0, topScore: 0 }
  }

  try {
    const client = getOpenAIClient()
    const index = getPineconeIndex()

    // Generate embedding for the query
    const embeddingResponse = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: query,
    })

    // Query Pinecone
    const result = await index.query({
      vector: embeddingResponse.data[0].embedding,
      topK: TOP_K,
      includeMetadata: true,
    })

    // Filter by score threshold
    const relevantMatches = result.matches.filter(
      match => (match.score ?? 0) >= SCORE_THRESHOLD
    )

    // If no relevant matches, use fallback
    if (relevantMatches.length === 0) {
      return {
        context: FALLBACK_CONTEXT,
        matchCount: 0,
        topScore: result.matches[0]?.score ?? 0,
      }
    }

    // Build context from relevant matches
    const context = relevantMatches
      .map(match => match.metadata?.text)
      .filter(Boolean)
      .join("\n\n")

    return {
      context,
      matchCount: relevantMatches.length,
      topScore: relevantMatches[0]?.score ?? 0,
    }
  } catch (error) {
    console.error("[Retrieval] Error:", error)
    return { context: FALLBACK_CONTEXT, matchCount: 0, topScore: 0 }
  }
}

// ============================================
// Main Handler
// ============================================
export async function POST(request: Request) {
  try {
    const ip = getClientIP(request)
    const { success, limit, remaining, reset, pending } =
      await getRateLimit().limit(ip)
    pending.catch(console.error)

    if (!success) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait a moment." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": Math.ceil((reset - Date.now()) / 1000).toString(),
          },
        }
      )
    }

    const { messages } = await request.json()
    // Validate input
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    // Limit conversation length
    const trimmedMessages = messages.slice(-MAX_MESSAGES)

    // Get and sanitize the last user message
    // AI SDK v5+ uses 'parts' array: [{ type: 'text', text: '...' }]
    const lastMessage = trimmedMessages[trimmedMessages.length - 1]

    // Extract text from parts array (AI SDK v5+ format)
    const queryText =
      lastMessage?.parts
        ?.filter((part: { type: string }) => part.type === "text")
        .map((part: { type: string; text?: string }) => part.text || "")
        .join(" ") || ""

    const sanitizedQuery = queryText.slice(0, MAX_MESSAGE_LENGTH)

    // Retrieve relevant context from knowledge base
    const { context, matchCount, topScore } =
      await retrieveContext(sanitizedQuery)

    // Get system prompt from env (with fallback for safety)
    const systemPromptTemplate = process.env.CHATBOT_SYSTEM_PROMPT
    if (!systemPromptTemplate) {
      console.error("[Chat] CHATBOT_SYSTEM_PROMPT env var is missing!")
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    // Stream response
    const result = streamText({
      model: anthropic("claude-haiku-4-5-20251001"),
      system: systemPromptTemplate.replace("{context}", context),
      messages: await convertToModelMessages(trimmedMessages as UIMessage[]),
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error("[Chat] Error:", error)
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
