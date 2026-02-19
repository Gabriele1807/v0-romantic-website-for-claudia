"use client"

import { ScrollReveal } from "./scroll-reveal"

export function DecorativeSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background morph blob */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-morph"
        aria-hidden="true"
        style={{
          width: "clamp(200px, 40vw, 400px)",
          height: "clamp(200px, 40vw, 400px)",
          background: "radial-gradient(circle, rgba(201,168,210,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <ScrollReveal variant="scale">
          <div className="flex items-center justify-center gap-8">
            {/* Left decorative line */}
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40 md:w-28" />

            {/* Central multi-ring SVG */}
            <div className="relative flex items-center justify-center">
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                className="text-primary/15"
                aria-hidden="true"
              >
                {/* Outer ring - slow rotation */}
                <circle
                  cx="70"
                  cy="70"
                  r="65"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="3 8"
                  className="animate-rotate-slow"
                  style={{ transformOrigin: "70px 70px" }}
                />
                {/* Middle ring - counter rotate */}
                <circle
                  cx="70"
                  cy="70"
                  r="48"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="5 5"
                  style={{ transformOrigin: "70px 70px", animation: "rotate-slow 22s linear infinite reverse" }}
                />
                {/* Inner ring - dotted */}
                <circle
                  cx="70"
                  cy="70"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="1 6"
                  className="animate-rotate-slow"
                  style={{ transformOrigin: "70px 70px", animationDuration: "15s" }}
                />
                {/* Small accent circles */}
                <circle cx="70" cy="5" r="2" fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: "0s" }} />
                <circle cx="135" cy="70" r="1.5" fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: "1s" }} />
                <circle cx="70" cy="135" r="2" fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: "2s" }} />
                <circle cx="5" cy="70" r="1.5" fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: "3s" }} />
              </svg>

              {/* Heart in center with glow */}
              <div className="absolute animate-breathe">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary/40 drop-shadow-sm"
                  aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>

            {/* Right decorative line */}
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40 md:w-28" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250} variant="blur">
          <p className="mt-12 text-center font-serif text-lg text-muted-foreground italic leading-relaxed md:text-xl lg:text-2xl">
            Ogni giorno scelgo te, e ogni giorno lo rifarei.
          </p>
        </ScrollReveal>

        {/* Animated decorative dots line */}
        <ScrollReveal delay={400} variant="scale">
          <div className="mt-10 flex items-center gap-3">
            {[
              { color: "bg-primary/30", delay: "0s" },
              { color: "bg-gold/40", delay: "0.3s" },
              { color: "bg-accent/40", delay: "0.6s" },
              { color: "bg-gold/40", delay: "0.9s" },
              { color: "bg-primary/30", delay: "1.2s" },
            ].map((dot, i) => (
              <span
                key={i}
                className={`block h-2 w-2 rounded-full ${dot.color} animate-pulse-soft`}
                style={{ animationDelay: dot.delay }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
