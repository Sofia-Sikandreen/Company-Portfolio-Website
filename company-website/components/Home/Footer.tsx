'use client'

import Link from 'next/link'

type FooterLink = { label: string; href: string }
type FooterData = {
  description?: string
  email?: string
  phone?: string
  address?: string
  quickLinks?: FooterLink[]
  serviceLinks?: FooterLink[]
}

export default function Footer({ data }: { data?: FooterData }) {
  const description = data?.description || 'We help businesses grow with modern web solutions, automation, and eCommerce services.'
  const email = data?.email || 'hello@yourcompany.com'
  const phone = data?.phone || '+1 (234) 567-8900'
  const address = data?.address || 'Remote / Worldwide'

  const quickLinks = data?.quickLinks?.length ? data.quickLinks : [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ]

  const serviceLinks = data?.serviceLinks?.length ? data.serviceLinks : [
    { label: 'Web Development', href: '/ser' },
    { label: 'Automation', href: '/ser' },
    { label: 'eCommerce Solutions', href: '/ser' },
  ]

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          <div style={{ maxWidth: 300 }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--heading-color)' }}>Logo</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.7, marginTop: 14 }}>{description}</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {['facebook', 'instagram', 'linkedin'].map((s) => (
                <div key={s} className="social-icon">
                  {s === 'facebook' && <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.1v7A10 10 0 0022 12z" /></svg>}
                  {s === 'instagram' && <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-2.7 0-3.1 0-4.1.06-1.1.05-1.8.22-2.4.46a5 5 0 00-1.8 1.2 5 5 0 00-1.2 1.8c-.24.6-.4 1.3-.46 2.4C2 9 2 9.3 2 12s0 3.1.06 4.1c.05 1.1.22 1.8.46 2.4a5 5 0 001.2 1.8 5 5 0 001.8 1.2c.6.24 1.3.4 2.4.46 1 .06 1.4.06 4.1.06s3.1 0 4.1-.06c1.1-.05 1.8-.22 2.4-.46a5 5 0 001.8-1.2 5 5 0 001.2-1.8c.24-.6.4-1.3.46-2.4.06-1 .06-1.4.06-4.1s0-3.1-.06-4.1c-.05-1.1-.22-1.8-.46-2.4a5 5 0 00-1.2-1.8 5 5 0 00-1.8-1.2c-.6-.24-1.3-.4-2.4-.46C15.1 2 14.7 2 12 2zm0 5a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.2-2.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>}
                  {s === 'linkedin' && <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23h-4V8.25zM8.5 8.25h3.83v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.75c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4V8.25z" /></svg>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">{link.label}</Link>
            ))}
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">{link.label}</Link>
            ))}
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-link" style={{ cursor: 'default' }}>{email}</p>
            <p className="footer-link" style={{ cursor: 'default' }}>{phone}</p>
            <p className="footer-link" style={{ cursor: 'default' }}>{address}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ color: 'var(--text-secondary)', fontSize: 12, margin: 0 }}>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-bottom-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer { background: var(--footer-bg); padding: 64px 0 0; border-top: 1px solid var(--border-green); }
        .footer-inner { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
        .footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 40px; padding-bottom: 44px; }
        .footer-heading { color: var(--heading-color); font-size: 14px; font-weight: 700; margin-bottom: 18px; }
        .footer-link, p.footer-link { display: block; color: var(--text-secondary); font-size: 13px; text-decoration: none; margin-bottom: 12px; transition: color 0.2s; }
        a.footer-link:hover { color: var(--green-bright); }
        .social-icon {
          width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          background: var(--badge-bg); border: 1px solid var(--border-green); color: var(--text-secondary);
          transition: all 0.2s;
        }
        .social-icon:hover { background: var(--green-bright); color: var(--text-light); border-color: var(--green-bright); }
        .footer-bottom {
          border-top: 1px solid var(--border-green); padding: 22px 0;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
        }
        .footer-bottom-link { color: var(--text-secondary); font-size: 12px; text-decoration: none; }
        .footer-bottom-link:hover { color: var(--green-bright); }
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}