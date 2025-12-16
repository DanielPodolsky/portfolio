import type { UIMessage } from "ai"
import Markdown from "react-markdown"

interface MessageProps {
  message: UIMessage
}

export function Message({ message }: MessageProps) {
  const isUser = message.role === "user"
  return (
    <div
      className={`w-fit max-w-[80%] px-4 py-2 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 ${
        isUser
          ? "ml-auto bg-orange-500 text-white"
          : "mr-auto bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      }`}
    >
      {message.parts.map((part, i) =>
        part.type === "text" ? (
          isUser ? (
            <span key={i}>{part.text}</span>
          ) : (
            <div
              key={i}
              className="prose prose-sm dark:prose-invert max-w-none"
            >
              <Markdown>{part.text}</Markdown>
            </div>
          )
        ) : null
      )}
    </div>
  )
}
