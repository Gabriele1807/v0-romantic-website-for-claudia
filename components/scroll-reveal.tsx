"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type AnimationVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale" | "blur"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: AnimationVariant
  duration?: number
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  blur: {
    hidden: "opacity-0 blur-sm translate-y-4",
    visible: "opacity-100 blur-0 translate-y-0",
  },
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  duration = 800,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const styles = variantStyles[variant]

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible ? styles.visible : styles.hidden
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}
