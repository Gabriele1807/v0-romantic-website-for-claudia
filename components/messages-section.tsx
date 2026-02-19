"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Heart, HandHeart, Ear, Sun } from "lucide-react"

const messages = [
  {
    icon: Heart,
    title: "Grazie di esserci stata",
    text: "Ci sono stati momenti difficili in cui stavo tanto male e tutto sembrava buio e pesante, dove le giornate erano difficili e il mondo si chiudeva intorno a me. Tu mi sei rimasta accanto, non hai fatto come tutte le persone, sei stata lì accanto a me, con quella presenza ceh vale più di mille parole. E io te ne sarò grato per sempre.",
  },
  {
    icon: Ear,
    title: "Voglio ascoltarti davvero",
    text: "Mi rendo conto che avvolte mi sono perso nei miei pensieri e nelle mie difficoltà, sono stato egoista, e forse non ti ho dato abbastanza spazio e tempo. Adesso però voglio fare le cose diversamente. Voglio ascoltarti sul serio, sapere come stai, cosa provi , cosa ti preoccupa e cosa ti fa sorridere. quello che provi conta tanto quanto quello che provo io, e forse anche di più. Voglio entrare nel tuo mondo con tutto me stesso.",
  },
  {
    icon: HandHeart,
    title: "Non sei sola, mai",
    text: "qualunque cosa accada, qualunque giorno venga, sappi che io ci sarò. Non solo quando va tutto bene, ma soprattutto quando le cose diventano complicate. Nei silenzi, nelle lacrime, nei dubbi e nelle tristezze. Non devi affrontare le cose da sola, io sono qui con te e per te, e qui resterò.",
  },
  {
    icon: Sun,
    title: "Il nostro futuro insieme",
    text: "Non so cosa ci riservi il domani, ma so con certezza che voglio viverlo con te. Ogni passo, ogni scelta, ogni piccola avventura. Perchè quello che abbiamo insieme vale la pena proteggerlo ogni giorno e continuare a coltivarlo. Ti amo, e questo non cambierà mai e poi mai.",
  },
]

const variants: Array<"fade-left" | "fade-right"> = [
  "fade-left",
  "fade-right",
  "fade-left",
  "fade-right",
]

export function MessagesSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal variant="scale">
          <p className="mb-16 text-center font-serif text-sm uppercase tracking-[0.3em] gold-shimmer">
            Dal mio cuore al tuo
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-20">
          {messages.map((msg, i) => {
            const Icon = msg.icon
            return (
              <ScrollReveal key={i} delay={i * 80} variant={variants[i]} duration={900}>
                <article className="group relative">
                  {/* Side accent line */}
                  <div
                    className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                    style={{ left: i % 2 === 0 ? "-16px" : "auto", right: i % 2 === 1 ? "-16px" : "auto" }}
                    aria-hidden="true"
                  />

                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon size={20} className="transition-transform duration-500 group-hover:scale-110" />
                      {/* Ring animation on hover */}
                      <span className="absolute inset-0 rounded-full border border-primary/0 transition-all duration-500 group-hover:border-primary/30 group-hover:scale-125 group-hover:opacity-0" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl transition-colors duration-300 group-hover:text-primary">
                      {msg.title}
                    </h2>
                  </div>

                  <p className="pl-16 text-base text-muted-foreground leading-relaxed md:text-lg">
                    {msg.text}
                  </p>

                  {i < messages.length - 1 && (
                    <div className="mt-16 flex justify-center">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-border" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                        <div className="h-px w-8 bg-border" />
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
