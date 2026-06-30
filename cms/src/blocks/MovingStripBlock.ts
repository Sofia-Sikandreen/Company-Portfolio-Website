import type { Block } from 'payload'

export const MovingStripBlock: Block = {
  slug: 'movingStripBlock',
  labels: { singular: 'Moving Strip Block', plural: 'Moving Strip Blocks' },
  fields: [
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'icon', type: 'text', required: true, admin: { description: 'react, ai, flutter, figma, cloud, shopify' } },
      ],
    },
  ],
}