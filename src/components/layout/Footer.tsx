import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200 dark:border-neutral-900 pt-6 text-[11px] text-neutral-600 dark:text-neutral-500 transition-colors duration-500">
      <div className="flex flex-col items-start justify-between gap-3 pb-4 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-neutral-900 dark:text-neutral-300">
            Daniel Podolsky
          </span>
          . Built with a focus on clarity, performance, and reliability.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-neutral-600 dark:text-neutral-400">
          <span className="inline-flex items-center">
            <MapPin className="mr-1.5 h-[14px] w-[14px]" />
            Israel · Open to remote
          </span>
        </div>
      </div>
    </footer>
  )
}
