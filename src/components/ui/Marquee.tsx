import { type ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  className?: string
  pauseOnHover?: boolean
  speed?: number // seconds for one full loop
  direction?: "left" | "right"
}

export function Marquee({
  children,
  className = "",
  pauseOnHover = true,
  speed = 30,
  direction = "left",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {/* First copy */}
        <div className="flex shrink-0">{children}</div>
        {/* Second copy for seamless loop */}
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
