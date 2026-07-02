"use client";

type ServicesHeaderData = {
  heading?: string
  highlightedWord?: string
  description?: string
}

export default function ServicesHeader({ data }: { data: ServicesHeaderData }) {
  const { heading, highlightedWord, description } = data || {}
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <h1 style={{ fontSize: 38, fontWeight: 800 }}>
        {heading} <span className="gradient-text">{highlightedWord}</span>
      </h1>
      <p style={{ color: "var(--text-secondary)", maxWidth: 700, margin: "16px auto 0" }}>
        {description}
      </p>
    </div>
  );
}