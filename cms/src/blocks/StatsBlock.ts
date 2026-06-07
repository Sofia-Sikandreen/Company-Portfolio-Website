import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'statsBlock',
  labels: { singular: 'Stats Block', plural: 'Stats Blocks' },
  fields: [
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Value e.g. 50+' },
        { name: 'label', type: 'text', required: true, label: 'Label e.g. Projects Done' },
      ],
    },
  ],
}