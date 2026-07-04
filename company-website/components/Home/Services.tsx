'use client'

import Link from 'next/link'

type ServiceItem = { title: string; icon?: string; description?: string; link?: string }

export default function Services({ data }: { data?: { services?: ServiceItem[] } }) {
  const services = data?.services || []
  if (services.length === 0) return null

  return (
    <section id="services" style={{ background: 'var(--bg-main)', padding: '90px 0', userSelect: "none", cursor: "default" }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>

        {/* dark green panel — exactly like image1's "Our Services" block */}
        <div className="services-panel">
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 800, margin: 0, textAlign: 'center' }}>
            Our Services
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginTop: 10, textAlign: 'center', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Everything you need to scale your business, handled by experts.
          </p>

          <div className="services-grid">
            {services.map((s, i) => (
              <Link key={i} href={s.link || '/ser'} style={{ textDecoration: 'none' }}>
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3 style={{ color: '#fff', fontSize: 15, fontWeight: 700, margin: 0 }}>{s.title}</h3>
                  {s.description && (
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12.5, lineHeight: 1.6, margin: 0 }}>{s.description}</p>
                  )}
                  <span className="learn-more">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .services-panel {
          background: var(--green-dark);
          border-radius: 28px;
          padding: 44px 36px;
        }
        .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 36px; }
        .service-card {
          border-radius: 16px; padding: 24px 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-direction: column; gap: 12px;
          transition: all 0.25s ease;
        }
        .service-card:hover { border-color: var(--green-bright); transform: translateY(-5px); }
        .service-icon {
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--green-bright);
          display: flex; align-items: center; justify-content: center; font-size: 18px;
          color: #fff;
        }
        .learn-more { font-size: 12px; font-weight: 700; color: var(--green-lime); margin-top: auto; }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } .services-panel { padding: 28px 20px; } }
        @media (max-width: 500px) { .services-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}