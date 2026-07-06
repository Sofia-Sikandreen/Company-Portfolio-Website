import type { Block } from 'payload'

export const ServicesStripBlock: Block = {
  slug: 'servicesStripBlock',
  labels: { singular: 'Services Strip Block', plural: 'Services Strip Blocks' },
  fields: [
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Service Title',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon (emoji)',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
          defaultValue: '/ser',
        },
      ],
    },
  ],
}