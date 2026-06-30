type TextCardData = {
  paragraphs: { text: string }[]
  cardStyle?: boolean
}

export default function TextCard({ data }: { data: TextCardData }) {
  const paragraphs = data?.paragraphs || []
  const wrapped = data?.cardStyle !== false

  const content = (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} style={{
          color: 'var(--text-secondary)', lineHeight: 1.8,
          marginBottom: i < paragraphs.length - 1 ? 20 : 0,
        }}>{p.text}</p>
      ))}
    </>
  )

  if (!wrapped) return <div style={{ marginBottom: 80 }}>{content}</div>

  return (
    <div style={{
      background: 'var(--card-bg)', border: '1px solid var(--border-green)',
      borderRadius: 20, padding: 32, marginBottom: 80,
    }}>
      {content}
    </div>
  )
}