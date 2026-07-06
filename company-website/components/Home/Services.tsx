'use client'

import Link from 'next/link'

type ServiceItem = { title: string; icon?: string; link?: string }

export default function Services({ data }: { data?: { services?: ServiceItem[] } }) {
  const services = data?.services || []
  if (services.length === 0) return null

  return (
    <section id="services" style={{ background: 'var(--bg-main)', padding: '60px 0', userSelect: "none", cursor: "default" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: 'var(--green-mid)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 8 }}>
            What We Offer
          </p>
          <h2 style={{ color: 'var(--heading-color)', fontSize: 30, fontWeight: 800, margin: 0 }}>
            Our Services at a Glance
          </h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <Link key={i} href={s.link || '/ser'} style={{ textDecoration: 'none' }}>
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 style={{ color: 'var(--heading-color)', fontSize: 15, fontWeight: 700, margin: 0 }}>{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
        }
        .service-card {
          background: var(--card-bg); border: 1px solid var(--border-green); border-radius: 18px;
          padding: 26px 20px; display: flex; flex-direction: column; gap: 14px;
          transition: all 0.25s ease; height: 100%;
        }
        .service-card:hover {
          border-color: var(--green-bright);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px var(--border-green-hover);
        }
        .service-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          display: flex; align-items: center; justify-content: center; font-size: 20px;
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .service-card { padding: 20px 14px; }
        }
      `}</style>
    </section>
  )
}