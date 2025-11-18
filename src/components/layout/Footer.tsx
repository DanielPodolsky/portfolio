import { Code2, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-900 dark:border-neutral-200 pt-6 text-[11px] text-neutral-500 dark:text-neutral-600 transition-colors duration-500">
      <div className="flex flex-col items-start justify-between gap-3 pb-4 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-neutral-300 dark:text-neutral-900">
            Daniel Podolsky
          </span>
          . Built with a focus on clarity, performance, and reliability.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-neutral-400 dark:text-neutral-600">
          <span className="inline-flex items-center">
            <Code2 className="mr-1.5 h-[14px] w-[14px]" />
            Full Stack Development · AI Integration
          </span>
          <span className="hidden sm:inline h-3 w-px bg-neutral-800 dark:bg-neutral-300 transition-colors duration-500" />
          <span className="inline-flex items-center">
            <MapPin className="mr-1.5 h-[14px] w-[14px]" />
            Israel · Open to remote
          </span>
        </div>
      </div>
    </footer>
  )
}
