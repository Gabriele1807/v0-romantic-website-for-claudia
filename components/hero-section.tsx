"use client"

import { Heart } from "lucide-react"
import { FloatingHearts } from "./floating-elements"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Soft radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,210,0.15) 0%, transparent 70%)",
        }}
      />

      <FloatingHearts />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Decorative heart */}
        <div className="mb-8 animate-fade-in">
          <Heart
            className="text-primary animate-pulse-soft"
            size={36}
            fill="currentColor"
          />
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
          Per te, Claudia
        </h1>

        {/* Decorative gold line */}
        <div className="my-6 h-px w-24 bg-gold/50 animate-fade-in delay-200" />

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-300 font-serif text-lg text-muted-foreground italic md:text-xl leading-relaxed">
          Grazie per essere rimasta al mio fianco. Io ci sono, e ci sar&ograve; sempre.
        </p>

        {/* Intro text */}
        <p className="mt-6 animate-fade-in-up delay-500 max-w-md text-base text-muted-foreground leading-relaxed">
          Questo piccolo spazio &egrave; per dirti tutto quello che a volte le parole non riescono a esprimere abbastanza.
        </p>

        {/* Scroll hint */}
        <div className="mt-12 animate-fade-in delay-700">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs uppercase tracking-widest">Scorri</span>
            <div className="h-8 w-px bg-muted-foreground/20 animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  )
}
