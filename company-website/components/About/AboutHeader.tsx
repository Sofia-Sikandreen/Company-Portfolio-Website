type AboutHeaderData = {
  tagText?: string
  title: string
  description?: string
}

export default function AboutHeader({ data }: { data: AboutHeaderData }) {
  const { tagText, title, description } = data

  return (
    <div style={{ textAlign: 'center', marginBottom: 80 }}>
      {tagText && (
        <p style={{
          color: 'var(--green-lime)', letterSpacing: '0.3em', fontSize: 15,
          textTransform: 'uppercase', fontWeight: 500,
        }}>{tagText}</p>
      )}
      <h1 className="page-header-title" style={{ fontWeight: 800, marginTop: 10 }}>
        {title}
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