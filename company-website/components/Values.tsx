type ValueItem = { title: string; description: string }
type ValuesGridData = {
  heading?: string
  highlightWord?: string
  items: ValueItem[]
}

export default function ValuesGrid({ data }: { data: ValuesGridData }) {
  const { heading, highlightWord, items = [] } = data || {}

  const renderHeading = () => {
    if (!heading) return null
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
    <div style={{ marginBottom: 80 }}>
      {heading && (
        <h2 style={{ textAlign: 'center', fontSize: 28, marginBottom: 30, fontWeight: 500 }}>
          {renderHeading()}
        </h2>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 20,
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            background: 'var(--card-bg)', border: '1px solid var(--border-green)',
            borderRadius: 16, padding: 24,
          }}>
            <h3 style={{ color: 'var(--green-lime)', marginBottom: 10 }}>{item.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}