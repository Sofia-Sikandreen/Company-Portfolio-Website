'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const sentence: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }
const word: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

type HeroData = {
  tagText?: string; headingLine1?: string; headingLine2?: string; headingLine3?: string
  description?: string; primaryButtonText?: string; primaryButtonLink?: string
  secondaryButtonText?: string; secondaryButtonLink?: string
}

export default function Hero({ data }: { data?: HeroData }) {
  const heroRef = useRef<HTMLDivElement>(null)

  const tagText = data?.tagText || 'IT Solutions That Empower Businesses'
  const line1 = (data?.headingLine1 || 'We Build Powerful').split(' ')
  const line2 = (data?.headingLine2 || 'Digital Solutions').split(' ')
  const line3 = (data?.headingLine3 || 'That Drive Growth').split(' ')
  const description = data?.description || 'We are a full-service IT company delivering modern web solutions, automation, and eCommerce services to help businesses scale and succeed in the digital world.'
  const btn1Text = data?.primaryButtonText || 'Get Started'
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 540, position: 'relative', zIndex: 2 }}>

          <motion.h1 variants={sentence} initial="hidden" animate="visible"
            style={{ fontSize: 'clamp(34px, 3.2vw, 48px)', fontWeight: 800, lineHeight: 1.2, margin: 0, textAlign: 'left' }}>
            {line1.map((w, i) => <motion.span key={i} variants={word} style={{ marginRight: 8, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>)}
            {' '}
            {line2.map((w, i) => <motion.span key={i} variants={word} className="gradient-text" style={{ marginRight: 8, display: 'inline-block' }}>{w}</motion.span>)}
            {' '}
            {line3.map((w, i) => <motion.span key={i} variants={word} style={{ marginRight: 8, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>)}
          </motion.h1>

          <p className="animate-on-scroll" style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 460, margin: 0, textAlign: 'left' }}>
            {description}
          </p>

          <div className="animate-on-scroll" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
            <Link href={btn1Link} className="btn-primary" style={{ padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              {btn1Text}
            </Link>
            <Link href={btn2Link} className="btn-outline" style={{ padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              {btn2Text} →
            </Link>
          </div>

          <div className="animate-on-scroll" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-bright)' }} />
            <span style={{ fontSize: 11, color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>
              {tagText}
            </span>
          </div>
        </div>

        {/* RIGHT — image with soft rounded frame, like image1 (no heavy rotation) */}
        <div className="hero-visual animate-on-scroll">
          <div className="frame-accent" />
          <div className="hero-visual-inner">
            <img src="/hero.jpg" alt="Our Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero { min-height: 90vh; padding-top: 90px; position: relative; overflow: hidden; background: var(--bg-main); }
        .bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 20% 30%, var(--glow-color), transparent 55%); }
        .container {
          max-width: 1240px; margin: auto; position: relative; z-index: 1;
          display: flex; align-items: center; justify-content: space-between; gap: 60px;
          min-height: calc(90vh - 90px); padding: 0 24px;
        }
        .hero-visual { flex: 1; display: flex; justify-content: center; position: relative; }
        .frame-accent {
          position: absolute; width: 90%; height: 90%; top: 8%; right: -6%;
          background: var(--green-bright); opacity: 0.15; border-radius: 32px;
        }
        .hero-visual-inner {
          position: relative; width: 100%; max-width: 460px; height: 380px;
          border-radius: 28px; overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
        }
        @media (max-width: 900px) {
          .container { flex-direction: column; text-align: center; padding-top: 24px; gap: 40px; }
          .container > div:first-child { align-items: center; text-align: center; }
          .container > div:first-child p, .container > div:first-child h1 { text-align: center; }
          .hero-visual-inner { height: 300px; }
        }
      `}</style>
    </section>
  )
}