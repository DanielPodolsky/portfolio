import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useState } from "react"
import { ChatBubble } from "./ChatBubble"
import { ChatPanel } from "./ChatPanel"
import { Wand2 } from "lucide-react"

export function ChatBot() {
  const [panelState, setPanelState] = useState<"closed" | "open" | "closing">(
    "closed"
  )
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  })
  const [input, setInput] = useState("")

  const handleOpen = () => setPanelState("open")
  const handleClose = () => {
    setPanelState("closing")
    setTimeout(() => setPanelState("closed"), 200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <>
      {panelState === "closed" && <ChatBubble onClick={handleOpen} />}

      {panelState !== "closed" && (
        <ChatPanel onClose={handleClose} isClosing={panelState === "closing"}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500 dark:text-neutral-400">
                <p className="text-lg font-medium">Hey, what's up?</p>
                <p className="text-sm mt-1">
                  Ask me about my projects, skills, experience or anything else!
                </p>
              </div>
            ) : (
              <>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`w-fit max-w-[80%] px-4 py-2 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 ${
                      message.role === "user"
                        ? "ml-auto bg-orange-500 text-white"
                        : "mr-auto bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    }`}
                  >
                    {message.parts.map((part, i) =>
                      part.type === "text" ? (
                        <span key={i}>{part.text}</span>
                      ) : null
                    )}
                  </div>
                ))}
                {status === "submitted" && (
                  <div className="w-fit mr-auto px-4 py-2 rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                    <span className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input */}
          <form
            className="p-4 border-t border-neutral-200 dark:border-neutral-800"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                required
                placeholder="Ask me anything :)"
                className="flex-1 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100"
              />
              <button
                type="submit"
                disabled={!input.trim() || status !== "ready"}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium
      hover:bg-orange-600 transition-colors
      disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Wand2 />
              </button>
            </div>
          </form>
        </ChatPanel>
      )}
    </>
  )
}
