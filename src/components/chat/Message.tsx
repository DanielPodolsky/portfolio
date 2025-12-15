import type { UIMessage } from "ai"

interface MessageProps {
  message: UIMessage
}

export function Message({ message }: MessageProps) {
  return (
    <div
      className={`w-fit max-w-[80%] px-4 py-2 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 ${
        message.role === "user"
          ? "ml-auto bg-orange-500 text-white"
          : "mr-auto bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      }`}
    >
      {message.parts.map((part, i) =>
        part.type === "text" ? <span key={i}>{part.text}</span> : null
      )}
    </div>
  )
}
