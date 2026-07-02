import type { Block } from 'payload'
import { techIconOptions } from './iconOptions'

export const TechGridBlock: Block = {
  slug: 'techGridBlock',
  labels: { singular: 'Tech Grid Block', plural: 'Tech Grid Blocks' },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Technologies',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Display Name' },
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