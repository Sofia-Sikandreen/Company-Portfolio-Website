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
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
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
  const line1 = (data?.headingLine1 || 'We Build Powerful').split(' ')
  const line2 = (data?.headingLine2 || 'Digital Solutions').split(' ')
  const line3 = (data?.headingLine3 || 'That Drive Growth').split(' ')
  const description =
    data?.description ||
    'We are a full-service IT company delivering modern web solutions, automation, and eCommerce services to help businesses scale and succeed in the digital world.'

  const btn1Text = data?.primaryButtonText || 'Explore Services'
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
    <section ref={heroRef} className="hero">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow" />
      {/* FLOATING ICONS */}
<div className="icon icon1">⚙️</div>
<div className="icon icon2">💻</div>
<div className="icon icon3">🚀</div>
<div className="icon icon4">📊</div>
<div className="icon icon5">⚡</div>

      {/* STATIC WAVES (NO ANIMATION) */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path
            d="M0,80 C 240,140 480,20 720,60 C 960,100 1200,20 1440,70 L1440,140 L0,140 Z"
            fill="var(--tag-bg)"
            opacity="0.6"
          />
          <path
            d="M0,100 C 220,50 460,120 720,90 C 980,60 1220,120 1440,90 L1440,140 L0,140 Z"
            fill="var(--card-bg)"
            opacity="1"
          />
        </svg>
      </div>

      <div className="container">

        {/* BADGES + DOTS */}
        <div className="badge badge-left" />
        <div className="badge badge-right" />
        <span className="dot dot-1" />
        <span className="dot dot-2" />

        <div className="content">

          {/* TAG */}
          <div className="tag">
            <span className="tag-dot" />
            <span>{tagText}</span>
          </div>

          {/* HEADING */}
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="heading"
          >
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} className="word">
                {w}
              </motion.span>
            ))}
            <br />
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="word gradient">
                {w}
              </motion.span>
            ))}
            <br />
            {line3.map((w, i) => (
              <motion.span key={i} variants={word} className="word">
                {w}
              </motion.span>
            ))}
          </motion.h1>

          {/* DESCRIPTION */}
          <p className="desc">{description}</p>

          {/* BUTTONS */}
          <div className="btn-row animate-on-scroll">
            <Link href={btn1Link} className="btn-primary">
              {btn1Text}
            </Link>

            <Link href={btn2Link} className="btn-outline">
              {btn2Text}
            </Link>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .hero {
          min-height: 100vh;
          position: relative;
          background: var(--bg-main);
          overflow: hidden;
          padding-top: 90px;
        }

        .bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, var(--glow-color), transparent 60%);
        }

        .container {
          max-width: 1100px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 90px);
          padding: 0 20px;
        }

        .content {
          text-align: center;
          max-width: 700px;
        }

        /* TAG */
        .tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid var(--border-green);
          background: var(--tag-bg);
          margin-bottom: 16px;
        }

        .tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green-bright);
        }

        /* HEADING */
       .heading {
  font-size: clamp(48px, 5.5vw, 76px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.04em;
  margin: 0;
}

        .word {
          display: inline-block;
          margin-right: 10px;
        }

        .gradient {
          color: transparent;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          -webkit-background-clip: text;
          background-clip: text;
        }

        .desc {
          margin-top: 14px;
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 480px;
          margin-inline: auto;
        }

        /* BUTTONS */
       .btn-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 26px;
  flex-wrap: wrap;
}

/* PRIMARY CTA */
.btn-primary {
  padding: 16px 34px;
  border-radius: 12px;
  font-weight: 800;
  font-size: 14px;
  color: white;
  text-decoration: none;
  background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
  transition: 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
}

/* OUTLINE CTA */
.btn-outline {
  padding: 16px 34px;
  border-radius: 12px;
  font-weight: 800;
  font-size: 14px;
  color: var(--green-bright);
  text-decoration: none;
  border: 1.5px solid var(--border-green);
  transition: 0.3s ease;
}

.btn-outline:hover {
  background: rgba(255,255,255,0.05);
  transform: translateY(-3px);
}

        /* BADGES (simple decorative) */
       .badge {
  position: absolute;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  border: 1px solid var(--border-green);
  background: var(--card-bg);
  opacity: 0.9;
}

        .badge-left { left: 8%; top: 45%; }
        .badge-right { right: 10%; top: 25%; }

        .dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green-bright);
        }

        .dot-1 { top: 18%; left: 22%; }
        .dot-2 { bottom: 22%; right: 20%; }

        /* STATIC WAVE */
        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .badge { display: none; }
          .dot { display: none; }
        }

        .icon {
  position: absolute;
  font-size: 20px;
  opacity: 0.85;
  animation: float 6s ease-in-out infinite;
}

.icon1 { top: 20%; left: 10%; }
.icon2 { top: 35%; right: 8%; }
.icon3 { bottom: 30%; left: 12%; }
.icon4 { bottom: 20%; right: 15%; }
.icon5 { top: 50%; left: 5%; }

@keyframes float {
  0%,100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
      `}</style>
    </section>
  )
}