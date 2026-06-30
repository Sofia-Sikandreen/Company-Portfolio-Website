"use client";
import { serviceIconMap } from '@/lib/serviceIcons'

type PlatformItem = { name: string; icon: string }
type PlatformData = {
  headingLine1?: string
  headingLine2?: string
  description?: string
  platforms: PlatformItem[]
}

export default function Platform({ data }: { data: PlatformData }) {
  const { headingLine1, headingLine2, description, platforms = [] } = data || {}
  return (
    <div className="platform-grid" style={{ marginTop: 70 }}>
      <div style={{
        background: "var(--card-bg)", border: "1px solid var(--border-green)",
        borderRadius: 20, padding: 28,
      }}>
        <h2 style={{ fontSize: 30, fontWeight: 800 }}>
          {headingLine1}<br />
          <span className="gradient-text">{headingLine2}</span>
        </h2>
        <p style={{ marginTop: 14, color: "var(--text-secondary)" }}>{description}</p>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        border: "1px solid var(--border-green)", borderRadius: 20,
        overflow: "hidden", background: "var(--card-bg)",
      }}>
        {platforms.map((p, i) => {
          const Icon = serviceIconMap[p.icon] || serviceIconMap.cloud
          return (
            <div key={i} style={{
              padding: 20, textAlign: "center", marginTop: 7,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            }}>
              <Icon size={22} style={{ color: "var(--green-lime)" }} />
              <p style={{ fontSize: 12, margin: 0, color: "var(--text-secondary)" }}>{p.name}</p>
            </div>
          )
        })}
      </div>

      <style>{`
        .platform-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 768px) { .platform-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}