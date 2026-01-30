import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Dark theme gradient - fades out in light mode */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-[#111111] to-[#050505] transition-opacity duration-700 dark:opacity-0"
        aria-hidden="true"
      />

      {/* Light theme gradient - fades in in light mode */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 opacity-0 transition-opacity duration-700 dark:opacity-100"
        aria-hidden="true"
      />

      {/* Content layer - positioned above gradients */}
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pt-24 pb-16 md:pt-28 lg:pt-32">
        {children}
      </main>
    </div>
  )
}
