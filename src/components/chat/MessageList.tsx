import type { UIMessage } from "ai"
import { EmptyState } from "./EmptyState"
import { Message } from "./Message"
import { TypingIndicator } from "./TypingIndicator"

interface MessageListProps {
  messages: UIMessage[]
  status: "submitted" | "streaming" | "ready" | "error"
  error: Error | undefined
}

export function MessageList({ messages, status, error }: MessageListProps) {
  if (messages.length === 0 && !error) {
    return <EmptyState />
  }

  return (
    <>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {status === "submitted" && <TypingIndicator />}
      {error && (
        <div className="w-fit mr-auto px-4 py-2 rounded-2xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
          Something went wrong. It can be on my side or yours - please try
          again.
        </div>
      )}
    </>
  )
}
