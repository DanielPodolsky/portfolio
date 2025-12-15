import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useState } from "react"
import { ChatBubble } from "./ChatBubble"
import { ChatPanel } from "./ChatPanel"
import { ChatInput } from "./ChatInput"
import { MessageList } from "./MessageList"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <>
      {panelState === "closed" && <ChatBubble onClick={handleOpen} />}

      {panelState !== "closed" && (
        <ChatPanel onClose={handleClose} isClosing={panelState === "closing"}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <MessageList messages={messages} status={status} />
          </div>

          {/* Input */}
          <ChatInput
            value={input}
            onChange={handleChange}
            onSubmit={handleSubmit}
            disabled={!input.trim() || status !== "ready"}
          />
        </ChatPanel>
      )}
    </>
  )
}
