'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Project = {
  title: string
  tag: string
  description: string
  image: {
    url: string
  }
}

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_URL}/api/projects?limit=10`,
          { cache: 'no-store' }
        )
        const data = await res.json()
        if (Array.isArray(data.docs) && data.docs.length > 0) {
          setProjects(data.docs)
        }
      } catch (err) {
        console.error('Error fetching projects:', err)
      }
    }
    fetchProjects()
  }, [])

  useEffect(() => {
    if (projects.length === 0) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [projects])

  if (projects.length === 0) return null

  const project = projects[index]
  const imageUrl = project.image?.url
  ? `${process.env.NEXT_PUBLIC_CMS_URL}${project.image.url}`
  : ''

  return (
    <section
      id="works"
      style={{
        background: '#110b0f',
        padding: '50px 0',
        userSelect: 'none',
        cursor: 'default',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{
            color: '#91a4d7', fontSize: 11,
            letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 10,
          }}>
            Our Work
          </p>
          <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 700 }}>
            Featured Projects
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div style={{ display: 'flex', gap: 50, alignItems: 'center', flexWrap: 'wrap' }}>

          {/* IMAGE */}
          <div style={{
            flex: 1, minWidth: 320, height: 360,
            borderRadius: 16, overflow: 'hidden',
            border: '1px solid rgba(145,164,215,0.15)',
            position: 'relative',
          }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={imageUrl}
                src={imageUrl}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AnimatePresence>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(17,11,15,0.85), transparent)',
            }} />
          </div>

          {/* CONTENT */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <p style={{
              color: '#0f727a', fontSize: 12,
              letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10,
            }}>
              {project.tag}
            </p>
            <h3 style={{ color: '#fff', fontSize: 28, fontWeight: 700, marginBottom: 15 }}>
              {project.title}
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.7, maxWidth: 420 }}>
              {project.description}
            </p>

            {/* DOTS */}
            <div style={{ display: 'flex', gap: 8, marginTop: 25 }}>
              {projects.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    width: i === index ? 18 : 6,
                    height: 6, borderRadius: 999,
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