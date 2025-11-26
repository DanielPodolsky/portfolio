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
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function useScrollAnimation(options?: ScrollAnimationOptions) {
  // Create ref to attach to the element to be animated
  const elementRef = useRef<HTMLElement>(null)

  // Accessibility check for reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  const isMobile = window.matchMedia("(max-width: 768px)").matches

  const slideDistance = options?.yOffset ?? (isMobile ? 20 : 30) // if options exist, take yOffset else return undefined. If undefined, use 20 for mobile and 30 for desktop

  useEffect(() => {
    // Don't animate if element does not exist
    if (!elementRef.current) return

    // Performance optimiation, hints browser we'll animate these properties
    elementRef.current.style.willChange = "transform, opacity"

    if (prefersReducedMotion) {
      // opacity only (no transforms)
      gsap.fromTo(
        elementRef.current,
        { opacity: 0.8 },
        {
          opacity: 1,
          duration: (options?.duration ?? 700) / 1000, // convert ms to seconds
          delay: options?.delay ?? 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
          onComplete: () => {
            if (elementRef.current) {
              elementRef.current.style.willChange = "auto"
            }
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

      gsap.fromTo(elementRef.current, startProps, {
        ...endProps,
        duration: (options?.duration ?? 700) / 1000,
        delay: options?.delay ?? 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
        onComplete: () => {
          if (elementRef.current) {
            elementRef.current.style.willChange = "auto"
          }
        },
      })
    }

    return () => {
      // Cleanup ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === elementRef.current) {
          trigger.kill()
        }
      })
    }
  }, [
    options?.delay,
    options?.variant,
    options?.duration,
    slideDistance,
    prefersReducedMotion,
  ])

  return elementRef
}
