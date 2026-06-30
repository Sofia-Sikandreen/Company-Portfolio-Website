import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { StatsBlock } from '../blocks/StatsBlock'
import { AboutBlock } from '../blocks/AboutBlock'
import { CTABlock } from '../blocks/CTABlock'
import { FeaturedProjectsBlock } from '../blocks/FeaturedProjectsBlock'
import { ServicesStripBlock } from '../blocks/ServicesStripBlock'
import { AboutHeaderBlock } from '../blocks/AboutHeaderBlock'
import { AboutStatsBlock } from '../blocks/AboutStatsBlock'
import { AboutTextBlock } from '../blocks/AboutTextBlock'
import { ValuesBlock } from '../blocks/ValuesBlock'
import { CTABannerBlock } from '../blocks/CTABannerBlock'
import { TechGridBlock } from '../blocks/TechGridBlock'
import { PlatformBlock } from '../blocks/PlatformBlock'
import { MovingStripBlock } from '../blocks/MovingStripBlock'
import { CmsFeatureBlock } from '../blocks/CmsFeatureBlock'
import { ClockFeatureBlock } from '../blocks/ClockFeatureBlock'
import { CTAButtonBlock } from '../blocks/CTAButtonBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Page Title' },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Page Slug',
      admin: {
        description: 'URL path for this page — lowercase, no spaces (e.g. "about", "pricing", "blog"). Use "home" for the homepage.',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Page Blocks',
      blocks: [
  HeroBlock,
  StatsBlock,
  AboutBlock,
  CTABlock,
  FeaturedProjectsBlock,
  ServicesStripBlock,
  AboutHeaderBlock,
  AboutStatsBlock,
  AboutTextBlock,
  ValuesBlock,
  CTABannerBlock,
  TechGridBlock,
  PlatformBlock,
  MovingStripBlock,
  CmsFeatureBlock,
  ClockFeatureBlock,
  CTAButtonBlock,
],
    },
  ],
}