'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { useTheme } from '@/components/ThemeProvider'

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
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled || menuOpen ? 'var(--navbar-bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-green)' : 'none',
      backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
      userSelect: 'none',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
               <Image src="/logo.png" alt="Logo" width={40} height={40} />

            <span style={{ color: 'var(--heading-color)', fontWeight: 700, fontSize: 18, letterSpacing: '0.02em' }}>Hibit</span>
          </Link>

          {/* DESKTOP NAV */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.label}>
                  <Link href={link.href} style={{
                    textDecoration: 'none', fontSize: 14, fontWeight: 500,
                    color: isActive ? 'var(--green-lime)' : 'var(--text-secondary)',
                    position: 'relative', paddingBottom: 4, transition: 'color 0.2s ease',
                  }}>
                    {link.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute', bottom: -2, left: 0, right: 0,
                        height: 2, background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime))', borderRadius: 2,
                      }} />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
         {/*Toggle*/ }
          <button onClick={toggle} className="desktop-nav" aria-label="Toggle theme"
          style={{ background:'none', border:'1px solid var(--border-green)',
       borderRadius:8, padding:'6px 10px', cursor:'pointer',
        color:'var(--text-secondary)', fontSize:16, lineHeight:1 }}>
       {theme === 'dark' ? '☀️' : '🌙'}
         </button>

          {/* CONTACT BUTTON */}
          <Link href="/contactus" className="desktop-nav" style={{
            background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime))',
            padding: '10px 22px', borderRadius: 10, color: '#fff',
            fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap',
          }}>
            Contact Us
          </Link>

          {/* HAMBURGER */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5, padding: 8,
          }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2, background: 'var(--green-dark)',
                borderRadius: 2, transition: 'all 0.3s',
                transform: i === 0 && menuOpen ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 2 && menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                opacity: i === 1 && menuOpen ? 0 : 1,
              }} />
            ))}
          </button>

        </nav>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          background: 'var(--navbar-bg)',
          borderTop: '1px solid var(--border-green)',
          padding: '20px 24px 30px',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {navLinks.map((link) => (
              <li key={link.label} style={{ borderBottom: '1px solid var(--border-green)' }}>
                <Link href={link.href} style={{
                  display: 'block', padding: '14px 0',
                  color: pathname === link.href ? 'var(--green-bright)' : 'var(--text-secondary)',
                  textDecoration: 'none', fontSize: 15, fontWeight: 500,
                }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contactus" style={{
            display: 'block', marginTop: 20, textAlign: 'center',
            background: 'linear-gradient(135deg, var(--green-bright), var(--green-mid))',
            padding: '12px', borderRadius: 10, color: '#fff',
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
          }}>
            Contact Us
          </Link>
           <button onClick={toggle} aria-label="Toggle theme"
           style={{ display:'flex', alignItems:'center', justifyContent:'center',
         gap:8, marginTop:12, width:'100%', padding:'11px',
         background:'none', border:'1px solid var(--border-green)',
         borderRadius:10, cursor:'pointer',
         color:'var(--text-secondary)', fontSize:14, fontWeight:500 }}>
          {theme === 'dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
           </button>

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