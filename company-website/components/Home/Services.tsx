'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'


const defaultServices = [
  { title: 'Web Development', icon: '💻', link: '/ser' },
  { title: 'Laravel Dev', icon: '⚙️', link: '/ser' },
  { title: 'WordPress', icon: '🌐', link: '/ser' },
  { title: 'Shopify', icon: '🛒', link: '/ser' },
  { title: 'YouTube Automation', icon: '▶️', link: '/ser' },
  { title: 'Next.js Apps', icon: '⚡', link: '/ser' },
]

type ServiceItem = { title: string; icon?: string; link?: string }

export default function Services({ data }: { data?: { services?: ServiceItem[] } }) {
  const services = data?.services || []
if (services.length === 0) return null
  return (
    <section id="services" style={{ background: "linear-gradient(135deg,var(--green-bright),var(--green-lime),var(--green-dark))", overflow: 'hidden', userSelect: "none", cursor: "default" }} className="services-section">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, margin: 0 }}>Services</h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            style={{ display: 'flex', gap: 12, width: 'max-content', alignItems: 'center' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          >
            {[...services, ...services].map((s, i) => (
              <Link key={i} href={s.link || '/ser'} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{
                  background: 'var(--card-bg)', border: '1px solid var(--border-green)', borderRadius: 10,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  textAlign: 'center', gap: 6, cursor: 'pointer', transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--green-bright)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-green)' }}
                >
                  <div style={{ fontSize: 16 }}>{s.icon}</div>
                  <p style={{ color: 'var(--text-primary)', fontSize: 11, fontWeight: 600, margin: 0 }}>{s.title}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`
        .services-section { padding: 18px 0 22px; }
        .service-card { width: 150px; height: 80px; }
        @media (max-width: 768px) { .services-section { padding: 32px 0 28px; margin-top: 16px; } .service-card { width: 110px; height: 65px; } }
      `}</style>
    </section>
  )
}