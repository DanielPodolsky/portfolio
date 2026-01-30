interface ScrollAnimationOptions {
  // Optional settings
  delay?: number
  duration?: number
  yOffset?: number
  disable?: boolean
  variant?: "default" | "slideLeft" | "slideRight"
}

import { useRef, useEffect } from "react"
import { gsap } from "gsap"

export function useScrollAnimation(options?: ScrollAnimationOptions) {
  // Create ref to attach to the element to be animated
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Don't animate if element does not exist
    if (!elementRef.current) return

    // Check media queries inside useEffect to avoid SSR issues
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    const slideDistance = options?.yOffset ?? (isMobile ? 20 : 30)

    // Store ref for callbacks
    const element = elementRef.current

    // Use gsap.context() for scoped cleanup - avoids race conditions
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // opacity only (no transforms)
        gsap.fromTo(
          element,
          { opacity: 0.8 },
          {
            opacity: 1,
            duration: (options?.duration ?? 700) / 1000,
            delay: options?.delay ?? 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
            onStart: () => {
              // Set will-change only when animation actually starts
              element.style.willChange = "opacity"
            },
            onComplete: () => {
              // Reset will-change after animation completes
              element.style.willChange = "auto"
            },
          }
        )
      } else {
        // Normal motion
        const variant = options?.variant || "default"
        let startProps: { opacity: number; y?: number; x?: number }
        if (variant === "slideLeft") {
          startProps = { opacity: 0, x: -100 }
        } else if (variant === "slideRight") {
          startProps = { opacity: 0, x: 100 }
        } else {
          startProps = { opacity: 0, y: slideDistance }
        }

        const endProps: { opacity: number; y?: number; x?: number } =
          variant === "slideLeft" || variant === "slideRight"
            ? { opacity: 1, x: 0 }
            : { opacity: 1, y: 0 }

        gsap.fromTo(element, startProps, {
          ...endProps,
          duration: (options?.duration ?? 700) / 1000,
          delay: options?.delay ?? 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
          onStart: () => {
            // Set will-change only when animation actually starts
            element.style.willChange = "transform, opacity"
          },
          onComplete: () => {
            // Reset will-change after animation completes
            element.style.willChange = "auto"
          },
        })
      }
    }, elementRef) // Scope to this element

    return () => ctx.revert() // Clean up all GSAP animations in this context
  }, [options?.delay, options?.variant, options?.duration, options?.yOffset])

  return elementRef
}
