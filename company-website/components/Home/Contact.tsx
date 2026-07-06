'use client'

import { useState } from 'react'

type FormState = { name: string; email: string; message: string }
type CTAData = { heading?: string; email?: string; responseTime?: string; supportText?: string }

export default function Contact({ data }: { data?: CTAData }) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const heading = data?.heading || "Let's Build Something"
  const email = data?.email || 'hello@yourcompany.com'
  const responseTime = data?.responseTime || 'within 24 hours'
  const supportText = data?.supportText || '24/7 available'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      })
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
    } finally { setLoading(false) }
  }

  const infoItems = [
    { icon: '✉', label: 'Email', value: email },
    { icon: '⚡', label: 'Response', value: responseTime },
    { icon: '🛡', label: 'Support', value: supportText },
  ]

  return (
    <section id="contact" style={{ padding: '80px 0', background: 'var(--bg-main)', userSelect: 'none', cursor: 'default', position: 'relative', overflow: 'hidden' }}>
      {/* bg decoration */}
      <div style={{ position: 'absolute', bottom: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,179,63,0.08), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', color: 'var(--green-mid)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>Contact Us</span>
          <h2 style={{ color: 'var(--heading-color)', fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, margin: 0 }}>{heading}</h2>
        </div>

        <div className="contact-grid">
          {/* Left info panel */}
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginBottom: 32 }}>
              Have a project idea or need a digital solution? We help businesses grow with web apps, automation, and modern tech systems.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {infoItems.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: 'var(--card-bg)', border: '1px solid var(--border-green)', borderRadius: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(107,179,63,0.1)', border: '1px solid rgba(107,179,63,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 11, color: 'var(--green-lime)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item.label}</p>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-green)', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="field-wrap">
                <label className="field-label">Name</label>
                <input name="name" value={form.name} placeholder="Your Name" onChange={handleChange} className="field-input" />
              </div>
              <div className="field-wrap">
                <label className="field-label">Email</label>
                <input name="email" value={form.email} placeholder="your@email.com" onChange={handleChange} className="field-input" />
              </div>
            </div>
            <div className="field-wrap">
              <label className="field-label">Message</label>
              <textarea name="message" value={form.message} placeholder="Tell us about your project..." rows={5} onChange={handleChange} className="field-input" style={{ resize: 'none' }} />
            </div>
            <button type="submit" className="submit-btn">
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
            {success && <p style={{ color: 'var(--green-bright)', textAlign: 'center', fontSize: 13, fontWeight: 600 }}>✅ Message sent! We'll be in touch.</p>}
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 48px; align-items: start; }
        .field-wrap { display: flex; flex-direction: column; gap: 6px; }
        .field-label { font-size: 11px; font-weight: 600; color: var(--text-secondary); letter-spacing: 0.05em; text-transform: uppercase; }
        .field-input {
          padding: 12px 14px;
          border-radius: 10px;
          background: var(--bg-main);
          border: 1px solid var(--border-green);
          color: var(--heading-color);
          font-size: 13px;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        .field-input:focus { border-color: var(--green-bright); }
        .field-input::placeholder { color: var(--text-secondary); }
        .submit-btn {
          background: linear-gradient(135deg, var(--green-bright), var(--green-lime));
          padding: 14px;
          border-radius: 12px;
          border: none;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          font-family: inherit;
          box-shadow: 0 8px 24px rgba(107,179,63,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(107,179,63,0.4); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 28px; }
          .contact-grid form > div:first-child { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}