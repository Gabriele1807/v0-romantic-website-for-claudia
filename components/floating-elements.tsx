"use client"

import { useEffect, useState } from "react"
import { Heart, Sparkles, Star } from "lucide-react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  type: "heart" | "star" | "sparkle" | "dot"
  opacity: number
}

function generateParticles(count: number): Particle[] {
  const types: Particle["type"][] = ["heart", "star", "sparkle", "dot"]
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 14,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 4,
    type: types[Math.floor(Math.random() * types.length)],
    opacity: 0.08 + Math.random() * 0.18,
  }))
}

export function FloatingHearts() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(generateParticles(16))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => {
        const Icon =
          p.type === "heart"
            ? Heart
            : p.type === "star"
              ? Star
              : p.type === "sparkle"
                ? Sparkles
                : null

        const colorClass =
          p.type === "heart"
            ? "text-primary"
            : p.type === "star"
              ? "text-gold"
              : p.type === "sparkle"
                ? "text-accent"
                : "text-primary"

        return (
          <div
            key={p.id}
            className={`absolute ${colorClass}`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
              animation: `float-slow ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          >
            {Icon ? (
              <Icon size={p.size} />
            ) : (
              <span
                className="block rounded-full bg-current"
                style={{ width: p.size * 0.4, height: p.size * 0.4 }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

/* Rising hearts that drift upward continuously */
export function RisingHearts() {
  const [hearts, setHearts] = useState<
    { id: number; x: number; size: number; delay: number; duration: number }[]
  >([])

  useEffect(() => {
    setHearts(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        size: 10 + Math.random() * 12,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6,
      }))
    )
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="absolute text-primary/10"
          size={h.size}
          fill="currentColor"
          style={{
            left: `${h.x}%`,
            bottom: "-5%",
            animation: `rise ${h.duration}s ease-in-out infinite`,
            animationDelay: `${h.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
