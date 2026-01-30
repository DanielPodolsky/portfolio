import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-[#111111] to-[#050505]">
      <main
        className={
          "mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pt-24 pb-16 md:pt-28 lg:pt-32"
        }
      >
        {children}
      </main>
    </div>
  )
}
