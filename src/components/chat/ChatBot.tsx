import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useState } from "react"

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  })
  const [input, setInput] = useState("")

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && (
        <div className="chatbot-window">
          {/* Chat messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.role}`}>
                {message.parts.map((part, partIndex) =>
                  part.type === "text" ? (
                    <span key={partIndex}>{part.text}</span>
                  ) : null
                )}
              </div>
            ))}
          </div>

          {/* Input field */}
          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              required
              placeholder="Ask me anything :)"
            ></input>
            <button
              type="submit"
              disabled={!input.trim() || status !== "ready"}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  )
}
