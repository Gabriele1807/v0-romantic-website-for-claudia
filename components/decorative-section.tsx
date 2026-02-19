"use client"

import { ScrollReveal } from "./scroll-reveal"

export function DecorativeSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-6">
            {/* Left decorative line */}
            <div className="h-px w-16 bg-gold/30 md:w-24" />

            {/* Central decorative SVG composition */}
            <div className="relative flex items-center justify-center">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                className="text-primary/20"
                aria-hidden="true"
              >
                {/* Outer ring */}
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="4 6"
                  className="animate-[spin_30s_linear_infinite]"
                />
                {/* Inner ring */}
                <circle
                  cx="60"
                  cy="60"
                  r="38"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="2 8"
                  className="animate-[spin_20s_linear_infinite_reverse]"
                />
              </svg>
              {/* Heart in center */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute text-primary/40 animate-pulse-soft"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Right decorative line */}
            <div className="h-px w-16 bg-gold/30 md:w-24" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-center font-serif text-base text-muted-foreground italic leading-relaxed md:text-lg">
            Ogni giorno scelgo te, e ogni giorno lo rifarei.
          </p>
        </ScrollReveal>

        {/* Decorative dots */}
        <ScrollReveal delay={350}>
          <div className="mt-8 flex items-center gap-2">
            <span className="block h-1.5 w-1.5 rounded-full bg-primary/30" />
            <span className="block h-1.5 w-1.5 rounded-full bg-gold/40" />
            <span className="block h-1.5 w-1.5 rounded-full bg-accent/40" />
            <span className="block h-1.5 w-1.5 rounded-full bg-gold/40" />
            <span className="block h-1.5 w-1.5 rounded-full bg-primary/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
