import type { UIMessage } from "ai"
import { EmptyState } from "./EmptyState"
import { Message } from "./Message"
import { TypingIndicator } from "./TypingIndicator"

interface MessageListProps {
  messages: UIMessage[]
  status: "submitted" | "streaming" | "ready" | "error"
}

export function MessageList({ messages, status }: MessageListProps) {
  if (messages.length === 0) {
    return <EmptyState />
  }

  return (
    <>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {status === "submitted" && <TypingIndicator />}
    </>
  )
}
