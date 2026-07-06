import type { Block } from 'payload'
import { techIconOptions } from './iconOptions'

export const ServicesStripBlock: Block = {
  slug: 'servicesStripBlock',
  labels: { singular: 'Services Strip Block', plural: 'Services Strip Blocks' },
  fields: [
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
        { name: 'name', type: 'text', required: true },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Service Title',
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon ',
          options: techIconOptions,
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