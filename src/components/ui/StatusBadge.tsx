interface StatusBadgeProps {
  text: string
}

export function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <div
      className="inline-flex items-center space-x-2 rounded-full border border-neutral-800 dark:border-neutral-200/80 bg-neutral-900/60 dark:bg-white/80 px-2.5 py-1 text-[11px] font-medium text-neutral-300 
  dark:text-neutral-700 shadow-sm dark:shadow-md backdrop-blur transition-colors duration-500"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(74, 222, 128, 0.35)]" />
      <span>{text}</span>
    </div>
  )
}
