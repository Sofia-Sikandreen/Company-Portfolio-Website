import { getPage } from '@/lib/getPage'
import BlockRenderer from '@/components/BlockRenderer'

export default async function ServicesPage() {
  const page = await getPage('services')
  const blocks = page?.blocks || []

  return (
    <main style={{
      minHeight: "100vh", background: "var(--bg-dark)", color: "var(--text-primary)",
      padding: "120px 24px 80px", userSelect: "none", cursor: "default",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <BlockRenderer blocks={blocks} />
      </div>
    </main>
  )
}