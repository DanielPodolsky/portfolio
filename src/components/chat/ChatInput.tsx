import { Wand2 } from "lucide-react"

interface ChatInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  disabled: boolean
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled,
}: ChatInputProps) {
  return (
    <form
      className="p-4 border-t border-neutral-200 dark:border-neutral-800"
      onSubmit={onSubmit}
    >
      <div className="flex gap-2">
        <input
          value={value}
          onChange={onChange}
          required
          placeholder="Ask me anything :)"
          className="flex-1 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100"
        />
        <button
          type="submit"
          disabled={disabled}
          className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium
      hover:bg-orange-600 transition-colors
      disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Wand2 />
        </button>
      </div>
    </form>
  )
}
