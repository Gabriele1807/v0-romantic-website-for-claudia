"use client"

import { Heart, Sparkles, Star } from "lucide-react"

export function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Stylized hearts */}
      <Heart
        className="absolute top-[10%] left-[8%] text-primary/20 animate-float"
        size={20}
        style={{ animationDelay: "0s" }}
      />
      <Heart
        className="absolute top-[25%] right-[12%] text-accent/25 animate-float"
        size={16}
        style={{ animationDelay: "1.2s" }}
      />
      <Heart
        className="absolute bottom-[30%] left-[15%] text-primary/15 animate-float"
        size={14}
        style={{ animationDelay: "2.4s" }}
      />
      <Heart
        className="absolute top-[60%] right-[8%] text-primary/20 animate-float"
        size={18}
        style={{ animationDelay: "0.6s" }}
      />

      {/* Stars */}
      <Star
        className="absolute top-[15%] right-[25%] text-gold/30 animate-sparkle"
        size={12}
        style={{ animationDelay: "0.3s" }}
      />
      <Star
        className="absolute top-[45%] left-[5%] text-gold/25 animate-sparkle"
        size={10}
        style={{ animationDelay: "1.5s" }}
      />
      <Star
        className="absolute bottom-[20%] right-[18%] text-gold/30 animate-sparkle"
        size={11}
        style={{ animationDelay: "2s" }}
      />

      {/* Sparkles */}
      <Sparkles
        className="absolute top-[35%] right-[5%] text-gold/20 animate-pulse-soft"
        size={14}
        style={{ animationDelay: "0.8s" }}
      />
      <Sparkles
        className="absolute bottom-[15%] left-[10%] text-accent/20 animate-pulse-soft"
        size={12}
        style={{ animationDelay: "1.8s" }}
      />
    </div>
  )
}
