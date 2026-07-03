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
  const imageUrl = project.image?.url || ''

  return (
    <section id="works" style={{ background: 'var(--bg-main)', padding: '70px 0', userSelect: 'none', cursor: 'default' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{ color: 'var(--green-mid)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 10 }}>
            {subheading}
          </p>
          <h2 style={{ color: 'var(--heading-color)', fontSize: 32, fontWeight: 700 }}>
            {heading}
          </h2>
        </div>

        <div className="projects-layout">

          {/* LEFT — clickable list */}
          <div className="projects-list">
            {projects.map((p, i) => (
              <div key={i} onClick={() => setIndex(i)} className={`project-list-item ${i === index ? 'active' : ''}`}>
                <div>
                  <span className="project-tag-pill">{p.tag}</span>
                  <p style={{ margin: '6px 0 0', fontSize: 14, fontWeight: 600, color: 'var(--heading-color)' }}>{p.title}</p>
                </div>
                <span style={{ color: 'var(--green-bright)', fontSize: 16 }}>→</span>
              </div>
            ))}
          </div>

          {/* RIGHT — big image with overlay detail card */}
          <div className="project-detail">
            {imageUrl && (
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageUrl} src={imageUrl}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
              </AnimatePresence>
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 60%)' }} />

            <div className="project-info-card">
              <p style={{ color: 'var(--green-bright)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                {project.tag}
              </p>
              <h3 style={{ color: 'var(--heading-color)', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .projects-layout { display: grid; grid-template-columns: 300px 1fr; gap: 30px; align-items: stretch; }
        .projects-list { display: flex; flex-direction: column; gap: 12px; }
        .project-list-item {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          padding: 16px; border-radius: 14px; border: 1px solid var(--border-green);
          background: var(--card-bg); cursor: pointer; transition: all 0.2s ease;
        }
        .project-list-item.active { border-color: var(--green-bright); background: var(--tag-bg); }
        .project-list-item:hover { border-color: var(--green-bright); }
        .project-tag-pill {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--green-mid); font-weight: 700;
        }
        .project-detail {
          position: relative; border-radius: 20px; overflow: hidden;
          min-height: 420px; border: 1px solid var(--border-green);
        }
        .project-info-card {
          position: absolute; left: 20px; right: 20px; bottom: 20px;
          background: var(--card-bg); backdrop-filter: blur(12px);
          border: 1px solid var(--border-green); border-radius: 16px; padding: 20px;
        }
        @media (max-width: 900px) {
          .projects-layout { grid-template-columns: 1fr; }
          .project-detail { min-height: 340px; }
        }
      `}</style>
    </section>
  )
}