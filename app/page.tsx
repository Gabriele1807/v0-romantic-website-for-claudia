import { HeroSection } from "@/components/hero-section"
import { MessagesSection } from "@/components/messages-section"
import { QuotesSection } from "@/components/quotes-section"
import { DecorativeSection } from "@/components/decorative-section"
import { DedicationSection } from "@/components/dedication-section"

function SoftDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </div>
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden selection:bg-primary/20 selection:text-foreground">
      <HeroSection />

      <SoftDivider />

      <MessagesSection />

      <SoftDivider />

      <QuotesSection />

      <DecorativeSection />

      <SoftDivider />

      <DedicationSection />
    </main>
  )
}
