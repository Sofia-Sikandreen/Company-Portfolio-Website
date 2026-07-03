'use client'

import { useEffect, useRef, useState } from 'react'

const icons = [
  (<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
  (<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
  (<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>),
  (<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>),
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, 2000 / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

type StatData = { number: number; suffix: string; label: string }

export default function Stats({ data }: { data?: { stats?: StatData[] } }) {
  const stats = (data?.stats || []).map((s, i) => ({ ...s, icon: icons[i] || icons[0] }))
  if (stats.length === 0) return null

  return (
    <section style={{ padding: '20px 0 70px', userSelect: "none", cursor: "default" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
        <div className="stats-banner">
          <div className="stats-overlay" />
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 8 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
                }}>
                  {stat.icon}
                </div>
                <p style={{ fontSize: 26, fontWeight: 800, color: '#fff', margin: 0 }}>
                  <CountUp target={stat.number} suffix={stat.suffix} />
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stats-banner {
          position: relative; border-radius: 24px; padding: 40px 25px; overflow: hidden;
          background: linear-gradient(120deg, var(--green-dark, #0d2b1f), var(--green-mid));
        }
        .stats-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08), transparent 50%);
        }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; z-index: 10; }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .stats-banner { border-radius: 20px; padding: 30px 18px; }
        }
      `}</style>
    </section>
  )
}