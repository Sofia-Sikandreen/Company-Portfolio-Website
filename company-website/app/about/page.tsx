import { getPage } from '@/lib/getPage'
import BlockRenderer from '@/components/BlockRenderer'

export default async function AboutPage() {
  const page = await getPage('about')
  const blocks = page?.blocks || []

  return (
    <main
      style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)', userSelect: 'none', cursor: 'default' }}
      className="about-main"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <BlockRenderer blocks={blocks} />
      </div>
      <style>{`
        .about-main { padding: 120px 24px 80px; }
        @media (max-width: 768px) { .about-main { padding: 100px 16px 60px; } }
      `}</style>
    </main>
  )
}