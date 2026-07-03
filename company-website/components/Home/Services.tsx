'use client'

import Link from 'next/link'

type ServiceItem = { title: string; icon?: string; description?: string; link?: string }

export default function Services({ data }: { data?: { services?: ServiceItem[] } }) {
  const services = data?.services || []
  if (services.length === 0) return null

  return (
    <section id="services" style={{ background: 'var(--bg-main)', padding: '70px 0', userSelect: "none", cursor: "default" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <p style={{ color: 'var(--green-mid)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 8 }}>
            What We Offer
          </p>
          <h2 style={{ color: 'var(--heading-color)', fontSize: 30, fontWeight: 800, margin: 0 }}>
            Our Services at a Glance
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 8 }}>
            Everything you need to scale your business
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => {
            const highlighted = i === 1 // middle-top card highlighted, like reference
            return (
              <Link key={i} href={s.link || '/ser'} style={{ textDecoration: 'none' }}>
                <div className={`service-card ${highlighted ? 'highlighted' : ''}`}>
                  <div className="service-icon">{s.icon}</div>
                  <h3 style={{
                    color: highlighted ? '#fff' : 'var(--heading-color)',
                    fontSize: 15, fontWeight: 700, margin: 0
                  }}>{s.title}</h3>
                  {s.description && (
                    <p style={{
                      color: highlighted ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)',
                      fontSize: 12, lineHeight: 1.6, margin: 0
                    }}>{s.description}</p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
        }
        .service-card {
          background: var(--card-bg); border: 1px solid var(--border-green); border-radius: 18px;
          padding: 26px 20px; display: flex; flex-direction: column; gap: 12px;
          transition: all 0.25s ease; height: 100%;
        }
        .service-card:hover {
          border-color: var(--green-bright);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px var(--border-green-hover);
        }
        .service-card.highlighted {
          background: linear-gradient(135deg, var(--green-bright), var(--green-mid));
          border: none;
        }
        .service-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          display: flex; align-items: center; justify-content: center; font-size: 20px;
        }
        .highlighted .service-icon {
          background: rgba(255,255,255,0.2);
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .service-card { padding: 20px 14px; }
        }
      `}</style>
    </section>
  )
}