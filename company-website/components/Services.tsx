'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  { title: 'Web Development', color: '#91a4d7', icon: '💻' },
  { title: 'Laravel Dev', color: '#91a4d7', icon: '⚙️' },
  { title: 'WordPress', color: '#91a4d7', icon: '🌐' },
  { title: 'Shopify', color: '#91a4d7', icon: '🛒' },
  { title: 'YouTube Automation', color: '#91a4d7', icon: '▶️' },
  { title: 'Next.js Apps', color: '#91a4d7', icon: '⚡' },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: 'linear-gradient(135deg, #0f727a, #68477c)',
        overflow: 'hidden',
        userSelect: "none",
        cursor: "default",
      }}
      className="services-section"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <p style={{
            color: '#91a4d7', fontSize: 10,
            letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 2,
          }}>
            What We Do
          </p>
          <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, margin: 0 }}>
            Services
          </h2>
        </div>

        {/* SCROLL */}
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            style={{ display: 'flex', gap: 12, width: 'max-content', alignItems: 'center' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          >
            {[...services, ...services].map((s, i) => (
              <Link key={i} href="/ser" style={{ textDecoration: 'none' }}>
                <div
                  className="service-card"
                  style={{
                    background: '#111118',
                    border: '1px solid rgba(145,164,215,0.12)',
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.borderColor = s.color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(145,164,215,0.12)'
                  }}
                >
                  <div style={{ fontSize: 16 }}>{s.icon}</div>
                  <p style={{ color: '#fff', fontSize: 11, fontWeight: 600, margin: 0 }}>
                    {s.title}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

      </div>

      <style>{`
        .services-section {
          padding: 18px 0 22px;
        }
        .service-card {
          width: 150px;
          height: 80px;
        }
        @media (max-width: 768px) {
          .services-section {
            padding: 32px 0 28px;
            margin-top: 16px;
          }
          .service-card {
            width: 110px;
            height: 65px;
          }
        }
      `}</style>
    </section>
  )
}