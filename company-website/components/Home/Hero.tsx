'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const sentence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22 } },
}
const word: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
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
      <div className="bg-glow" />
      <div className="bg-glow bg-glow-secondary" />
      <div className="bg-grid" aria-hidden="true" />

      {/* concentric spiral rings with glow, centered behind the heading */}
      <div className="rings-wrap" aria-hidden="true">
        <span className="hero-ring hero-ring-1" />
        <span className="hero-ring hero-ring-2" />
        <span className="hero-ring hero-ring-3" />
        <span className="hero-ring hero-ring-4" />
        <span className="hero-ring hero-ring-core" />
      </div>

      {/* floating icon badges */}
      <div className="float-badge badge-left" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
      <div className="float-badge badge-right" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      </div>
      <span className="float-dot dot-1" />
      <span className="float-dot dot-2" />

      <div className="hero-container">
        <div className="hero-content">

          {/* TAG — kept small and quiet so it never competes with the heading */}
          <div className="animate-on-scroll hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">{tagText}</span>
          </div>

          {/* HEADING — the dominant element on the page */}
          <motion.h1 variants={sentence} initial="hidden" animate="visible" className="hero-heading">
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 12, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
            <br />
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="gradient-text hero-gradient-glow" style={{ marginRight: 12, display: 'inline-block' }}>{w}</motion.span>
            ))}
            <br />
            {line3.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 12, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
          </motion.h1>

          {/* DESCRIPTION — kept narrow and modest, supporting text only */}
          <p className="animate-on-scroll hero-description">
            {description}
          </p>

          {/* BUTTONS — premium sizing */}
          <div className="animate-on-scroll cta-row">
            <Link href={btn1Link} className="hero-cta">
              <span className="hero-cta-shine" aria-hidden="true" />
              <span className="hero-cta-pill">{btn1Text}</span>
              <span className="hero-cta-circle">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
              </span>
            </Link>
            <Link href={btn2Link} className="hero-link-secondary">
              <span className="hero-link-secondary-icon" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3" /></svg>
              </span>
              <span className="hero-link-secondary-inner">{btn2Text}</span>
            </Link>
          </div>

          {/* SCROLL CUE */}
          <div className="animate-on-scroll scroll-cue">
            <span className="scroll-cue-dot" />
          </div>
        </div>
      </div>

      {/* bottom wave — soft transition into the next section */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path className="wave-back" d="M0,80 C 240,140 480,20 720,60 C 960,100 1200,20 1440,70 L1440,140 L0,140 Z" />
          <path className="wave-front" d="M0,100 C 220,50 460,120 720,90 C 980,60 1220,120 1440,90 L1440,140 L0,140 Z" />
        </svg>
      </div>

      <style jsx>{`
        .hero { min-height: 100vh; padding-top: 80px; position: relative; overflow-x: hidden; background: var(--bg-main); }

        .bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 30%, var(--glow-color), transparent 55%); pointer-events: none; z-index: 0; }
        .bg-glow-secondary { background: radial-gradient(circle at 82% 78%, var(--glow-color), transparent 42%); opacity: 0.55; }
        .bg-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(var(--border-green) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-green) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.05;
          mask-image: radial-gradient(circle at 50% 35%, black 0%, transparent 68%);
          -webkit-mask-image: radial-gradient(circle at 50% 35%, black 0%, transparent 68%);
        }

        /* concentric spiral rings, slow rotating for a subtle premium ambience */
        .rings-wrap {
          position: absolute; top: 42%; left: 50%;
          width: 780px; height: 780px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }
        .hero-ring {
          position: absolute; top: 50%; left: 50%; border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .hero-ring-1 { width: 780px; height: 780px; border: 1px solid var(--border-green); opacity: 0.16; animation: spin-slow 60s linear infinite; }
        .hero-ring-2 { width: 610px; height: 610px; border: 1px solid var(--border-green); opacity: 0.24; animation: spin-slow 46s linear infinite reverse; }
        .hero-ring-3 { width: 450px; height: 450px; border: 1px solid var(--border-green); opacity: 0.36; animation: spin-slow 34s linear infinite; }
        .hero-ring-4 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, var(--glow-color) 0%, transparent 72%);
          opacity: 0.85;
        }
        .hero-ring-core {
          width: 150px; height: 150px;
          background: radial-gradient(circle, var(--green-bright) 0%, transparent 68%);
          filter: blur(14px);
          opacity: 0.55;
        }
        @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }

        .float-badge {
          position: absolute; width: 46px; height: 46px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          background: var(--card-bg); border: 1px solid var(--border-green);
          color: var(--green-bright); box-shadow: 0 12px 30px rgba(0,0,0,0.2), 0 0 0 1px var(--border-green);
          animation: float-badge 6s ease-in-out infinite;
          z-index: 2;
        }
        .badge-left { top: 50%; left: 9%; animation-delay: 0.2s; }
        .badge-right { top: 22%; right: 11%; animation-delay: 1.4s; }
        @keyframes float-badge { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }

        .float-dot { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: var(--green-bright); pointer-events: none; z-index: 1; }
        .dot-1 { top: 16%; left: 22%; animation: pulse-dot 3s ease-in-out infinite; }
        .dot-2 { bottom: 22%; right: 20%; animation: pulse-dot 3s ease-in-out infinite 1.5s; }
        @keyframes pulse-dot { 0%, 100% { opacity: 0.25; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }

        .hero-container {
          max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;
          display: flex; justify-content: center; align-items: center;
          min-height: calc(100vh - 80px); padding: 0 20px 60px;
        }

        .hero-content {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 22px; max-width: 680px; position: relative; z-index: 2;
        }

        /* TAG — small, quiet, secondary */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 9px;
          background: var(--tag-bg); border: 1px solid var(--border-green);
          border-radius: 999px; padding: 7px 16px 7px 14px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.12);
          position: relative; z-index: 2;
          margin-bottom: 4px;
        }
        .hero-badge-text {
          font-size: 11px; color: var(--green-mid); font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
        }
        .hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green-bright); box-shadow: 0 0 10px var(--green-bright); position: relative; flex-shrink: 0; }
        .hero-badge-dot::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid var(--green-bright); animation: pulse-ring 2s ease-out infinite;
        }
        @keyframes pulse-ring { 0% { transform: scale(0.6); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }

        /* HEADING — dominant, largest element on the page */
        .hero-heading {
          font-size: clamp(38px, 5.2vw, 72px);
          font-weight: 800;
          line-height: 1.14;
          margin: 0;
          letter-spacing: -0.03em;
          position: relative;
          z-index: 2;
        }
        .hero-gradient-glow { filter: drop-shadow(0 0 24px var(--border-green-hover)); }

        /* DESCRIPTION — deliberately restrained, purely supporting */
        .hero-description {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 440px;
          margin: 4px 0 0;
          position: relative;
          z-index: 2;
        }

        .cta-row {
          display: flex; align-items: center; gap: 30px;
          flex-wrap: wrap; justify-content: center;
          position: relative; z-index: 2;
          margin-top: 10px;
        }

        /* primary CTA — premium sized pill + attached circle, structurally safe against wrapping */
        .hero-cta {
          position: relative;
          display: inline-flex;
          text-decoration: none;
          flex-shrink: 0;
          border-radius: 999px;
          transition: transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .hero-cta:hover { transform: translateY(-3px); }
        .hero-cta-shine {
          position: absolute; inset: 0; border-radius: 999px; overflow: hidden; pointer-events: none;
        }
        .hero-cta-shine::before {
          content: ''; position: absolute; top: -50%; left: -60%; width: 40%; height: 200%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: rotate(20deg); transition: left 0.7s ease;
        }
        .hero-cta:hover .hero-cta-shine::before { left: 130%; }
        .hero-cta-pill {
          display: block; position: relative;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          color: #fff; font-weight: 700; font-size: 15px; line-height: 1; white-space: nowrap;
          padding: 20px 42px 20px 30px; border-radius: 999px;
          box-shadow: 0 14px 34px var(--border-green-hover), inset 0 1px 0 rgba(255,255,255,0.25);
          transition: box-shadow 0.35s ease;
        }
        .hero-cta:hover .hero-cta-pill { box-shadow: 0 18px 42px var(--border-green-hover), inset 0 1px 0 rgba(255,255,255,0.3); }
        .hero-cta-circle {
          position: absolute; right: -10px; bottom: -10px;
          display: flex; align-items: center; justify-content: center;
          width: 48px; height: 48px; border-radius: 50%;
          background: var(--bg-main); border: 1.5px solid var(--green-bright);
          color: var(--green-bright);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.3s ease, color 0.3s ease;
        }
        .hero-cta:hover .hero-cta-circle { background: var(--green-bright); color: #fff; transform: rotate(45deg) scale(1.06); }

        /* secondary link — icon chip + label, quieter but still crafted */
        .hero-link-secondary {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
          color: var(--heading-color);
          padding: 8px 6px;
        }
        .hero-link-secondary-icon {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid var(--border-green);
          color: var(--green-bright);
          background: var(--tag-bg);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
          flex-shrink: 0;
        }
        .hero-link-secondary-inner {
          font-weight: 700; font-size: 14.5px; white-space: nowrap;
          padding-bottom: 2px;
          border-bottom: 1.5px solid transparent;
          transition: border-color 0.25s ease, color 0.25s ease;
        }
        .hero-link-secondary:hover .hero-link-secondary-icon { background: var(--green-bright); border-color: var(--green-bright); color: #fff; transform: scale(1.08); }
        .hero-link-secondary:hover .hero-link-secondary-inner { border-color: var(--green-bright); color: var(--green-bright); }

        .scroll-cue {
          margin-top: 8px; width: 24px; height: 38px; border-radius: 14px;
          border: 1.5px solid var(--border-green);
          display: flex; justify-content: center; padding-top: 7px;
          position: relative; z-index: 2;
        }
        .scroll-cue-dot { width: 4px; height: 8px; border-radius: 3px; background: var(--green-bright); animation: scroll-cue-move 1.8s ease-in-out infinite; }
        @keyframes scroll-cue-move { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(10px); } }

        /* bottom wave */
        .hero-wave {
          position: absolute; left: 0; right: 0; bottom: -1px; height: 120px;
          z-index: 1; pointer-events: none; line-height: 0;
        }
        .hero-wave svg { width: 100%; height: 100%; display: block; }
        .wave-back { fill: var(--tag-bg); opacity: 0.6; animation: wave-drift-slow 14s ease-in-out infinite; }
        .wave-front { fill: var(--card-bg); animation: wave-drift 9s ease-in-out infinite; }
        @keyframes wave-drift { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-2.5%); } }
        @keyframes wave-drift-slow { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(2.5%); } }

        @media (max-width: 900px) {
          .hero-container { text-align: center; padding-bottom: 90px; }
          .float-badge, .rings-wrap .hero-ring-1, .rings-wrap .hero-ring-2 { display: none; }
          .float-dot { display: none; }
          .bg-grid { opacity: 0.035; }
          .rings-wrap { width: 440px; height: 440px; }
          .hero-ring-3 { width: 300px; height: 300px; }
          .hero-ring-4 { width: 210px; height: 210px; }
          .cta-row { gap: 20px; }
          .hero-cta-pill { padding: 17px 36px 17px 26px; font-size: 14px; }
          .hero-wave { height: 70px; }
        }

        @media (max-width: 480px) {
          .cta-row { flex-direction: column; gap: 18px; }
          .hero-cta { width: 100%; max-width: 320px; justify-content: center; }
          .hero-cta-pill { text-align: center; width: 100%; }
        }
      `}</style>
    </section>
  )
}