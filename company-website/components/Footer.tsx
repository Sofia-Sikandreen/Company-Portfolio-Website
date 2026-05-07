import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/ser' },
  { label: 'Careers', href: '/careers' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contactus' },
]

const services = ['Web Development', 'YouTube Automation','Laravel Development', 'Shopify/FBA']
const otherServices = ['PHP Development', 'WordPress Development', 'FBA Services']

const socials = [
  { label: 'Facebook', href: '#place url here', icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>) },
  { label: 'Twitter', href: '#', icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>) },
  { label: 'LinkedIn', href: '#', icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>) },
  { label: 'Instagram', href: '#', icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>) },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0f',
        borderTop: '1px solid rgba(145,164,215,0.12)',
        userSelect: "none",
    cursor: "default",
      }}
    >

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '45px 20px 30px', // ↓ reduced top + bottom padding
        }}
      >

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.4fr',
            gap: 50, // ↑ more spacing between columns
            alignItems: 'start',
          }}
        >

          {/* BRAND */}
          <div style={{ paddingRight: 10 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #0f727a, #68477c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
              }}>
                L
              </div>
              <span style={{ color: '#fff', fontWeight: 600 }}>LOGO</span>
            </Link>

            <p style={{
              color: '#9ca3af',
              fontSize: 13,
              lineHeight: 1.7,
              maxWidth: 260,
            }}>
              Building scalable digital systems, automation tools and modern web solutions.
            </p>

            <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
              {socials.map(s => (
                <Link
                  key={s.label}
                  href={s.href}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: '#111118',
                    border: '1px solid rgba(145,164,215,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                  }}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div style={{ paddingLeft: 10 }}>
            <h4 style={titleStyle}>Quick Links</h4>
            <ul style={listStyle}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={linkStyle}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 style={titleStyle}>Services</h4>
            <ul style={listStyle}>
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" style={linkStyle}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OTHER */}
          <div>
            <h4 style={titleStyle}>Other</h4>
            <ul style={listStyle}>
              {otherServices.map(s => (
                <li key={s}>
                  <Link href="/services" style={linkStyle}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div style={{ paddingLeft: 10 }}>
            <h4 style={titleStyle}>Newsletter</h4>

            <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>
              Get updates about services and offers.
            </p>

            <div style={{ display: 'flex', gap: 8 }}>
              <input
                placeholder="Email"
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: 10,
                  background: '#111118',
                  border: '1px solid rgba(145,164,215,0.15)',
                  color: '#fff',
                  fontSize: 12,
                  outline: 'none',
                }}
              />

              <button style={{
                padding: '9px 12px',
                borderRadius: 10,
                background: 'linear-gradient(135deg, #0f727a, #68477c)',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
              }}>
                →
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div
          style={{
            marginTop: 30, // ↓ reduced bottom gap
            paddingTop: 15,
            borderTop: '1px solid rgba(145,164,215,0.12)',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 12,
            color: '#6b7280',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          <span>© 2024 Your Company</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

const titleStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: 13,
  marginBottom: 12,
  fontWeight: 600,
}

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 9,
}

const linkStyle: React.CSSProperties = {
  color: '#9ca3af',
  fontSize: 13,
  textDecoration: 'none',
}