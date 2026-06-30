"use client";

type CTAButtonData = {
  heading?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function CTAButton({ data }: { data: CTAButtonData }) {
  const { heading, description, buttonText, buttonLink } = data || {}
  return (
    <div style={{ marginTop: 80, textAlign: "center" }}>
      <div style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border-green)", borderRadius: 20, padding: 40,
      }}>
        <h2 style={{ fontSize: 28 }}>{heading}</h2>
        <p style={{ color: "var(--text-secondary)", marginTop: 10 }}>{description}</p>
        <a href={buttonLink} style={{
          display: "inline-block", marginTop: 20, padding: "12px 20px",
          borderRadius: 10, background: "linear-gradient(135deg,var(--green-bright),var(--green-lime))", color: "var(--text-primary)",
        }}>{buttonText}</a>
      </div>
    </div>
  )
}