type ValueItem = { title: string; description: string }
type ValuesGridData = {
  heading?: string
  highlightedWord?: string
  values: ValueItem[]
}

export default function ValuesGrid({ data }: { data: ValuesGridData }) {
  const { heading, highlightedWord, values = [] } = data || {}

  const renderHeading = () => {
    if (!heading) return null
    if (!highlightedWord || !heading.includes(highlightedWord)) return heading
    const parts = heading.split(highlightedWord)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlightedWord}</span>
        {parts.slice(1).join(highlightedWord)}
      </>
    )
  }

  return (
    <div style={{ marginBottom: 80 }}>
      {heading && (
        <h2 style={{ textAlign: 'center', fontSize: 28, marginBottom: 30, fontWeight: 500 }}>
          {renderHeading()}
          {highlightedWord && !heading.includes(highlightedWord) && (
            <span className="gradient-text"> {highlightedWord}</span>
          )}
        </h2>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 20,
      }}>
        {values.map((item, i) => (
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