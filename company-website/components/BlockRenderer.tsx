 import Hero from '@/components/Home/Hero'
import Stats from '@/components/Home/Stats'
import Services from '@/components/Home/Services'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Contact from '@/components/Home/Contact'
import AboutHeader from '@/components/About/AboutHeader'
import AboutStats from '@/components/About/AboutStats'
import AboutText from '@/components/About/AboutText'
import Values from '@/components/About/Values'
import CTABanner from '@/components/About/CtaBanner'
import TechGrid from '@/components/Services/TechGrid'
import Platform from '@/components/Services/Platform'
import MovingStrip from '@/components/Services/MovingStrip'
import CmsFeature from '@/components/Services/CmsFeature'
import ClockFeature from '@/components/Services/ClockFeature'
import CTAButton from '@/components/Services/ServicesCTA'

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
  techGridBlock: TechGrid,
  platformBlock: Platform,
  movingStripBlock: MovingStrip,
  cmsFeatureBlock: CmsFeature,
  clockFeatureBlock: ClockFeature,
  ctaButtonBlock: CTAButton,
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