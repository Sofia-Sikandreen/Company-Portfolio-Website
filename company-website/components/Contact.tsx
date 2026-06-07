'use client'

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    <section id="contact" style={{ padding: '50px 0', background: 'var(--bg-main)', userSelect: "none", cursor: "default" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: 'var(--green-bright)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 6 }}>
            Contact Us
          </p>
          <h2 style={{ color: 'var(--heading-color)', fontSize: 28, fontWeight: 700, margin: 0 }}>
            Let's Build Something
          </h2>
        </div>

        {/* GRID */}
        <div className="contact-grid">

          {/* LEFT INFO */}
          <div style={{ color: 'var(--text-secondary)' }}>
            <h3 style={{ color: 'var(--heading-color)', fontSize: 18, marginBottom: 12 }}>Get in Touch</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              Have a project idea or need a digital solution? We help businesses grow with web apps, automation and modern tech systems.
            </p>
            <div style={{ fontSize: 13, lineHeight: 2 }}>
              <p><span style={{ color: 'var(--green-lime)' }}>Email:</span> hello@yourcompany.com</p>
              <p><span style={{ color: 'var(--green-lime)' }}>Response:</span> within 24 hours</p>
              <p><span style={{ color: 'var(--green-lime)' }}>Support:</span> 24/7 available</p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} style={{
            display: 'flex', flexDirection: 'column', gap: 14,
            background: 'var(--card-bg)', padding: 20, borderRadius: 14,
            border: '1px solid var(--border-green)',
          }}>
            <input name="name" placeholder="Your Name" onChange={handleChange} style={inputStyle} />
            <input name="email" placeholder="Your Email" onChange={handleChange} style={inputStyle} />
            <textarea name="message" placeholder="Your Message" rows={4} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
            <button type="submit" style={{
              background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime), var(--green-dark))',
              padding: '10px 14px', borderRadius: 10, border: 'none',
              color: '#ffff', fontWeight: 600, cursor: 'pointer',
            }}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p style={{ color: "var(--green-bright)", marginTop: 12, textAlign: "center" }}>Message sent successfully!</p>}
          </form>

        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  )
}

const inputStyle = {
  padding: '10px 12px', borderRadius: 10,
  background: 'var(--bg-main)',
  border: '1px solid var(--border-green)',
  color: 'var(--heading-color)', fontSize: 13, outline: 'none',
}