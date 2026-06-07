import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'ctaBlock',
  labels: { singular: 'CTA Block', plural: 'CTA Blocks' },
  fields: [
    { name: 'heading', type: 'text', label: 'Heading' },
    { name: 'subtext', type: 'text', label: 'Sub Text' },
    { name: 'buttonText', type: 'text', label: 'Button Text' },
    { name: 'buttonLink', type: 'text', label: 'Button Link' },
  ],
}