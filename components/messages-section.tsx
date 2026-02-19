"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Heart, HandHeart, Ear, Sun } from "lucide-react"

const messages = [
  {
    icon: Heart,
    title: "Grazie di esserci stata",
    text: "Ci sono stati momenti in cui tutto sembrava pi\u00f9 pesante del solito, in cui le giornate si facevano difficili e il mondo si restringeva. Tu sei rimasta. Non hai chiesto spiegazioni, non ti sei allontanata. Sei stata l\u00ec, silenziosa e forte, con quella presenza che vale pi\u00f9 di mille parole. E io te ne sar\u00f2 grato per sempre.",
  },
  {
    icon: Ear,
    title: "Voglio ascoltarti davvero",
    text: "Mi rendo conto che a volte mi sono perso nei miei pensieri, nelle mie difficolt\u00e0, e forse non ti ho dato abbastanza spazio. Adesso voglio fare diversamente. Voglio ascoltarti, sul serio. Sapere come stai, cosa provi, cosa ti preoccupa e cosa ti fa sorridere. Il tuo mondo conta tanto quanto il mio, e voglio entrarci in punta di piedi, con attenzione.",
  },
  {
    icon: HandHeart,
    title: "Non sei sola, mai",
    text: "Qualunque cosa accada, qualunque giorno venga, sappi che io ci sar\u00f2. Non solo quando va tutto bene, ma soprattutto quando le cose diventano complicate. Nei silenzi, nelle lacrime, nei dubbi. Non devi affrontare nulla da sola. Io sono qui, e qui resto.",
  },
  {
    icon: Sun,
    title: "Il nostro futuro, insieme",
    text: "Non so cosa ci riserva il domani, ma so con certezza che voglio viverlo con te. Ogni passo, ogni scelta, ogni piccola avventura. Perch\u00e9 quello che abbiamo \u00e8 raro, \u00e8 vero, e vale la pena proteggerlo ogni giorno. Ti amo, e questo non cambier\u00e0.",
  },
]

export function MessagesSection() {
  return (
    <section className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <p className="mb-16 text-center font-serif text-sm uppercase tracking-[0.25em] text-gold">
            Dal mio cuore al tuo
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-16">
          {messages.map((msg, i) => {
            const Icon = msg.icon
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <article className="group">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon size={18} />
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
                      {msg.title}
                    </h2>
                  </div>
                  <p className="pl-13 text-base text-muted-foreground leading-relaxed md:text-lg">
                    {msg.text}
                  </p>
                  {i < messages.length - 1 && (
                    <div className="mt-12 flex justify-center">
                      <div className="h-px w-16 bg-border" />
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
