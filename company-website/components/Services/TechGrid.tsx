"use client";
import { serviceIconMap } from '@/lib/serviceIcons'

type Item = { name: string; icon: string }
type TechGridData = { items: Item[] }

export default function TechGrid({ data }: { data: TechGridData }) {
  const items = data?.items || []
  return (
    <div className="services-grid">
      {items.map((item, index) => {
        const Icon = serviceIconMap[item.icon] || serviceIconMap.react
        return (
          <div key={index} style={{
            padding: 22, borderRadius: 16, textAlign: "center",
            background: "var(--card-bg)", border: "1px solid var(--border-green)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          }}>
            <Icon size={32} style={{ color: "var(--green-lime)", marginBottom: 10 }} />
            <h3 style={{ color: "var(--green-lime)", fontSize: 14, fontWeight: 600 }}>
              {item.name.toUpperCase()}
            </h3>
          </div>
        )
      })}
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
      `}</style>
    </div>
  )
}