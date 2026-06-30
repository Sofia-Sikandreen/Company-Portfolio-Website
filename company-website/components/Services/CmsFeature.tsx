"use client";
import { useEffect, useState } from "react"

type ClockFeatureData = {
  heading?: string
  highlightedWord?: string
  description?: string
  footerText?: string
}

export default function ClockFeature({ data }: { data: ClockFeatureData }) {
  const { heading, highlightedWord, description, footerText } = data || {}
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) return null

  const hours = time.getHours() % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const hourDeg = hours * 30 + minutes * 0.5
  const minuteDeg = minutes * 6
  const secondDeg = seconds * 6

  return (
    <div className="feature-card" style={{
      background: "var(--card-bg)", padding: 28, borderRadius: 20,
      border: "1px solid var(--border-green)", textAlign: "center",
      display: "inline-block", width: "calc(50% - 12px)", verticalAlign: "top",
      marginBottom: 24, boxSizing: "border-box",
    }}>
      <h2 style={{ fontSize: 28, fontWeight: 800 }}>
        {heading} <span className="gradient-text">{highlightedWord}</span>
      </h2>
      <p style={{ color: "var(--text-secondary)", marginTop: 10 }}>{description}</p>

      <div style={{
        width: 180, height: 180, margin: "20px auto",
        borderRadius: "50%", border: "1px solid var(--green-mid)", position: "relative",
      }}>
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30
          const x = 50 + 42 * Math.sin((angle * Math.PI) / 180)
          const y = 50 - 42 * Math.cos((angle * Math.PI) / 180)
          return (
            <span key={i} style={{
              position: "absolute", left: `${x}%`, top: `${y}%`,
              transform: "translate(-50%, -50%)", fontSize: 9, color: "var(--text-secondary)",
            }}>{i + 1}</span>
          )
        })}
        <div style={{ position: "absolute", width: 10, height: 10, background: "var(--text-primary)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }} />
        <div style={{ position: "absolute", width: 4, height: 55, background: "var(--text-primary)", top: "50%", left: "50%", transformOrigin: "bottom", transform: `translate(-50%, -100%) rotate(${hourDeg}deg)` }} />
        <div style={{ position: "absolute", width: 3, height: 68, background: "var(--text-secondary)", top: "50%", left: "50%", transformOrigin: "bottom", transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)` }} />
        <div style={{ position: "absolute", width: 2, height: 75, background: "var(--green-bright)", top: "50%", left: "50%", transformOrigin: "bottom", transform: `translate(-50%, -100%) rotate(${secondDeg}deg)` }} />
      </div>
      <p style={{ color: "var(--green-bright)" }}>{footerText}</p>
      <style>{`
        @media (max-width: 768px) {
          .feature-card { width: 100% !important; }
        }
      `}</style>
    </div>
  )
}