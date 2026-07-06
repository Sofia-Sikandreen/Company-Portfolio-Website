'use client'

import { useEffect, useRef, useState } from 'react'

const icons = [
  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="a"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="b"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="c"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="d"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
]
const colors = ['var(--green-lime)', 'var(--green-bright)', 'var(--green-mid)', 'var(--green-lime)']

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
  const stats = (data?.stats || []).map((s, i) => ({ ...s, icon: icons[i % icons.length], color: colors[i % colors.length] }))
  if (stats.length === 0) return null

  return (
    <section id="about" style={{ padding: '64px 0', userSelect: 'none', cursor: 'default', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-card-glow" style={{ background: `radial-gradient(circle, ${stat.color}22, transparent 70%)` }} />
              <div style={{ width: 48, height: 48, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${stat.color}15`, border: `1px solid ${stat.color}40`, color: stat.color, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                {stat.icon}
              </div>
              <p style={{ fontSize: 36, fontWeight: 800, color: stat.color, margin: '0 0 4px', lineHeight: 1, position: 'relative', zIndex: 1 }}>
                <CountUp target={stat.number} suffix={stat.suffix} />
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, margin: 0, position: 'relative', zIndex: 1 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .stat-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--border-green);
          border-radius: 20px;
          padding: 32px 28px;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }
        .stat-card:hover {
          border-color: var(--border-green-hover);
          transform: translateY(-4px);
        }
        .stat-card-glow {
          position: absolute;
          inset: -40px;
          pointer-events: none;
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .stat-card { padding: 24px 18px; }
        }
      `}</style>
    </section>
  )
}