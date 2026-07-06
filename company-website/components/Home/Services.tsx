'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type ServiceItem = { title: string; icon?: string; link?: string }

export default function Services({ data }: { data?: { services?: ServiceItem[] } }) {
  const services = data?.services || []
  if (services.length === 0) return null
  const doubled = [...services, ...services]

  return (
    <section id="services" className="services-section" style={{ userSelect: 'none', cursor: 'default', overflow: 'hidden', position: 'relative' }}>
      {/* Top fade */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(135deg, var(--green-dark), var(--green-bright), var(--green-lime))', opacity: 1, zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
          What We Do
        </p>
        <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <motion.div
            style={{ display: 'flex', gap: 14, width: 'max-content' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          >
            {doubled.map((s, i) => (
              <Link key={i} href={s.link || '/ser'} style={{ textDecoration: 'none' }}>
                <div className="srv-card">
                  <span style={{ fontSize: 20, display: 'block', marginBottom: 6 }}>{s.icon}</span>
                  <span style={{ color: '#fff', fontSize: 12, fontWeight: 600, display: 'block', lineHeight: 1.3 }}>{s.title}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`
        .services-section { padding: 28px 0 32px; }
        .srv-card {
          width: 160px;
          height: 88px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 12px;
          backdrop-filter: blur(8px);
          transition: background 0.2s, transform 0.2s;
        }
        .srv-card:hover {
          background: rgba(255,255,255,0.14);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .srv-card { width: 120px; height: 72px; }
          .services-section { padding: 22px 0; }
        }
      `}</style>
    </section>
  )
}