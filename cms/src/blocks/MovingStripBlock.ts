import type { Block } from 'payload'
import { techIconOptions } from './iconOptions'

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
        {
          name: 'icon',
          type: 'select',
          required: true,
          label: 'Icon',
          options: techIconOptions,
        },
      ],
    },
  ],
}