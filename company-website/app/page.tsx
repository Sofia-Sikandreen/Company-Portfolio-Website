import { getPage } from '@/lib/getPage'
import BlockRenderer from '@/components/BlockRenderer'

export default async function Home() {
  const page = await getPage('home')
   return <BlockRenderer blocks={page?.blocks} />
}