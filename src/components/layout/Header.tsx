import { Mail, FileText, Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext.tsx"
import LogoDark from "@/assets/images/LogoDark.jpg"
import LogoLight from "@/assets/images/LogoLight.jpg"

interface HeaderProps {
  onResumeClick: () => void
}

export function Header({ onResumeClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-black/70 backdrop-blur-xl transition-colors duration-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left Section - Logo + Name */}
        <a href="#top" className="flex items-center space-x-2 group">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300/70 dark:border-neutral-700/70 group-hover:border-neutral-600/80 
  dark:group-hover:border-neutral-400/80 transition-colors"
          >
            <img
              src={theme === "dark" ? LogoLight : LogoDark}
              alt="Daniel Podolsky logo"
              className="object-cover rounded-full"
            />
          </div>
          <div className="hidden text-left md:block">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-600 dark:text-neutral-400">
              Software Engineer
            </div>
            <div className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Daniel Podolsky
            </div>
          </div>
        </a>

        {/* Middle Section - Desktop Nav Links */}
        <nav className="hidden items-center space-x-8 text-sm text-neutral-700 dark:text-neutral-300 md:flex">
          <a
            href="#about"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#blogs"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            Blogs
          </a>
          <a
            href="#skills"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            Skills
          </a>
        </nav>

        {/* Right Section - CTA Buttons */}
        <div className="flex items-center space-x-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-neutral-300/80 dark:border-neutral-700/80 px-3 py-1.5 text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-200 shadow-sm transition-all 
  hover:border-neutral-500 dark:hover:border-neutral-300 hover:-translate-y-[1px] hover:text-neutral-900 dark:hover:text-white hover:shadow-lg/50 md:inline-flex"
          >
            <Mail className="mr-1.5 mt-0.5 h-[14px] w-[14px]" />
            Contact
          </a>
          {/* Theme Toggle*/}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center rounded-full border border-neutral-300/80 dark:border-neutral-700/80 px-3 py-1.5 text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-200 shadow-sm transition-all 
  hover:border-neutral-500 dark:hover:border-neutral-300 hover:-translate-y-[1px] hover:text-neutral-900 dark:hover:text-white hover:shadow-lg/50"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[14px] w-[14px]" />
            ) : (
              <Moon className="h-[14px] w-[14px]" />
            )}
          </button>
          <button
            onClick={onResumeClick}
            className="inline-flex items-center rounded-full bg-neutral-900 dark:bg-neutral-100 px-3.5 py-1.5 text-xs font-medium tracking-tight text-white dark:text-black shadow-sm transition-all duration-150
  hover:-translate-y-[1px] hover:bg-neutral-800 dark:hover:bg-white"
          >
            <FileText className="mr-1.5 h-[14px] w-[14px]" />
            Resume
          </button>
        </div>
      </div>
    </header>
  )
}
