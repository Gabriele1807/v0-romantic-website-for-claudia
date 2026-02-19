"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Heart } from "lucide-react"

export function DedicationSection() {
  return (
    <section className="relative px-6 py-20 md:py-28">
      {/* Soft glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 80%, rgba(212,132,154,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <ScrollReveal>
          <div className="mb-6 h-px w-16 bg-gold/40 mx-auto" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="font-serif text-xl text-foreground italic leading-relaxed md:text-2xl">
            Sei la persona pi&ugrave; importante della mia vita. Non smetter&ograve; mai di ringraziarti per quello che sei e per quello che mi dai ogni giorno. Qualunque cosa accada, noi siamo noi.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Con tutto il mio amore
            </p>
            <p className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Gabriele
            </p>
            <Heart
              className="mt-2 text-primary animate-pulse-soft"
              size={20}
              fill="currentColor"
            />
          </div>
        </ScrollReveal>

        {/* Decorative button */}
        <ScrollReveal delay={400}>
          <button
            type="button"
            className="mt-12 rounded-full border border-primary/30 bg-card px-8 py-3 font-serif text-sm text-foreground italic shadow-sm transition-all duration-300 hover:scale-105 hover:bg-secondary hover:shadow-md cursor-default"
            aria-label="Per sempre noi"
          >
            Per sempre noi
            <Heart className="ml-2 inline-block text-primary" size={14} fill="currentColor" />
          </button>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={500}>
          <p className="mt-16 text-xs text-muted-foreground/50">
            Fatto con il cuore, per te.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
