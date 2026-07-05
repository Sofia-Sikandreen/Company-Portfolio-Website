'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { useTheme } from '@/components/Home/ThemeProvider'

const navLinks = [
  {
    label: 'Home', href: '/', icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>
    )
  },
  {
    label: 'Services', href: '/ser', icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    )
  },
  {
    label: 'Careers', href: '/careers', icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
    )
  },
  {
    label: 'About Us', href: '/about', icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
    )
  },
  {
    label: 'Team', href: '/team', icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M2 20c0-3 3-5 7-5s7 2 7 5" /><circle cx="17" cy="8" r="2.5" /><path d="M22 20c0-2.5-2-4.2-4.5-4.8" /></svg>
    )
  },
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
      transition: 'all 0.35s ease',
      background: scrolled || menuOpen ? 'var(--navbar-bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-green)' : '1px solid transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(18px)' : 'none',
      boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.18)' : 'none',
      userSelect: 'none',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 28px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 84 }}>

          {/* LOGO */}
          <Link href="/" className="logo-wrap" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
            <span className="logo-glow">
              <Image src="/logo.png" alt="Hibit Logo" width={34} height={34} style={{ display: 'block', borderRadius: 8 }} />
            </span>
            <span style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <span style={{
                color: 'var(--heading-color)', fontWeight: 800, fontSize: 21,
                letterSpacing: '-0.02em', lineHeight: 1,
              }}>
                Hi<span className="gradient-text">bit</span>
              </span>
              <span className="brand-dot" />
            </span>
          </Link>

          {/* DESKTOP NAV — pill container */}
          <ul className="nav-pill desktop-nav" style={{ listStyle: 'none', margin: 0, padding: 6 }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.label} style={{ display: 'inline-flex' }}>
                  <Link href={link.href} className={`nav-item ${isActive ? 'nav-item-active' : ''}`}>
                    <span className="nav-icon">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggle}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              <span className="toggle-icon">
                {theme === 'dark' ? (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
                ) : (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
                )}
              </span>
            </button>

            {/* CONTACT BUTTON */}
            <Link href="/contactus" className="cta-btn">
              <span>Contact Us</span>
              <svg className="cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* HAMBURGER */}
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="hamburger" aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2, background: 'var(--heading-color)',
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
        <div className="mobile-menu">
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.label}>
                  <Link href={link.href} className={`mobile-item ${isActive ? 'mobile-item-active' : ''}`}>
                    <span className="nav-icon">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Link href="/contactus" className="cta-btn" style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
            <span>Contact Us</span>
            <svg className="cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>

          <button type="button" onClick={toggle} className="theme-toggle-mobile" aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
            )}
            {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          </button>
        </div>
      )}

      <style>{`
        .logo-glow {
          display: flex; border-radius: 10px; transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .logo-wrap:hover .logo-glow { transform: scale(1.06); box-shadow: 0 0 18px var(--border-green-hover); }
        .brand-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green-bright); align-self: flex-start; margin-top: 3px;
          box-shadow: 0 0 8px var(--green-bright);
          animation: dot-pulse 2.4s ease-in-out infinite;
        }
        @keyframes dot-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

        .nav-pill {
          display: flex; align-items: center; gap: 2px;
          background: var(--card-bg); border: 1px solid var(--border-green);
          border-radius: 999px; box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }
        .nav-item {
          display: flex; align-items: center; gap: 7px;
          padding: 9px 17px; border-radius: 999px;
          font-size: 13.5px; font-weight: 600; text-decoration: none;
          color: var(--text-secondary); white-space: nowrap;
          transition: color 0.25s ease, background 0.25s ease;
        }
        .nav-icon { display: inline-flex; opacity: 0.75; transition: opacity 0.25s ease; }
        .nav-item:hover { color: var(--heading-color); }
        .nav-item:hover .nav-icon { opacity: 1; }
        .nav-item-active {
          color: #fff;
          background: linear-gradient(135deg, var(--green-bright), var(--green-mid));
          box-shadow: 0 4px 14px var(--border-green-hover);
        }
        .nav-item-active .nav-icon { opacity: 1; }

        .theme-toggle {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: var(--card-bg); border: 1px solid var(--border-green);
          color: var(--text-secondary); cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        .theme-toggle:hover { color: var(--green-bright); border-color: var(--border-green-hover); }
        .toggle-icon { display: flex; pointer-events: none; }

        .cta-btn {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          padding: 11px 24px; border-radius: 999px; color: #fff;
          font-weight: 700; font-size: 14px; text-decoration: none; white-space: nowrap;
          box-shadow: 0 8px 22px var(--border-green-hover);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cta-btn span, .cta-arrow { position: relative; z-index: 1; }
        .cta-arrow { transition: transform 0.3s ease; }
        .cta-btn::before {
          content: ''; position: absolute; top: 0; left: -75%; width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
        }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 28px var(--border-green-hover); }
        .cta-btn:hover::before { left: 120%; transition: left 0.6s ease; }
        .cta-btn:hover .cta-arrow { transform: translateX(3px); }

        .desktop-nav { display: flex !important; }
        .hamburger { display: none !important; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 8px; }

        .mobile-menu {
          background: var(--navbar-bg); border-top: 1px solid var(--border-green);
          padding: 22px 24px 28px; backdrop-filter: blur(18px);
        }
        .mobile-item {
          display: flex; align-items: center; gap: 10px;
          padding: 13px 4px; text-decoration: none;
          color: var(--text-secondary); font-size: 15px; font-weight: 600;
          border-bottom: 1px solid var(--border-green);
          transition: color 0.2s ease;
        }
        .mobile-item-active { color: var(--green-bright); }
        .theme-toggle-mobile {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-top: 12px; width: 100%; padding: 12px;
          background: var(--card-bg); border: 1px solid var(--border-green);
          border-radius: 12px; cursor: pointer;
          color: var(--text-secondary); font-size: 14px; font-weight: 600;
        }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}