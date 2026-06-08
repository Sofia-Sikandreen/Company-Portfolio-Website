import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'statsBlock',
  labels: { singular: 'Stats Block', plural: 'Stats Blocks' },
  fields: [
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 4,
      maxRows: 4,
      fields: [
        { name: 'number', type: 'number', required: true, label: 'Number e.g. 50' },
        { name: 'suffix', type: 'text', label: 'Suffix e.g. + or /7', defaultValue: '+' },
        { name: 'label', type: 'text', required: true, label: 'Label e.g. Happy Clients' },
      ],
    },
  ],
}