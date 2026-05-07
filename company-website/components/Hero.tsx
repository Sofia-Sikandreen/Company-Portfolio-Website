'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const avatarColors = ['#91a4d7', '#68477c', '#0f727a', '#9d2c0b']

const sentence: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const word: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  const fullText = "We Build Powerful Digital Solutions That Drive Growth"
  const [text, setText] = useState("")

  useEffect(() => {
    let i = 0

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setText(fullText.slice(0, i))
        i++
        if (i > fullText.length) clearInterval(interval)
      }, 85)

    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    )

    document
      .querySelectorAll('.animate-on-scroll')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={heroRef} className="hero"style={{userSelect: "none",
    cursor: "default",}}>

      <div className="bg-glow" />

      <div className="container">

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 22,
          maxWidth: 700
          
        }}>

          {/* TAG */}
          <div className="animate-on-scroll" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(48,34,61,0.6)',
            border: '1px solid rgba(145,164,215,0.2)',
            borderRadius: 999,
            padding: '6px 14px'
          }}>
            <div style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#0f727a'
            }} />
            <span style={{
              fontSize: 10,
              color: '#91a4d7',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}>
              IT Solutions That Empower Businesses
            </span>
          </div>

          {/* HEADING */}
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: 'clamp(40px, 3.2vw, 52px)',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {['We', 'Build', 'Powerful'].map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                style={{
                  marginRight: 8,
                  display: 'inline-block',
                  color: '#ffffff'
                }}
              >
                {w}
              </motion.span>
            ))}

            <br />

            {['Digital', 'Solutions'].map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className="gradient-text"
                style={{
                  marginRight: 8,
                  display: 'inline-block'
                }}
              >
                {w}
              </motion.span>
            ))}

            <br />

            {['That', 'Drive', 'Growth'].map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                style={{
                  marginRight: 8,
                  display: 'inline-block',
                  color: '#ffffff'
                }}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          {/* DESCRIPTION */}
          <p className="animate-on-scroll" style={{
            fontSize: 13,
            color: '#a1a1aa',
            lineHeight: 1.75,
            maxWidth: 500,
            margin: 0
          }}>
            We are a full-service IT company delivering modern web solutions, automation,
            and eCommerce services to help businesses scale and succeed in the digital world.
          </p>

          {/* BUTTONS */}
          <div className="animate-on-scroll" style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link href="/ser" style={{
              background: 'linear-gradient(135deg, #0f727a, #68477c)',
              padding: '11px 22px',
              borderRadius: 10,
              color: '#fff',
              fontWeight: 700,
              fontSize: 13,
              textDecoration: 'none'
            }}>
              Explore Services
            </Link>

            <Link href="#works" style={{
              padding: '11px 22px',
              borderRadius: 10,
              color: '#91a4d7',
              fontWeight: 700,
              fontSize: 13,
              textDecoration: 'none',
              border: '1px solid rgba(145,164,215,0.3)'
            }}>
              View Our Work
            </Link>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
          background: #110b0f;
        }

        .bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 40%, rgba(145,164,215,0.18), transparent 60%);
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 80px);
          padding: 0 20px;
        }

        @media (max-width: 900px) {
          .container {
            text-align: center;
          }
        }
      `}</style>

    </section>
  )
}