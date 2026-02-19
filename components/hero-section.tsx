"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import { FloatingHearts, RisingHearts } from "./floating-elements"

function AnimatedTitle({ text }: { text: string }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateY(0) rotateX(0deg)"
              : "translateY(20px) rotateX(40deg)",
            filter: mounted ? "blur(0px)" : "blur(4px)",
            transitionDelay: `${400 + i * 60}ms`,
            transitionDuration: "700ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  )
}

function TypewriterText({ text, startDelay = 1500 }: { text: string; startDelay?: number }) {
  const [displayed, setDisplayed] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) {
          clearInterval(interval)
          setTimeout(() => setShowCursor(false), 1500)
        }
      }, 40)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(startTimeout)
  }, [text, startDelay])

  return (
    <p className="font-serif text-lg text-muted-foreground italic md:text-xl lg:text-2xl leading-relaxed">
      {displayed}
      {showCursor && (
        <span className="ml-0.5 inline-block h-[1.2em] w-[2px] bg-primary/50 align-text-bottom animate-pulse-soft" />
      )}
    </p>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Layered radial glows */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 50% 35%, rgba(201,168,210,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 30% 60%, rgba(212,132,154,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 70% 50%, rgba(201,169,110,0.06) 0%, transparent 60%)
          `,
        }}
      />

      {/* Morphing background blob */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-morph animate-breathe"
        aria-hidden="true"
        style={{
          width: "clamp(300px, 50vw, 600px)",
          height: "clamp(300px, 50vw, 600px)",
          background: "radial-gradient(circle, rgba(212,132,154,0.06) 0%, transparent 70%)",
        }}
      />

      <FloatingHearts />
      <RisingHearts />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center perspective-1000">
        {/* Decorative heart */}
        <div
          className="mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0)",
            transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transitionDelay: "200ms",
          }}
        >
          <Heart
            className="text-primary animate-pulse-soft"
            size={36}
            fill="currentColor"
          />
        </div>

        {/* Animated title */}
        <AnimatedTitle text="Per te, Claudia❤️‍🩹" />

        {/* Decorative gold line */}
        <div
          className="my-8 h-px bg-gold/60"
          style={{
            width: mounted ? "96px" : "0px",
            transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "1.4s",
          }}
        />

        {/* Typewriter subtitle */}
        <TypewriterText text="Grazie per essere rimasta al mio fianco. Io ci sono, e ci sarò sempre e èer sempre." />

        {/* Intro text */}
        <p
          className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "3.5s",
          }}
        >
          Questo piccolo spazio &egrave; per dirti tutto quello che a volte le parole non riescono a esprimere abbastanza.
        </p>

        {/* Scroll hint */}
        <div
          className="mt-14"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease",
            transitionDelay: "4.2s",
          }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <span className="text-xs uppercase tracking-[0.3em] font-sans">Scorri</span>
            <svg
              width="20"
              height="30"
              viewBox="0 0 20 30"
              fill="none"
              className="animate-scroll-hint"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="2.5" fill="currentColor" className="animate-scroll-hint" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
