type PageHeaderData = {
  eyebrow?: string
  heading: string
  highlightWord?: string
  description?: string
}

export default function PageHeader({ data }: { data: PageHeaderData }) {
  const { eyebrow, heading, highlightWord, description } = data

  const renderHeading = () => {
    if (!highlightWord || !heading.includes(highlightWord)) return heading
    const parts = heading.split(highlightWord)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    )
  }

  return (
    <div style={{ textAlign: 'center', marginBottom: 80 }}>
      {eyebrow && (
        <p style={{
          color: 'var(--green-lime)', letterSpacing: '0.3em', fontSize: 15,
          textTransform: 'uppercase', fontWeight: 500,
        }}>{eyebrow}</p>
      )}
      <h1 className="page-header-title" style={{ fontWeight: 800, marginTop: 10 }}>
        {renderHeading()}
      </h1>
      {description && (
        <p style={{ color: 'var(--text-secondary)', maxWidth: 700, margin: '18px auto 0', lineHeight: 1.7 }}>
          {description}
        </p>
      )}
      <style>{`
        .page-header-title { font-size: 42px; }
        @media (max-width: 768px) {
          .page-header-title { font-size: 28px; }
        }
      `}</style>
    </div>
  )
}