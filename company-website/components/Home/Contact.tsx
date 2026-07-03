'use client'

import { useState } from 'react';

type FormState = { name: string; email: string; message: string; };

type CTAData = {
  heading?: string
  email?: string
  responseTime?: string
  supportText?: string
  phone?: string
  address?: string
}

const inputStyle = {
  padding: '10px 12px', borderRadius: 8,
  background: 'var(--bg-main)', border: '1px solid var(--border-green)',
  color: 'var(--heading-color)', fontSize: 13, outline: 'none',
}

export default function Contact({ data }: { data?: CTAData }) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const heading = data?.heading || "Let's Build Something"
  const email = data?.email || 'hello@yourcompany.com'
  const responseTime = data?.responseTime || 'within 24 hours'
  const supportText = data?.supportText || '24/7 available'
  const phone = data?.phone || '+1 (234) 567-8900'
  const address = data?.address || 'Remote / Worldwide'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '70px 0', background: 'var(--bg-main)', userSelect: "none", cursor: "default" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{ color: 'var(--green-bright)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 6 }}>
            Contact Us
          </p>
          <h2 style={{ color: 'var(--heading-color)', fontSize: 28, fontWeight: 700, margin: 0 }}>
            {heading}
          </h2>
        </div>

        <div className="contact-grid">

          {/* LEFT — window-mockup form */}
          <div className="chat-window">
            <div className="chat-titlebar">
              <div className="dot" style={{ background: '#ff5f57' }} />
              <div className="dot" style={{ background: '#ffbd2e' }} />
              <div className="dot" style={{ background: '#28c840' }} />
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 20 }}>
              <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} style={inputStyle} />
              <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} style={inputStyle} />
              <textarea name="message" placeholder="Your Message" rows={4} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
              <button type="submit" style={{
                background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime), var(--green-dark))',
                padding: '11px 14px', borderRadius: 8, border: 'none',
                color: '#fff', fontWeight: 600, cursor: 'pointer',
              }}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && <p style={{ color: "var(--green-bright)", textAlign: "center", margin: 0 }}>Message sent successfully!</p>}
            </form>
          </div>

          {/* RIGHT — contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              Have a project idea or need a digital solution? We help businesses grow with web apps, automation and modern tech systems.
            </p>
            {[
              { label: email, sub: 'Email us' },
              { label: phone, sub: 'Call us' },
              { label: address, sub: 'Find us' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, background: 'var(--badge-bg)',
                  border: '1px solid var(--border-green)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--green-bright)', flexShrink: 0,
                }}>
                  {i === 0 && <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  {i === 1 && <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                  {i === 2 && <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 10, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.sub}</p>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--heading-color)', fontWeight: 600 }}>{item.label}</p>
                </div>
              </div>
            ))}
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
              Response {responseTime} · {supportText}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        .chat-window {
          border-radius: 14px; overflow: hidden;
          background: var(--card-bg); border: 1px solid var(--border-green);
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
        }
        .chat-titlebar {
          background: var(--tag-bg); padding: 10px 14px;
          display: flex; gap: 7px; border-bottom: 1px solid var(--border-green);
        }
        .dot { width: 11px; height: 11px; border-radius: 50%; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; gap: 30px; } }
      `}</style>
    </section>
  )
}