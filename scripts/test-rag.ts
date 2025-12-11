import { retrieveContext } from "../src/lib/rag"

async function test() {
  const query = "tell me about Daniel's projects"
  console.log("Query:", query)
  console.log("\n--- Retrieved Context ---\n")

  const context = await retrieveContext(query)
  console.log(context)
}

test().catch(console.error)
