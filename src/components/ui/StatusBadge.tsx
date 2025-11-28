interface StatusBadgeProps {
  text: string
}

export function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <div
      className="font-heading inline-flex items-center space-x-2 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/60 px-2.5 py-1 text-[12px] font-medium text-neutral-700 
  dark:text-neutral-300 shadow-md dark:shadow-sm backdrop-blur transition-colors duration-500"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(74, 222, 128, 0.35)]" />
      <span>{text}</span>
    </div>
  )
}
