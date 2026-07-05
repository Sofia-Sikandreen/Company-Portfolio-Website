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
      {/* decorative background layers — pure CSS, no assets */}
      <div className="hero-grid" />
      <div className="bg-glow" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <span className="float-ring ring-1" />
      <span className="float-ring ring-2" />
      <span className="float-dot dot-1" />
      <span className="float-dot dot-2" />
      <span className="float-dot dot-3" />

      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24, maxWidth: 720, position: 'relative', zIndex: 2 }}>

          {/* TAG */}
          <div className="animate-on-scroll hero-badge">
            <span className="hero-badge-dot" />
            <span style={{ fontSize: 10.5, color: 'var(--green-mid)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              {tagText}
            </span>
          </div>

          {/* HEADING */}
          <motion.h1 variants={sentence} initial="hidden" animate="visible"
            style={{ fontSize: 'clamp(42px, 4.2vw, 60px)', fontWeight: 900, lineHeight: 1.12, margin: 0, letterSpacing: '-0.02em' }}>
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 10, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
            <br />
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="gradient-text hero-gradient-glow" style={{ marginRight: 10, display: 'inline-block' }}>{w}</motion.span>
            ))}
            <br />
            {line3.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 10, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
          </motion.h1>

          {/* DESCRIPTION */}
          <p className="animate-on-scroll" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 540, margin: 0 }}>
            {description}
          </p>

          {/* BUTTONS */}
          <div className="animate-on-scroll" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>
            <Link href={btn1Link} className="hero-btn-primary">
              <span>{btn1Text}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link href={btn2Link} className="hero-btn-outline">
              {btn2Text}
            </Link>
          </div>

          {/* SCROLL CUE */}
          <div className="animate-on-scroll scroll-cue">
            <span className="scroll-cue-dot" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero { min-height: 100vh; padding-top: 80px; position: relative; overflow: hidden; background: var(--bg-main); }

        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at 50% 35%, black, transparent 70%);
        }
        .bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 30%, var(--glow-color), transparent 60%); }

        .orb { position: absolute; border-radius: 50%; filter: blur(50px); pointer-events: none; }
        .orb-1 { width: 320px; height: 320px; top: -80px; left: -100px; background: var(--green-bright); opacity: 0.14; animation: float-slow 10s ease-in-out infinite; }
        .orb-2 { width: 260px; height: 260px; bottom: -60px; right: -80px; background: var(--green-lime); opacity: 0.10; animation: float-slow 12s ease-in-out infinite reverse; }
        .orb-3 { width: 180px; height: 180px; top: 40%; right: 8%; background: var(--green-mid); opacity: 0.08; animation: float-slow 8s ease-in-out infinite; }
        @keyframes float-slow { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-24px) translateX(14px); } }

        .float-ring { position: absolute; border-radius: 50%; border: 1px solid var(--border-green); pointer-events: none; }
        .ring-1 { width: 90px; height: 90px; top: 22%; left: 10%; animation: spin-slow 26s linear infinite; }
        .ring-2 { width: 60px; height: 60px; bottom: 18%; right: 12%; animation: spin-slow 20s linear infinite reverse; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .float-dot { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: var(--green-bright); pointer-events: none; }
        .dot-1 { top: 18%; right: 20%; animation: pulse-dot 3s ease-in-out infinite; }
        .dot-2 { bottom: 26%; left: 16%; animation: pulse-dot 3s ease-in-out infinite 1s; }
        .dot-3 { top: 55%; left: 6%; animation: pulse-dot 3s ease-in-out infinite 2s; }
        @keyframes pulse-dot { 0%, 100% { opacity: 0.25; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }

        .container { max-width: 1200px; margin: auto; position: relative; z-index: 1; display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 80px); padding: 0 20px; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 9px;
          background: var(--tag-bg); border: 1px solid var(--border-green);
          border-radius: 999px; padding: 8px 18px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.12);
        }
        .hero-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green-bright); box-shadow: 0 0 10px var(--green-bright); position: relative; }
        .hero-badge-dot::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid var(--green-bright); animation: pulse-ring 2s ease-out infinite;
        }
        @keyframes pulse-ring { 0% { transform: scale(0.6); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }

        .hero-gradient-glow { filter: drop-shadow(0 0 22px var(--border-green-hover)); }

        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          padding: 14px 28px; border-radius: 12px; color: #fff;
          font-weight: 700; font-size: 14px; text-decoration: none;
          box-shadow: 0 10px 28px var(--border-green-hover);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hero-btn-primary span { position: relative; z-index: 1; }
        .hero-btn-primary svg { position: relative; z-index: 1; transition: transform 0.3s ease; }
        .hero-btn-primary::before {
          content: ''; position: absolute; top: 0; left: -75%; width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
        }
        .hero-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 16px 36px var(--border-green-hover); }
        .hero-btn-primary:hover::before { left: 120%; transition: left 0.6s ease; }
        .hero-btn-primary:hover svg { transform: translateX(3px); }

        .hero-btn-outline {
          padding: 14px 28px; border-radius: 12px; color: var(--heading-color);
          font-weight: 700; font-size: 14px; text-decoration: none;
          border: 1px solid var(--border-green); background: var(--card-bg);
          transition: border-color 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .hero-btn-outline:hover { border-color: var(--green-bright); color: var(--green-bright); transform: translateY(-3px); }

        .scroll-cue {
          margin-top: 26px; width: 24px; height: 38px; border-radius: 14px;
          border: 1.5px solid var(--border-green);
          display: flex; justify-content: center; padding-top: 7px;
        }
        .scroll-cue-dot { width: 4px; height: 8px; border-radius: 3px; background: var(--green-bright); animation: scroll-cue-move 1.8s ease-in-out infinite; }
        @keyframes scroll-cue-move { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(10px); } }

        @media (max-width: 900px) {
          .container { text-align: center; }
          .orb-3, .ring-1, .ring-2 { display: none; }
        }
      `}</style>
    </section>
  )
}