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

  // fallback to hardcoded if no CMS data
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22, maxWidth: 700 }}>

          {/* TAG */}
          <div className="animate-on-scroll" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--tag-bg)', border: '1px solid var(--border-green)',
            borderRadius: 999, padding: '6px 14px'
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-bright)' }} />
            <span style={{ fontSize: 10, color: 'var(--green-mid)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {tagText}
            </span>
          </div>

          {/* HEADING */}
          <motion.h1 variants={sentence} initial="hidden" animate="visible"
            style={{ fontSize: 'clamp(40px, 3.2vw, 52px)', fontWeight: 900, lineHeight: 1.15, margin: 0 }}>
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

          {/* DESCRIPTION */}
          <p className="animate-on-scroll" style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 500, margin: 0 }}>
            {description}
          </p>

          {/* BUTTONS */}
          <div className="animate-on-scroll" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href={btn1Link} style={{
              background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime))',
              padding: '11px 22px', borderRadius: 10, color: '#fff', fontWeight: 700, fontSize: 13, textDecoration: 'none'
            }}>{btn1Text}</Link>
            <Link href={btn2Link} style={{
              padding: '11px 22px', borderRadius: 10, color: 'var(--green-bright)',
              fontWeight: 700, fontSize: 13, textDecoration: 'none', border: '1px solid var(--border-green)'
            }}>{btn2Text}</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero { min-height: 100vh; padding-top: 80px; position: relative; overflow: hidden; background: var(--bg-main); }
        .bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 40%, var(--glow-color), transparent 60%); }
        .container { max-width: 1200px; margin: auto; display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 80px); padding: 0 20px; }
        @media (max-width: 900px) { .container { text-align: center; } }
      `}</style>
    </section>
  )
}