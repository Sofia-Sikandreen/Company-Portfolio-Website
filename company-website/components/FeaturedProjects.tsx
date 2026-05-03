'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'SaaS Dashboard',
    tag: 'Web App',
    desc: 'Modern analytics dashboard with real-time insights and performance tracking.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'YouTube Automation System',
    tag: 'Automation',
    desc: 'Fully automated content pipeline system for scaling YouTube channels.',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Shopify Fashion Store',
    tag: 'eCommerce',
    desc: 'High-converting eCommerce store with optimized UI/UX for sales.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Workflow Automation Tool',
    tag: 'Business',
    desc: 'Business workflow automation system to reduce manual operations.',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const project = projects[index]

  return (
    <section
      id="works"
      style={{
        background: '#110b0f',
        padding: '50px 0',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{
            color: '#91a4d7',
            fontSize: 11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}>
            Our Work
          </p>

          <h2 style={{
            color: '#fff',
            fontSize: 32,
            fontWeight: 700,
          }}>
            Featured Projects
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div style={{ display: 'flex', gap: 50, alignItems: 'center', flexWrap: 'wrap' }}>

          {/* IMAGE */}
          <div
            style={{
              flex: 1,
              minWidth: 320,
              height: 360,
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(145,164,215,0.15)',
              position: 'relative',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={project.image}
                src={project.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </AnimatePresence>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(17,11,15,0.85), transparent)',
              }}
            />
          </div>

          {/* CONTENT */}
          <div style={{ flex: 1, minWidth: 320 }}>

            <p style={{
              color: '#0f727a',
              fontSize: 12,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
              {project.tag}
            </p>

            <h3 style={{
              color: '#fff',
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 15,
            }}>
              {project.title}
            </h3>

            <p style={{
              color: '#a1a1aa',
              fontSize: 14,
              lineHeight: 1.7,
              maxWidth: 420,
            }}>
              {project.desc}
            </p>

            {/* DOTS */}
            <div style={{ display: 'flex', gap: 8, marginTop: 25 }}>
              {projects.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    width: i === index ? 18 : 6,
                    height: 6,
                    borderRadius: 999,
                    background: i === index ? '#0f727a' : 'rgba(145,164,215,0.25)',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}