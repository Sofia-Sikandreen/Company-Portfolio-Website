'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type NavItem = { label: string; href: string }

export default function Navbar({ items }: { items?: NavItem[] }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = items?.length ? items : [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--heading-color)' }}>Logo</span>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link href="#contact" className="nav-cta">Contact Us</Link>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="mobile-link">{item.label}</Link>
          ))}
        </div>
      )}

      <style jsx>{`
        .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 22px 0; transition: all 0.3s ease; }
        .navbar.scrolled {
          padding: 14px 0; background: var(--navbar-bg); backdrop-filter: blur(14px);
          box-shadow: 0 2px 24px rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-green);
        }
        .navbar-inner { max-width: 1240px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; }
        .nav-links { display: flex; gap: 34px; }
        .nav-link { color: var(--text-primary); font-size: 14px; font-weight: 600; text-decoration: none; opacity: 0.75; transition: opacity 0.2s, color 0.2s; }
        .nav-link:hover { opacity: 1; color: var(--green-bright); }
        .nav-cta {
          background: var(--green-bright); color: var(--text-light); font-weight: 700; font-size: 13px;
          padding: 11px 24px; border-radius: 10px; text-decoration: none;
          box-shadow: 0 8px 22px var(--border-green-hover); transition: transform 0.2s;
        }
        .nav-cta:hover { transform: translateY(-2px); }
        .menu-btn { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .menu-btn span { width: 22px; height: 2px; background: var(--heading-color); border-radius: 2px; }
        .mobile-menu {
          display: none; flex-direction: column; gap: 4px; padding: 16px 24px 20px;
          background: var(--navbar-bg); border-top: 1px solid var(--border-green);
        }
        .mobile-link { color: var(--text-primary); text-decoration: none; font-weight: 600; font-size: 14px; padding: 10px 0; }
        @media (max-width: 800px) {
          .nav-links { display: none; }
          .menu-btn { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>
    </nav>
  )
}