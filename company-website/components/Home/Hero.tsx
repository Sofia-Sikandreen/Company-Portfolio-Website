'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const sentence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
}
const word: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') })
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={heroRef} className="hero" style={{ userSelect: "none", cursor: "default" }}>
      <div className="bg-glow" />
      <div className="container">

        {/* LEFT — TEXT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 560 }}>

          <div className="animate-on-scroll" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--tag-bg)', border: '1px solid var(--border-green)',
            borderRadius: 999, padding: '6px 14px', width: 'fit-content'
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-bright)' }} />
            <span style={{ fontSize: 10, color: 'var(--green-mid)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {tagText}
            </span>
          </div>

          <motion.h1 variants={sentence} initial="hidden" animate="visible"
            style={{ fontSize: 'clamp(38px, 3.4vw, 54px)', fontWeight: 900, lineHeight: 1.15, margin: 0, textAlign: 'left' }}>
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 8, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
            <br />
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="gradient-text" style={{ marginRight: 8, display: 'inline-block' }}>{w}</motion.span>
            ))}
            <br />
            {line3.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 8, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
          </motion.h1>

          <p className="animate-on-scroll" style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 480, margin: 0, textAlign: 'left' }}>
            {description}
          </p>

          <div className="animate-on-scroll" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link href={btn1Link} style={{
              background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime))',
              padding: '13px 26px', borderRadius: 10, color: '#fff', fontWeight: 700, fontSize: 13, textDecoration: 'none'
            }}>{btn1Text}</Link>
            <Link href={btn2Link} style={{
              padding: '13px 26px', borderRadius: 10, color: 'var(--green-bright)',
              fontWeight: 700, fontSize: 13, textDecoration: 'none', border: '1px solid var(--border-green)'
            }}>{btn2Text} →</Link>
          </div>

          {/* trust row like reference "Trusted by 50+ sellers" */}
          <div className="animate-on-scroll" style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
            <div style={{ display: 'flex' }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime))',
                  border: '2px solid var(--bg-main)', marginLeft: i === 0 ? 0 : -10,
                }} />
              ))}
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Trusted by growing businesses</span>
          </div>
        </div>

        {/* RIGHT — VISUAL (organic blob shape like reference) */}
        <div className="hero-visual animate-on-scroll">
          <div className="hero-visual-inner">
            <img
              src="/hero.jpg"
              alt="Our Team"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="blob-ring" />
          </div>

          {/* floating badge, like reference stats-over-image */}
          <div className="floating-badge">
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--badge-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-bright)' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: 'var(--heading-color)' }}>100+</p>
              <p style={{ margin: 0, fontSize: 10, color: 'var(--text-secondary)' }}>Projects Delivered</p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .hero { min-height: 100vh; padding-top: 80px; position: relative; overflow: hidden; background: var(--bg-main); }
        .bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 30% 40%, var(--glow-color), transparent 60%); }
        .container {
          max-width: 1200px; margin: auto;
          display: flex; align-items: center; justify-content: space-between; gap: 60px;
          min-height: calc(100vh - 80px); padding: 0 20px;
        }
        .hero-visual { flex: 1; display: flex; justify-content: center; position: relative; }
        .hero-visual-inner {
          position: relative; width: 100%; max-width: 420px; height: 440px;
          border-radius: 200px 20px 200px 20px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0,0,0,0.35);
        }
        .blob-ring {
          position: absolute; inset: -14px; z-index: -1;
          border-radius: 210px 30px 210px 30px;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          opacity: 0.25;
        }
        .floating-badge {
          position: absolute; bottom: 28px; left: -20px;
          background: var(--card-bg); border: 1px solid var(--border-green);
          border-radius: 16px; padding: 12px 16px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          backdrop-filter: blur(10px);
        }
        @media (max-width: 900px) {
          .container { flex-direction: column; text-align: center; padding-top: 20px; gap: 40px; }
          .container > div:first-child { align-items: center; text-align: center; }
          .container > div:first-child p, .container > div:first-child h1 { text-align: center; }
          .hero-visual-inner { height: 320px; border-radius: 140px 20px 140px 20px; }
          .floating-badge { left: 10px; bottom: -20px; }
        }
      `}</style>
    </section>
  )
}