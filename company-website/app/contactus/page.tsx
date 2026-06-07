"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
   await fetch(`/api/contact`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: form.name,
    email: form.email,
    message: form.message,
  }),
});

setSuccess(true);
setForm({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: 14,
    marginBottom: 14,
    borderRadius: 10,
    background: "var(--bg-main)",
    border: "1px solid var(--border-green)",
    color: "var(--text-primary)",
    fontSize: 14,
    outline: "none",
    boxShadow: "none",
    caretColor: "var(--green-bright)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-main)",
        color: "var(--text-primary)",
        padding: "120px 24px 80px",
        userSelect: "none",
    cursor: "default",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 style={{ fontSize: 42, fontWeight: 800 }}>
            Contact <span className="gradient-text">Us</span>
          </h1>

          <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0" }}>
            Let’s discuss your project, idea, or opportunity.
          </p>
        </div>

        {/* FORM CARD */}
        <div
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border-green)",
            borderRadius: 20,
            padding: 30,
            position: "relative",
            isolation: "isolate",
            cursor: "default",
userSelect: "none",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              style={inputStyle}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              style={{ ...inputStyle, resize: "none" }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 10,
                border: "none",
                background: "linear-gradient(135deg,var(--green-bright),var(--green-lime))",
                color: "var(--text-primary)",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p style={{ color: "var(--green-bright)", marginTop: 12, textAlign: "center" }}>
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}