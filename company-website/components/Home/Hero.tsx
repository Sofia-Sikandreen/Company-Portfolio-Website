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

      {/* concentric target rings behind the heading, reference-style */}
      <div className="rings-wrap" aria-hidden="true">
        <span className="hero-ring hero-ring-1" />
        <span className="hero-ring hero-ring-2" />
        <span className="hero-ring hero-ring-3" />
        <span className="hero-ring hero-ring-4" />
        <span className="hero-ring hero-ring-core" />
      </div>

      {/* floating icon badges sitting on the outer ring, reference-style */}
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

          {/* TAG */}
          <div className="animate-on-scroll hero-badge">
            <span className="hero-badge-dot" />
            <span style={{ fontSize: 10.5, color: 'var(--green-mid)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              {tagText}
            </span>
          </div>

          {/* HEADING */}
          <motion.h1 variants={sentence} initial="hidden" animate="visible" className="hero-heading">
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 11, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
            <br />
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="gradient-text hero-gradient-glow" style={{ marginRight: 11, display: 'inline-block' }}>{w}</motion.span>
            ))}
            <br />
            {line3.map((w, i) => (
              <motion.span key={i} variants={word} style={{ marginRight: 11, display: 'inline-block', color: 'var(--heading-color)' }}>{w}</motion.span>
            ))}
          </motion.h1>

          {/* DESCRIPTION */}
          <p className="animate-on-scroll hero-description">
            {description}
          </p>

          {/* BUTTONS */}
          <div className="animate-on-scroll cta-row">
            <Link href={btn1Link} className="hero-cta">
              <span className="hero-cta-pill">{btn1Text}</span>
              <span className="hero-cta-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
              </span>
            </Link>
            <Link href={btn2Link} className="hero-link-secondary">
              {btn2Text}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* SCROLL CUE */}
          <div className="animate-on-scroll scroll-cue">
            <span className="scroll-cue-dot" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero { min-height: 100vh; padding-top: 80px; position: relative; overflow-x: hidden; background: var(--bg-main); }

        .bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 34%, var(--glow-color), transparent 58%); pointer-events: none; z-index: 0; }

        /* concentric target rings, centered on the heading/description block */
        .rings-wrap {
          position: absolute; top: 46%; left: 50%;
          width: 780px; height: 780px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }
        .hero-ring {
          position: absolute; top: 50%; left: 50%; border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .hero-ring-1 { width: 780px; height: 780px; border: 1px solid var(--border-green); opacity: 0.22; }
        .hero-ring-2 { width: 610px; height: 610px; border: 1px solid var(--border-green); opacity: 0.32; }
        .hero-ring-3 { width: 450px; height: 450px; border: 1px solid var(--border-green); opacity: 0.45; }
        .hero-ring-4 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, var(--glow-color) 0%, transparent 72%);
          opacity: 0.9;
        }
        .hero-ring-core {
          width: 170px; height: 170px;
          background: radial-gradient(circle, var(--green-bright) 0%, transparent 68%);
          filter: blur(10px);
          opacity: 0.65;
        }

        .float-badge {
          position: absolute; width: 46px; height: 46px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          background: var(--card-bg); border: 1px solid var(--border-green);
          color: var(--green-bright); box-shadow: 0 12px 30px rgba(0,0,0,0.2), 0 0 0 1px var(--border-green);
          animation: float-badge 6s ease-in-out infinite;
          z-index: 2;
        }
        .badge-left { top: 52%; left: 8%; animation-delay: 0.2s; }
        .badge-right { top: 24%; right: 10%; animation-delay: 1.4s; }
        @keyframes float-badge { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }

        .float-dot { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: var(--green-bright); pointer-events: none; z-index: 1; }
        .dot-1 { top: 16%; left: 22%; animation: pulse-dot 3s ease-in-out infinite; }
        .dot-2 { bottom: 18%; right: 20%; animation: pulse-dot 3s ease-in-out infinite 1.5s; }
        @keyframes pulse-dot { 0%, 100% { opacity: 0.25; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }

        .hero-container {
          max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;
          display: flex; justify-content: center; align-items: center;
          min-height: calc(100vh - 80px); padding: 0 20px;
        }

        .hero-content {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 26px; max-width: 720px; position: relative; z-index: 2;
        }

        .hero-heading {
          font-size: clamp(38px, 4.4vw, 62px);
          font-weight: 800;
          line-height: 1.22;
          margin: 0;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 2;
        }

        .hero-description {
          font-size: 15.5px;
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 500px;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 9px;
          background: var(--tag-bg); border: 1px solid var(--border-green);
          border-radius: 999px; padding: 8px 18px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.12);
          position: relative; z-index: 2;
        }
        .hero-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green-bright); box-shadow: 0 0 10px var(--green-bright); position: relative; }
        .hero-badge-dot::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid var(--green-bright); animation: pulse-ring 2s ease-out infinite;
        }
        @keyframes pulse-ring { 0% { transform: scale(0.6); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }

        .hero-gradient-glow { filter: drop-shadow(0 0 20px var(--border-green-hover)); }

        .cta-row {
          display: flex; align-items: center; gap: 32px;
          flex-wrap: wrap; justify-content: center;
          position: relative; z-index: 2;
        }

        /* unified pill + circle CTA — circle is absolutely placed on the pill's own box, it can never wrap onto a new line */
        .hero-cta {
          position: relative;
          display: inline-flex;
          text-decoration: none;
          flex-shrink: 0;
        }
        .hero-cta-pill {
          display: block;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          color: #fff; font-weight: 700; font-size: 14px; line-height: 1; white-space: nowrap;
          padding: 17px 34px; border-radius: 999px;
          box-shadow: 0 10px 30px var(--border-green-hover);
        }
        .hero-cta-circle {
          position: absolute; right: -10px; bottom: -10px;
          display: flex; align-items: center; justify-content: center;
          width: 42px; height: 42px; border-radius: 50%;
          background: var(--bg-main); border: 1.5px solid var(--green-bright);
          color: var(--green-bright);
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
        }
        .hero-cta:hover .hero-cta-circle { background: var(--green-bright); color: #fff; transform: rotate(45deg); }

        .hero-link-secondary {
          display: inline-flex; align-items: center; gap: 7px;
          color: var(--heading-color); font-weight: 700; font-size: 14px;
          text-decoration: none; padding-bottom: 2px; white-space: nowrap;
          border-bottom: 1.5px solid var(--border-green);
          transition: border-color 0.25s ease, color 0.25s ease, gap 0.25s ease;
        }
        .hero-link-secondary:hover { border-color: var(--green-bright); color: var(--green-bright); gap: 10px; }

        .scroll-cue {
          margin-top: 12px; width: 24px; height: 38px; border-radius: 14px;
          border: 1.5px solid var(--border-green);
          display: flex; justify-content: center; padding-top: 7px;
          position: relative; z-index: 2;
        }
        .scroll-cue-dot { width: 4px; height: 8px; border-radius: 3px; background: var(--green-bright); animation: scroll-cue-move 1.8s ease-in-out infinite; }
        @keyframes scroll-cue-move { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(10px); } }

        @media (max-width: 900px) {
          .hero-container { text-align: center; }
          .float-badge, .rings-wrap .hero-ring-1, .rings-wrap .hero-ring-2 { display: none; }
          .float-dot { display: none; }
          .rings-wrap { width: 460px; height: 460px; }
          .hero-ring-3 { width: 320px; height: 320px; }
          .hero-ring-4 { width: 230px; height: 230px; }
        }
      `}</style>
    </section>
  )
}
