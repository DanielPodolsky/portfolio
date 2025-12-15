interface ChatPanelProps {
  onClose: () => void
  isClosing: boolean
  children: React.ReactNode
}

export function ChatPanel({ onClose, isClosing, children }: ChatPanelProps) {
  return (
    <>
      <div
        className={`fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4
          w-[calc(100%-2rem)] sm:w-[400px] md:w-[500px] lg:w-[550px] h-[calc(100dvh-10rem)]
          sm:h-[550px]
          flex flex-col
          rounded-2xl shadow-xl
          bg-gradient-to-br from-orange-100 to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-amber-950
          border border-neutral-200 dark:border-neutral-800
          overflow-hidden
          ${
            isClosing
              ? "animate-out fade-out slide-out-to-bottom-4 duration-200"
              : "animate-in fade-in slide-in-from-bottom-4 duration-300"
          }`}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between
    px-4 py-3
    border-b border-neutral-200 dark:border-neutral-800"
        >
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">
            Chat with Daniel
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center
    rounded-full
    hover:bg-neutral-100 dark:hover:bg-neutral-800
    text-neutral-500 dark:text-neutral-400
    transition-colors"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Content (messages + input passed as children) */}
        <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
      </div>
    </>
  )
}
