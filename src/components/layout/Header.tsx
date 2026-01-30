import { Mail, FileText } from "lucide-react"

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-800/80 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left Section - Logo + Name */}
        <a href="#top" className="flex items-center space-x-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-neutral-700/70 group-hover:border-neutral-400/80 transition-colors">
            <span className="text-sm font-semibold tracking-tight text-neutral-100">
              D
            </span>
          </div>
          <div className="hidden text-left md:block">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
              Software Engineer
            </div>
            <div className="text-sm font-semibold tracking-tight text-neutral-100">
              Daniel Podolsky
            </div>
          </div>
        </a>

        {/* Middle Section - Desktop Nav Links */}
        <nav className="hidden items-center space-x-8 text-sm text-neutral-300 md:flex">
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#projects" className="transition-colors hover:text-white">
            Projects
          </a>
          <a href="#skills" className="transition-colors hover:text-white">
            Skills
          </a>
          <a
            href="#achievements"
            className="transition-colors hover:text-white"
          >
            Achievements
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        {/* Right Section - CTA Buttons */}
        <div className="flex items-center space-x-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-neutral-700/80 px-3 py-1.5 text-xs font-medium tracking-tight text-neutral-200 shadow-sm transition-all hover:border-neutral-300 hover:-translate-y-[1px] hover:text-white hover:shadow-lg/50 md:inline-flex"
          >
            <Mail className="mr-1.5 mt-0.5 h-[14px] w-[14px]" />
            Contact
          </a>
          <a
            href="#resume"
            className="inline-flex items-center rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium tracking-tight text-black shadow-sm transition-transform duration-150 hover:-translate-y-[1px] hover:bg-white"
          >
            <FileText className="mr-1.5 h-[14px] w-[14px]" />
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
