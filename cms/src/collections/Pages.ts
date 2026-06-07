import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { StatsBlock } from '../blocks/StatsBlock'
import { AboutBlock } from '../blocks/AboutBlock'
import { CTABlock } from '../blocks/CTABlock'
import { FeaturedProjectsBlock } from '../blocks/FeaturedProjectsBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
    },
    {
      name: 'slug',
      type: 'select',
      required: true,
      label: 'Page',
      options: [
        { label: 'Home', value: 'home' },
        { label: 'About', value: 'about' },
        { label: 'Team', value: 'team' },
      ],
      admin: {
        description: 'Konsa page hai yeh?',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Page Blocks',
      blocks: [HeroBlock, StatsBlock, AboutBlock, CTABlock, FeaturedProjectsBlock,],
    },
  ],
}