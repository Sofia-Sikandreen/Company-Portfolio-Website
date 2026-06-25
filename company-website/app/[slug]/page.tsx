import { notFound } from 'next/navigation'
import { getPage } from '@/lib/getPage'
import BlockRenderer from '@/components/BlockRenderer'

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) notFound()

  return (
    <main style={{ minHeight: '100vh', paddingTop: 80 }}>
      <BlockRenderer blocks={page.blocks} />
    </main>
  )
}