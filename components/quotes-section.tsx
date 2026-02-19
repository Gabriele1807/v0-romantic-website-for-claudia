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
    <section className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="mb-12 text-center font-serif text-sm uppercase tracking-[0.25em] text-gold">
            Promesse dal cuore
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {quotes.map((quote, i) => {
            const Icon = quote.icon
            return (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="group relative flex flex-col items-center rounded-2xl border border-border/60 bg-card px-6 py-10 text-center shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-primary/30">
                  {/* Gold decorative accent */}
                  <div className="absolute top-0 left-1/2 h-px w-12 -translate-x-1/2 bg-gold/40" />

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <blockquote className="font-serif text-lg text-foreground italic leading-relaxed md:text-xl">
                    {`\u201C${quote.text}\u201D`}
                  </blockquote>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
