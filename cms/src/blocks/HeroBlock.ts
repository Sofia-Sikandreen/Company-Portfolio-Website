import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: { singular: 'Hero Block', plural: 'Hero Blocks' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Main Heading' },
    { name: 'subheading', type: 'text', label: 'Sub Heading' },
    { name: 'buttonText', type: 'text', label: 'Button Text' },
    { name: 'buttonLink', type: 'text', label: 'Button Link' },
  ],
}