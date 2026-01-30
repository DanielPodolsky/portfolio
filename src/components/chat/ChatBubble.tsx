import { MessageCircle } from "lucide-react"

interface ChatBubbleProps {
  onClick: () => void
}

export function ChatBubble({ onClick }: ChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle chat"
      className="fixed bottom-4 right-4 w-14 h-14 rounded-full
    bg-neutral-900 dark:bg-neutral-100
    text-white dark:text-neutral-900
    flex items-center justify-center
    shadow-lg cursor-pointer
    hover:scale-105 transition-transform"
    >
      <MessageCircle />
    </button>
  )
}
