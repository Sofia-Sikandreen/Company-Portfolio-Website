'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: 50,
    suffix: '+',
    label: 'Happy Clients',
    color: '#91a4d7',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    number: 100,
    suffix: '+',
    label: 'Projects Completed',
    color: '#68477c',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    number: 5,
    suffix: '+',
    label: 'Years of Experience',
    color: '#0f727a',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    number: 24,
    suffix: '/7',
    label: 'Support',
    color: '#91a4d7',
  },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section id="about" style={{ padding: '50px 0' }}>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>

        {/* OUTER GLOW WRAPPER (NEW PREMIUM EFFECT) */}
        <div
          style={{
            position: 'relative',
            borderRadius: 100,
            padding: '2px',
            background:
              'linear-gradient(135deg, rgba(145,164,215,0.25), rgba(104,71,124,0.25))',
          }}
        >

          {/* INNER CONTAINER */}
          <div
            className="stats-bg"
            style={{
              borderRadius: 100,
              padding: '35px 25px',
              background: '#0a0a0f',
              position: 'relative',
              overflow: 'hidden',
            }}
          >

            {/* subtle corner glow */}
            <div
              style={{
                position: 'absolute',
                top: -80,
                left: -80,
                width: 160,
                height: 160,
                background: 'radial-gradient(circle, rgba(145,164,215,0.15), transparent 70%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: -80,
                right: -80,
                width: 160,
                height: 160,
                background: 'radial-gradient(circle, rgba(104,71,124,0.12), transparent 70%)',
              }}
            />

            {/* GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2"
                >

                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${stat.color}18`,
                      border: `1px solid ${stat.color}35`,
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </div>

                  <p style={{ fontSize: 28, fontWeight: 700, color: stat.color, margin: 0 }}>
                    <CountUp target={stat.number} suffix={stat.suffix} />
                  </p>

                  <p className="text-gray-400 text-xs mt-1">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}