"use client";
import { useEffect, useState } from "react";

type ListItem = { title: string; date: string }
type CmsClockData = {
  cmsHeading?: string
  cmsHighlightedWord?: string
  cmsHeadingSuffix?: string
  cmsDescription?: string
  listItems?: ListItem[]
  clockHeading?: string
  clockHighlightedWord?: string
  clockDescription?: string
  clockFooterText?: string
}

export default function CmsClockBlock({ data }: { data: CmsClockData }) {
  const {
    cmsHeading, cmsHighlightedWord, cmsHeadingSuffix,
    cmsDescription, listItems = [],
    clockHeading, clockHighlightedWord, clockDescription, clockFooterText,
  } = data || {}

  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const hourDeg = time ? (time.getHours() % 12) * 30 + time.getMinutes() * 0.5 : 0
  const minuteDeg = time ? time.getMinutes() * 6 : 0
  const secondDeg = time ? time.getSeconds() * 6 : 0

  return (
    <div className="cms-clock-grid" style={{ marginTop: 80 }}>

      {/* CMS CARD */}
      <div style={{
        background: "var(--card-bg)", padding: 28,
        borderRadius: 20, border: "1px solid var(--border-green)",
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 800 }}>
          {cmsHeading} <span className="gradient-text">{cmsHighlightedWord}</span> {cmsHeadingSuffix}
        </h2>
        <p style={{ marginTop: 12, color: "var(--text-secondary)" }}>{cmsDescription}</p>
        {listItems.length > 0 && (
          <div style={{ marginTop: 20, padding: 16, border: "1px solid var(--border-green)", borderRadius: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <b style={{ color: "var(--green-lime)" }}>Title</b>
              <b style={{ color: "var(--green-lime)" }}>Date</b>
            </div>
            {listItems.map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)", fontSize: 13, marginTop: 8 }}>
                <span>{item.title}</span><span>{item.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CLOCK CARD */}
      <div style={{
        background: "var(--card-bg)", padding: 28, borderRadius: 20,
        border: "1px solid var(--border-green)", textAlign: "center",
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 800 }}>
          {clockHeading} <span className="gradient-text">{clockHighlightedWord}</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", marginTop: 10 }}>{clockDescription}</p>

        {time && (
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
        )}
        <p style={{ color: "var(--green-bright)" }}>{clockFooterText}</p>
      </div>

      <style>{`
        .cms-clock-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .cms-clock-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}