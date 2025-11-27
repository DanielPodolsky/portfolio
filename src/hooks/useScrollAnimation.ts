interface ScrollAnimationOptions {
  // Optional settings
  delay?: number
  duration?: number
  yOffset?: number
  disable?: boolean
  variant?: "default" | "slideLeft" | "slideRight"
}

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

export function useScrollAnimation(options?: ScrollAnimationOptions) {
  // Create ref to attach to the element to be animated
  const elementRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Don't animate if element does not exist
    if (!elementRef.current) return

    // Check media queries inside useGSAP to avoid SSR issues
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    const slideDistance = options?.yOffset ?? (isMobile ? 20 : 30)
    const horizontalSlideDistance = isMobile ? 50 : 100 // Reduced on mobile for performance

    // Store ref for callbacks
    const element = elementRef.current

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
        startProps = { opacity: 0, x: -horizontalSlideDistance }
      } else if (variant === "slideRight") {
        startProps = { opacity: 0, x: horizontalSlideDistance }
      } else {
        startProps = { opacity: 0, y: slideDistance }
      }

      const endProps: { opacity: number; y?: number; x?: number } =
        variant === "slideLeft" || variant === "slideRight"
          ? { opacity: 1, x: 0 }
          : { opacity: 1, y: 0 }

      // Create paused animation - won't run until triggered
      const tween = gsap.fromTo(element, startProps, {
        ...endProps,
        duration: (options?.duration ?? 700) / 1000,
        delay: options?.delay ?? 0,
        ease: "power2.out",
        force3D: true,
        paused: true,
        onStart: () => {
          element.style.willChange = "transform, opacity"
        },
        onComplete: () => {
          element.style.willChange = "auto"
        },
      })

      // ScrollTrigger only plays when user has actually scrolled
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        once: true,
        onEnter: () => {
          // Only animate if user has scrolled (prevents immediate trigger on page load)
          if (window.scrollY > 10) {
            tween.play()
          } else {
            // If not scrolled yet, wait for first scroll then play
            const onFirstScroll = () => {
              tween.play()
              window.removeEventListener("scroll", onFirstScroll)
            }
            window.addEventListener("scroll", onFirstScroll, { once: true })
          }
        },
      })
    }
  }, {
    scope: elementRef,
    dependencies: [options?.delay, options?.variant, options?.duration, options?.yOffset]
  })

  return elementRef
}
