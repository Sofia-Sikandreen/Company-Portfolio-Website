'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Project = { title: string; tag: string; description: string; image?: { url: string } }
type ProjectsData = { heading?: string; subheading?: string; projects?: Project[] }

const tagColors: Record<string, string> = {
  'Web App': 'var(--green-bright)',
  'eCommerce': 'var(--green-lime)',
  'Automation': '#C792EA',
  'Business': '#82AAFF',
  'Mobile App': '#F78C6C',
}

export default function FeaturedProjects({ data }: { data?: ProjectsData }) {
  const [index, setIndex] = useState(0)
  const heading = data?.heading || 'Featured Projects'
  const subheading = data?.subheading || 'Our Work'
  const projects = data?.projects || []
  if (projects.length === 0) return null
  const project = projects[index]
  const imageUrl = project.image?.url ? `${process.env.NEXT_PUBLIC_CMS_URL}${project.image.url}` : ''
  const tagColor = tagColors[project.tag] || 'var(--green-bright)'

  return (
    <section id="works" style={{ background: 'var(--bg-main)', padding: '80px 0', userSelect: 'none', cursor: 'default', position: 'relative' }}>
      {/* bg glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60%', height: '50%', background: 'radial-gradient(ellipse, rgba(107,179,63,0.07), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', color: 'var(--green-mid)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>{subheading}</span>
          <h2 style={{ color: 'var(--heading-color)', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 800, margin: 0 }}>{heading}</h2>
        </div>

        <div className="projects-layout">
          {/* Left sidebar — project list */}
          <div className="project-list">
            {projects.map((p, i) => (
              <div key={i} onClick={() => setIndex(i)} className={`project-item ${i === index ? 'active' : ''}`}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 3, height: 36, borderRadius: 2, background: i === index ? 'var(--green-bright)' : 'transparent', flexShrink: 0, transition: 'background 0.3s' }} />
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: i === index ? 'var(--heading-color)' : 'var(--text-secondary)', transition: 'color 0.3s' }}>{p.title}</p>
                    <span style={{ fontSize: 10, fontWeight: 600, color: tagColors[p.tag] || 'var(--green-bright)', letterSpacing: '0.08em' }}>{p.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — preview */}
          <div className="project-preview">
            <AnimatePresence mode="wait">
              <motion.div key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                style={{ height: '100%' }}
              >
                {/* Image */}
                <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border-green)', height: 280, position: 'relative', marginBottom: 24, background: 'var(--card-bg)' }}>
                  {imageUrl ? (
                    <img src={imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, var(--card-bg), var(--card-bg-tint))' }}>
                      <span style={{ fontSize: 48, opacity: 0.3 }}>◈</span>
                    </div>
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,9,12,0.7), transparent 50%)' }} />
                  <span style={{ position: 'absolute', bottom: 16, left: 16, background: tagColor, color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 999, letterSpacing: '0.08em' }}>{project.tag}</span>
                </div>
                {/* Info */}
                <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--heading-color)', margin: '0 0 10px' }}>{project.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{project.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .projects-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
          align-items: start;
        }
        .project-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-right: 1px solid var(--border-green);
          padding-right: 24px;
        }
        .project-item {
          padding: 12px 0;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .project-item:hover { background: rgba(107,179,63,0.04); }
        .project-item.active { background: rgba(107,179,63,0.06); }
        .project-preview { min-height: 400px; }
        @media (max-width: 768px) {
          .projects-layout { grid-template-columns: 1fr; }
          .project-list { border-right: none; border-bottom: 1px solid var(--border-green); padding-right: 0; padding-bottom: 20px; flex-direction: row; flex-wrap: wrap; gap: 8px; }
          .project-item { padding: 8px 12px; border: 1px solid var(--border-green); border-radius: 10px; }
          .project-item.active { border-color: var(--green-bright); }
        }
      `}</style>
    </section>
  )
}