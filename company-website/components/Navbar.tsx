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
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled || menuOpen ? 'rgba(10,10,15,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(108,99,255,0.15)' : 'none',
      backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
      userSelect: 'none',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 34, height: 34,
              background: 'linear-gradient(135deg, #0f727a, #68477c)',
              borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>L</span>
            </div>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, letterSpacing: '0.02em' }}>LOGO</span>
          </Link>

          {/* DESKTOP NAV */}
          <ul style={{
            display: 'flex', alignItems: 'center', gap: 36,
            listStyle: 'none', margin: 0, padding: 0,
          }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.label}>
                  <Link href={link.href} style={{
                    textDecoration: 'none', fontSize: 14, fontWeight: 500,
                    color: isActive ? '#ffffff' : '#9ca3af',
                    position: 'relative', paddingBottom: 4, transition: 'color 0.2s ease',
                  }}>
                    {link.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute', bottom: -2, left: 0, right: 0,
                        height: 2, background: 'linear-gradient(135deg, #0f727a, #68477c)', borderRadius: 2,
                      }} />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* DESKTOP CONTACT BUTTON */}
          <Link href="/contactus" className="desktop-nav" style={{
            background: 'linear-gradient(135deg, #0f727a, #68477c)',
            padding: '10px 22px', borderRadius: 10, color: '#fff',
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
            whiteSpace: 'nowrap', boxShadow: '0 6px 20px rgba(40,90,177,0.25)',
          }}>
            Contact Us
          </Link>

          {/* HAMBURGER */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 5, padding: 8,
            }}
          >
            <span style={{
              display: 'block', width: 24, height: 2, background: '#fff',
              borderRadius: 2, transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 24, height: 2, background: '#fff',
              borderRadius: 2, transition: 'all 0.3s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 24, height: 2, background: '#fff',
              borderRadius: 2, transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>

        </nav>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,15,0.98)',
          borderTop: '1px solid rgba(145,164,215,0.12)',
          padding: '20px 24px 30px',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {navLinks.map((link) => (
              <li key={link.label} style={{ borderBottom: '1px solid rgba(145,164,215,0.08)' }}>
                <Link href={link.href} style={{
                  display: 'block', padding: '14px 0',
                  color: pathname === link.href ? '#fff' : '#9ca3af',
                  textDecoration: 'none', fontSize: 15, fontWeight: 500,
                }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contactus" style={{
            display: 'block', marginTop: 20, textAlign: 'center',
            background: 'linear-gradient(135deg, #0f727a, #68477c)',
            padding: '12px', borderRadius: 10, color: '#fff',
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
          }}>
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .hamburger { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}