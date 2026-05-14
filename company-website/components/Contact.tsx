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
    <section id="contact" style={{ padding: '50px 0', background: '#110b0f', userSelect: "none", cursor: "default" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: '#91a4d7', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 6 }}>
            Contact Us
          </p>
          <h2 style={{ color: '#fff', fontSize: 28, fontWeight: 700, margin: 0 }}>
            Let's Build Something
          </h2>
        </div>

        {/* GRID */}
        <div className="contact-grid">

          {/* LEFT INFO */}
          <div style={{ color: '#aaa' }}>
            <h3 style={{ color: '#fff', fontSize: 18, marginBottom: 12 }}>Get in Touch</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              Have a project idea or need a digital solution? We help businesses grow with web apps, automation and modern tech systems.
            </p>
            <div style={{ fontSize: 13, lineHeight: 2 }}>
              <p><span style={{ color: '#91a4d7' }}>Email:</span> hello@yourcompany.com</p>
              <p><span style={{ color: '#68477c' }}>Response:</span> within 24 hours</p>
              <p><span style={{ color: '#0f727a' }}>Support:</span> 24/7 available</p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} style={{
            display: 'flex', flexDirection: 'column', gap: 14,
            background: '#111118', padding: 20, borderRadius: 14,
            border: '1px solid rgba(145,164,215,0.15)',
          }}>
            <input name="name" placeholder="Your Name" onChange={handleChange} style={inputStyle} />
            <input name="email" placeholder="Your Email" onChange={handleChange} style={inputStyle} />
            <textarea name="message" placeholder="Your Message" rows={4} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #0f727a, #68477c)',
              padding: '10px 14px', borderRadius: 10, border: 'none',
              color: '#fff', fontWeight: 600, cursor: 'pointer',
            }}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p style={{ color: "#0f727a", marginTop: 12, textAlign: "center" }}>Message sent successfully!</p>}
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
  background: '#0a0a0f', border: '1px solid rgba(145,164,215,0.15)',
  color: '#fff', fontSize: 13, outline: 'none',
}