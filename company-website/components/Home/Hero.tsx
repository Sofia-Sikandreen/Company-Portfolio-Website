'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const sentence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}
const word: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.25, 0.1, 0.25, 1] } }),
}

const codeLines = [
  { indent: 0, content: 'const hibit = new Company({' },
  { indent: 1, content: "  mission: 'Build what matters'," },
  { indent: 1, content: "  stack: ['Next.js', 'React', 'Node']," },
  { indent: 1, content: "  scale: 'Enterprise'," },
  { indent: 0, content: '})' },
  { indent: 0, content: '' },
  { indent: 0, content: 'await hibit.launch()' },
  { indent: 0, content: '// ✅ Deployed successfully' },
]

type HeroData = {
  tagText?: string
  headingLine1?: string
  headingLine2?: string
  headingLine3?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function Hero({ data }: { data?: HeroData }) {
  const heroRef = useRef<HTMLDivElement>(null)

  const tagText = data?.tagText || 'IT Solutions That Empower Businesses'
  const line1 = (data?.headingLine1 || 'We Build Powerful').split(' ')
  const line2 = (data?.headingLine2 || 'Digital Solutions').split(' ')
  const line3 = (data?.headingLine3 || 'That Drive Growth').split(' ')
  const description = data?.description || 'We are a full-service IT company delivering modern web solutions, automation, and eCommerce services to help businesses scale and succeed in the digital world.'
  const btn1Text = data?.primaryButtonText || 'Explore Services'
  const btn1Link = data?.primaryButtonLink || '/ser'
  const btn2Text = data?.secondaryButtonText || 'View Our Work'
  const btn2Link = data?.secondaryButtonLink || '#works'

  return (
    <section id="home" ref={heroRef} className="hero" style={{ userSelect: 'none', cursor: 'default' }}>
      {/* Grid background */}
      <div className="hero-grid" />
      {/* Glow */}
      <div className="hero-glow" />

      <div className="hero-container">
        {/* LEFT — text */}
        <div className="hero-left">
          {/* Tag */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--tag-bg)', border: '1px solid var(--border-green)', borderRadius: 999, padding: '6px 16px', marginBottom: 8 }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-bright)', display: 'inline-block', boxShadow: '0 0 8px var(--green-bright)' }} />
            <span style={{ fontSize: 10, color: 'var(--green-mid)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{tagText}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={sentence} initial="hidden" animate="visible" style={{ fontSize: 'clamp(36px, 4vw, 58px)', fontWeight: 900, lineHeight: 1.1, margin: '12px 0 0' }}>
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 10, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
            <br />
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="gradient-text" style={{ marginRight: 10, display: 'inline-block' }}>{w}</motion.span>
            ))}
            <br />
            {line3.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 10, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p custom={0.9} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 480, margin: '20px 0 0' }}>
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div custom={1.1} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <Link href={btn1Link} className="btn-primary">{btn1Text}</Link>
            <Link href={btn2Link} className="btn-secondary">{btn2Text}</Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div custom={1.3} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: 24, marginTop: 30, flexWrap: 'wrap' }}>
            {[['50+', 'Happy Clients'], ['100+', 'Projects'], ['5+', 'Years']].map(([num, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--green-lime)' }}>{num}</span>
                <span style={{ fontSize: 11, color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — code window */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Outer glow ring */}
          <div className="code-glow-ring" />

          <div className="code-window">
            {/* Title bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 16px', borderBottom: '1px solid var(--border-green)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
              <span style={{ marginLeft: 8, fontSize: 11, color: 'var(--text-secondary)' }}>hibit.ts</span>
            </div>
            {/* Code lines */}
            <div style={{ padding: '16px 20px', fontFamily: "'Courier New', monospace", fontSize: 13, lineHeight: 2 }}>
              {codeLines.map((line, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  style={{ paddingLeft: line.indent * 0 }}
                >
                  {line.content === '' ? <br /> : (
                    <span style={{
                      color: line.content.startsWith('//') ? 'var(--green-mid)'
                        : line.content.includes("'") ? '#A5D64A'
                        : line.content.includes('const') || line.content.includes('await') ? '#C792EA'
                        : 'var(--text-primary)'
                    }}>
                      {line.content}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
          background: var(--bg-main);
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 70%;
          height: 80%;
          background: radial-gradient(ellipse, rgba(59,203,90,0.12), transparent 65%);
          pointer-events: none;
        }
        .hero-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          min-height: calc(100vh - 80px);
          padding: 40px 24px;
          position: relative;
          z-index: 1;
        }
        .hero-left {
          flex: 1;
          max-width: 560px;
        }
        .hero-right {
          flex: 1;
          max-width: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .code-glow-ring {
          position: absolute;
          inset: -20px;
          border-radius: 24px;
          background: radial-gradient(ellipse at center, rgba(107,179,63,0.15), transparent 70%);
          pointer-events: none;
        }
        .code-window {
          width: 100%;
          background: var(--card-bg);
          border: 1px solid var(--border-green);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(107,179,63,0.1);
        }
        .badge {
          position: absolute;
          background: var(--card-bg);
          border: 1px solid var(--border-green);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          white-space: nowrap;
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          padding: 13px 28px;
          border-radius: 18px;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(107,179,63,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-block;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(107,179,63,0.45); }
        .btn-secondary {
          padding: 13px 28px;
          border-radius: 12px;
          color: var(--green-bright);
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          border: 1px solid var(--border-green-hover);
          transition: all 0.2s;
          display: inline-block;
          background: transparent;
        }
        .btn-secondary:hover { background: rgba(107,179,63,0.08); border-color: var(--green-bright); }
        @media (max-width: 900px) {
          .hero-container { flex-direction: column; text-align: center; padding: 40px 20px 60px; }
          .hero-left { max-width: 100%; }
          .hero-right { width: 100%; max-width: 100%; }
          .badge-react, .badge-next, .badge-node { display: none; }
        }
      `}</style>
    </section>
  )
}