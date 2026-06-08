import { getPage } from '@/lib/getPage'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'

export default async function Home() {
  const page = await getPage('home')
  const blocks = page?.blocks || []

  const getBlock = (type: string) => blocks.find((b: any) => b.blockType === type)

  const heroData = getBlock('heroBlock')
  const statsData = getBlock('statsBlock')
  const servicesData = getBlock('servicesStripBlock')
  const projectsData = getBlock('featuredProjectsBlock')
  const ctaData = getBlock('ctaBlock')
  const aboutData = getBlock('aboutBlock')

  return (
    <>
      <Hero data={heroData} />
      <Services data={servicesData} />
      <Stats data={statsData} />
      <FeaturedProjects data={projectsData} />
      <Contact data={ctaData} />
    </>
  )
}