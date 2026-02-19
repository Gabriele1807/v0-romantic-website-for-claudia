import { HeroSection } from "@/components/hero-section"
import { MessagesSection } from "@/components/messages-section"
import { QuotesSection } from "@/components/quotes-section"
import { DecorativeSection } from "@/components/decorative-section"
import { DedicationSection } from "@/components/dedication-section"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />

      {/* Soft divider */}
      <div className="mx-auto h-px w-full max-w-xs bg-border/50" />

      <MessagesSection />

      <div className="mx-auto h-px w-full max-w-xs bg-border/50" />

      <QuotesSection />

      <DecorativeSection />

      <div className="mx-auto h-px w-full max-w-xs bg-border/50" />

      <DedicationSection />
    </main>
  )
}
