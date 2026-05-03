'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/ser' },
  { label: 'Careers', href: '/careers' },
  { label: 'About Us', href: '/about' },
  { label: 'Team', href: '/team' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(108, 99, 255, 0.15)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 72,
          }}
        >

          {/* LEFT: LOGO */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                background: 'linear-gradient(135deg, #0f727a, #68477c)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>
                L
              </span>
            </div>

            <span
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: '0.02em',
              }}
            >
              LOGO
            </span>
          </Link>

          {/* CENTER: NAV LINKS */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 36,
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      color: isActive ? '#ffffff' : '#9ca3af',
                      position: 'relative',
                      paddingBottom: 4,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}

                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: -2,
                          left: 0,
                          right: 0,
                          height: 2,
                          background: 'linear-gradient(135deg, #0f727a, #68477c)',
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* RIGHT: CONTACT BUTTON */}
          <Link
            href="/contactus"
            style={{
              background: 'linear-gradient(135deg, #0f727a, #68477c)',
              padding: '10px 22px',
              borderRadius: 10,
              color: '#fff',
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 6px 20px rgba(40, 90, 177, 0.25)',
            }}
          >
            Contact Us
          </Link>

        </nav>
      </div>
    </header>
  )
}