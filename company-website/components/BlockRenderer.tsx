import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'
import AboutHeader from '@/components/AboutHeader'
import AboutStats from '@/components/AboutStats'
import AboutText from '@/components/AboutText'
import Values from '@/components/Values'
import CTABanner from '@/components/CtaBanner'

type PageBlock = { blockType: string; id?: string; [key: string]: any }

const blockRegistry: Record<string, React.ComponentType<{ data: any }>> = {
  heroBlock: Hero,
  statsBlock: Stats,
  servicesStripBlock: Services,
  featuredProjectsBlock: FeaturedProjects,
  ctaBlock: Contact,
  aboutHeaderBlock: AboutHeader,
  aboutStatsBlock: AboutStats,
  aboutTextBlock: AboutText,
  valuesBlock: Values,
  ctaBannerBlock: CTABanner,
}

export default function BlockRenderer({ blocks }: { blocks?: PageBlock[] }) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((block) => {
        const Component = blockRegistry[block.blockType]
        if (!Component) return null
        return <Component key={block.id ?? block.blockType} data={block} />
      })}
    </>
  )
}