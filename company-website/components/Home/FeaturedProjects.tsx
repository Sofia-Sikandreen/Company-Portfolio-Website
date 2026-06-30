'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Project = {
  title: string
  tag: string
  description: string
  image?: { url: string }
}

type ProjectsData = {
  heading?: string
  subheading?: string
  projects?: Project[]
}

export default function FeaturedProjects({ data }: { data?: ProjectsData }) {
  const [index, setIndex] = useState(0)

  const heading = data?.heading || 'Featured Projects'
  const subheading = data?.subheading || 'Our Work'
  const projects = data?.projects || []

  if (projects.length === 0) return null

  const project = projects[index]
  const imageUrl = project.image?.url
    ? `${process.env.NEXT_PUBLIC_CMS_URL}${project.image.url}`
    : ''

  return (
    <section id="works" style={{ background: 'var(--bg-main)', padding: '50px 0', userSelect: 'none', cursor: 'default' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{ color: 'var(--green-mid)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 10 }}>
            {subheading}
          </p>
          <h2 style={{ color: 'var(--heading-color)', fontSize: 32, fontWeight: 700 }}>
            {heading}
          </h2>
        </div>

        <div style={{ display: 'flex', gap: 50, alignItems: 'center', flexWrap: 'wrap' }}>

          {/* IMAGE */}
          {imageUrl && (
            <div style={{
              flex: 1, minWidth: 320, height: 360, borderRadius: 16,
              overflow: 'hidden', border: '1px solid var(--border-green)', position: 'relative',
            }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageUrl} src={imageUrl}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--image-overlay), transparent)' }} />
            </div>
          )}

          {/* CONTENT */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <p style={{ color: 'var(--green-bright)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10 }}>
              {project.tag}
            </p>
            <h3 style={{ color: 'var(--heading-color)', fontSize: 28, fontWeight: 700, marginBottom: 15 }}>
              {project.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, maxWidth: 420 }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 25 }}>
              {projects.map((_, i) => (
                <div key={i} onClick={() => setIndex(i)} style={{
                  width: i === index ? 18 : 6, height: 6, borderRadius: 999,
                  background: i === index ? 'var(--green-bright)' : 'var(--border-green)',
                  cursor: 'pointer',
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}