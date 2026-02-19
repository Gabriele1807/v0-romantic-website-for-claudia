"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Heart, HandHeart, MessageCircleHeart, Infinity } from "lucide-react"

const quotes = [
  {
    text: "Sono qui per te, sempre.",
    icon: Heart,
  },
  {
    text: "Ti ascolto, anche quando le parole fanno fatica a uscire.",
    icon: MessageCircleHeart,
  },
  {
    text: "Non sei sola, camminiamo insieme.",
    icon: HandHeart,
  },
  {
    text: "Ti amo, oggi e domani.",
    icon: Infinity,
  },
]

export function QuotesSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,210,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <ScrollReveal variant="blur">
          <p className="mb-14 text-center font-serif text-sm uppercase tracking-[0.3em] gold-shimmer">
            Promesse dal cuore
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {quotes.map((quote, i) => {
            const Icon = quote.icon
            return (
              <ScrollReveal key={i} delay={i * 150} variant="scale" duration={700}>
                <div className="group relative glass-card rounded-2xl px-7 py-12 text-center transition-all duration-500 tilt-hover animate-glow-pulse hover:shadow-lg hover:shadow-primary/10">
                  {/* Top gold accent with draw animation */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-line-grow" style={{ animationDelay: `${0.5 + i * 0.2}s` }} />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  </div>

                  <div className="relative mb-6 mx-auto flex h-14 w-14 items-center justify-center">
                    {/* Outer rotating ring */}
                    <span
                      className="absolute inset-0 rounded-full border border-dashed border-primary/15 transition-all duration-700 group-hover:border-primary/40 group-hover:scale-125"
                      style={{ animation: "rotate-slow 20s linear infinite" }}
                      aria-hidden="true"
                    />
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/25">
                      <Icon size={22} className="transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>

                  <blockquote className="font-serif text-xl text-foreground italic leading-relaxed md:text-2xl">
                    {`\u201C${quote.text}\u201D`}
                  </blockquote>

                  {/* Decorative dots */}
                  <div className="mt-6 flex items-center justify-center gap-1.5">
                    <span className="block h-1 w-1 rounded-full bg-primary/20 transition-all duration-300 group-hover:bg-primary/50" />
                    <span className="block h-1 w-1 rounded-full bg-gold/20 transition-all duration-300 group-hover:bg-gold/50" />
                    <span className="block h-1 w-1 rounded-full bg-primary/20 transition-all duration-300 group-hover:bg-primary/50" />
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
