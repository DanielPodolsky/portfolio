export function TypingIndicator() {
  return (
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
  )
}
