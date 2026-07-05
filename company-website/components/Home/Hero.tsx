'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const sentence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const word: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  },
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
  const line1 = (data?.headingLine1 || 'We Build Digital').split(' ')
  const line2 = (data?.headingLine2 || 'Solutions').split(' ')
  const line3 = (data?.headingLine3 || 'That Drive Growth').split(' ')

  const description =
    data?.description ||
    'Modern web systems, automation, and scalable digital products designed to grow real businesses.'

  const btn1Text = data?.primaryButtonText || 'Services'
  const btn1Link = data?.primaryButtonLink || '/ser'

  const btn2Text = data?.secondaryButtonText || 'View Our Work'
  const btn2Link = data?.secondaryButtonLink || '#works'

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={heroRef} className="hero">

      {/* BACKGROUND */}
      <div className="bg-glow" />
      <div className="bg-grid" aria-hidden="true" />

      {/* CONTENT */}
      <div className="hero-container">
        <div className="hero-content">

          {/* TAG (fixed spacing + no duplication feel) */}
          <div className="animate-on-scroll hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">{tagText}</span>
          </div>

          {/* HEADING */}
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="hero-heading"
          >
            {/* LINE 1 */}
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} className="hero-word">
                {w}
              </motion.span>
            ))}

            <br />

            {/* LINE 2 (IMPORTANT FOCUS LINE) */}
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="hero-word highlight">
                {w}
              </motion.span>
            ))}

            <br />

            {/* LINE 3 */}
            {line3.map((w, i) => (
              <motion.span key={i} variants={word} className="hero-word">
                {w}
              </motion.span>
            ))}
          </motion.h1>

          {/* DESCRIPTION (smaller + tighter) */}
          <p className="hero-description">{description}</p>

          {/* BUTTONS */}
          <div className="cta-row">

            {/* PRIMARY (smaller services button) */}
            <Link href={btn1Link} className="btn-primary">
              {btn1Text}
            </Link>

            {/* SECONDARY (border-only fix) */}
            <Link href={btn2Link} className="btn-secondary">
              {btn2Text}
            </Link>

          </div>

        </div>
      </div>

      {/* STYLE FIXES */}
      <style jsx>{`
        .hero {
          min-height: 100vh;
          padding-top: 110px;
          background: var(--bg-main);
          overflow-x: hidden;
        }

        .bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, var(--glow-color), transparent 60%);
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: linear-gradient(var(--border-green) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-green) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .hero-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px;
          display: flex;
          justify-content: center;
        }

        .hero-content {
          text-align: center;
          max-width: 720px;
        }

        /* TAG FIX */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid var(--border-green);
          margin-bottom: 14px;
        }

        .hero-badge-text {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-heading {
          font-size: clamp(40px, 5vw, 70px);
          font-weight: 800;
          line-height: 1.1;
          margin: 0;
        }

        .hero-word {
          margin-right: 12px;
          display: inline-block;
        }

        /* highlight middle line */
        .highlight {
          color: var(--green-bright);
          text-shadow: 0 0 18px var(--border-green-hover);
        }

        /* DESCRIPTION FIX */
        .hero-description {
          font-size: 13px;
          max-width: 420px;
          margin: 14px auto 0;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* BUTTON ALIGN FIX */
        .cta-row {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 22px;
          flex-wrap: wrap;
        }

        /* PRIMARY BUTTON SMALL */
        .btn-primary {
          padding: 12px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          color: white;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
        }

        /* SECONDARY BORDER ONLY FIX */
        .btn-secondary {
          padding: 12px 22px;
          border-radius: 999px;
          border: 1.5px solid var(--green-bright);
          color: var(--green-bright);
          background: transparent;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.25s ease;
        }

        .btn-secondary:hover {
          background: var(--green-bright);
          color: #fff;
        }

        @media (max-width: 600px) {
          .cta-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}