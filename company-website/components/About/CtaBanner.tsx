type GradientCtaData = {
  heading: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function GradientCta({ data }: { data: GradientCtaData }) {
  const { heading, description, buttonText, buttonLink } = data || {}
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime), var(--green-dark))',
      borderRadius: 20, padding: 30, textAlign: 'center',
    }}>
      <h2 style={{ fontSize: 22, marginBottom: 10, color: '#fff' }}>{heading}</h2>
      {description && <p style={{ fontSize: 14, color: '#fff' }}>{description}</p>}
      {buttonText && buttonLink && (
        <a href={buttonLink} style={{
          display: 'inline-block', marginTop: 16, padding: '10px 22px',
          borderRadius: 10, background: 'rgba(255,255,255,0.2)',
          color: '#fff', fontWeight: 700, fontSize: 14, textDecoration: 'none',
        }}>{buttonText}</a>
      )}
    </div>
  )
}