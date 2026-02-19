"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Heart } from "lucide-react"
import { RisingHearts } from "./floating-elements"

export function DedicationSection() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Layered glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 50% 80%, rgba(212,132,154,0.1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(201,168,210,0.06) 0%, transparent 60%)
          `,
        }}
      />

      <RisingHearts />

      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        {/* Animated gold line */}
        <ScrollReveal variant="scale">
          <div className="mb-8 h-px w-20 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto animate-line-grow" />
        </ScrollReveal>

        <ScrollReveal delay={150} variant="blur" duration={1000}>
          <p className="font-serif text-xl text-foreground italic leading-relaxed md:text-2xl lg:text-3xl">
            Sei la persona pi&ugrave; importante della mia vita. Non smetter&ograve; mai di ringraziarti per quello che sei e per quello che mi dai ogni giorno. Qualunque cosa accada, noi siamo noi.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={350} variant="fade-up">
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-sans">
              Con tutto il mio amore
            </p>

            {/* Signature with gold shimmer */}
            <p className="font-serif text-3xl font-semibold text-foreground md:text-4xl gold-shimmer">
              Gabriele
            </p>

            {/* Animated heart */}
            <div className="mt-3 relative">
              <Heart
                className="text-primary animate-pulse-soft"
                size={24}
                fill="currentColor"
              />
              {/* Ripple rings */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="h-8 w-8 rounded-full border border-primary/20 animate-[pulse-soft_3s_ease-in-out_infinite]" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="h-12 w-12 rounded-full border border-primary/10 animate-[pulse-soft_3s_ease-in-out_infinite_0.5s]" />
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Decorative button */}
        <ScrollReveal delay={550} variant="scale">
          <button
            type="button"
            className="group mt-14 relative rounded-full border border-primary/30 glass-card px-10 py-4 font-serif text-base text-foreground italic shadow-sm transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/15 cursor-default overflow-hidden"
            aria-label="Per sempre noi"
          >
            {/* Shimmer sweep on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
            <span className="relative">
              Per sempre noi
              <Heart className="ml-2 inline-block text-primary transition-transform duration-300 group-hover:scale-125" size={16} fill="currentColor" />
            </span>
          </button>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={700} variant="fade-in">
          <p className="mt-20 text-xs text-muted-foreground/40 font-sans tracking-wider">
            Fatto con il cuore, per te.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
