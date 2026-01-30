import { Mail, FileText, Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext.tsx"
import LogoDark from "@/assets/images/LogoDark.jpg"
import LogoLight from "@/assets/images/LogoLight.jpg"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-800/80 dark:border-neutral-200/80 bg-black/70 dark:bg-white/70 backdrop-blur-xl transition-colors duration-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left Section - Logo + Name */}
        <a href="#top" className="flex items-center space-x-2 group">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100 border border-neutral-700/70 dark:border-neutral-300/70 group-hover:border-neutral-400/80 
  dark:group-hover:border-neutral-600/80 transition-colors"
          >
            <img
              src={theme === "dark" ? LogoLight : LogoDark}
              alt="Daniel Podolsky logo"
              className="object-cover rounded-full"
            />
          </div>
          <div className="hidden text-left md:block">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400 dark:text-neutral-600">
              Software Engineer
            </div>
            <div className="text-sm font-semibold tracking-tight text-neutral-100 dark:text-neutral-900">
              Daniel Podolsky
            </div>
          </div>
        </a>

        {/* Middle Section - Desktop Nav Links */}
        <nav className="hidden items-center space-x-8 text-sm text-neutral-300 dark:text-neutral-700 md:flex">
          <a
            href="#about"
            className="transition-colors hover:text-white dark:hover:text-neutral-900"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-white dark:hover:text-neutral-900"
          >
            Projects
          </a>
          <a
            href="#blogs"
            className="transition-colors hover:text-white dark:hover:text-neutral-900"
          >
            Blogs
          </a>
          <a
            href="#skills"
            className="transition-colors hover:text-white dark:hover:text-neutral-900"
          >
            Skills
          </a>
        </nav>

        {/* Right Section - CTA Buttons */}
        <div className="flex items-center space-x-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-neutral-700/80 dark:border-neutral-300/80 px-3 py-1.5 text-xs font-medium tracking-tight text-neutral-200 dark:text-neutral-700 shadow-sm transition-all 
  hover:border-neutral-300 dark:hover:border-neutral-500 hover:-translate-y-[1px] hover:text-white dark:hover:text-neutral-900 hover:shadow-lg/50 md:inline-flex"
          >
            <Mail className="mr-1.5 mt-0.5 h-[14px] w-[14px]" />
            Contact
          </a>
          {/* Theme Toggle*/}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center rounded-full border border-neutral-700/80 dark:border-neutral-300/80 px-3 py-1.5 text-xs font-medium tracking-tight text-neutral-200 dark:text-neutral-700 shadow-sm transition-all 
  hover:border-neutral-300 dark:hover:border-neutral-500 hover:-translate-y-[1px] hover:text-white dark:hover:text-neutral-900 hover:shadow-lg/50"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[14px] w-[14px]" />
            ) : (
              <Moon className="h-[14px] w-[14px]" />
            )}
          </button>
          <a
            href="#resume"
            className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-900 px-3.5 py-1.5 text-xs font-medium tracking-tight text-black dark:text-white shadow-sm transition-all duration-150 
  hover:-translate-y-[1px] hover:bg-white dark:hover:bg-neutral-800"
          >
            <FileText className="mr-1.5 h-[14px] w-[14px]" />
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
