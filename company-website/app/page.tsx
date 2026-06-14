import { getPage } from '@/lib/getPage'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'

export default async function Home() {
  const page = await getPage('home')
  const blocks = page?.blocks || []

  return (
    <>
      {blocks.map((block: any) => {
        switch (block.blockType) {
          case 'heroBlock':
            return <Hero key={block.id} data={block} />
          case 'statsBlock':
            return <Stats key={block.id} data={block} />
          case 'servicesStripBlock':
            return <Services key={block.id} data={block} />
          case 'featuredProjectsBlock':
            return <FeaturedProjects key={block.id} data={block} />
          case 'ctaBlock':
            return <Contact key={block.id} data={block} />
          default:
            return null
        }
      })}
    </>
  )
}