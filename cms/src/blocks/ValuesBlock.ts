import type { Block } from 'payload'

export const ValuesBlock: Block = {
  slug: 'valuesBlock',
  labels: { singular: 'Values Block', plural: 'Values Blocks' },
  fields: [
    { name: 'heading', type: 'text', label: 'Heading (plain part)', defaultValue: 'Our' },
    { name: 'highlightedWord', type: 'text', label: 'Heading (gradient part)', defaultValue: 'Values' },
    {
      name: 'values',
      type: 'array',
      label: 'Values',
      minRows: 1,
      defaultValue: [
        { title: 'Trust & Security', description: 'We build secure and reliable digital solutions.' },
        { title: 'Innovation', description: 'We turn ideas into modern scalable products.' },
        { title: 'Growth', description: 'Focused on long-term success and improvement.' },
        { title: 'Passion', description: 'We care deeply about every detail we build.' },
      ],
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Title' },
        { name: 'description', type: 'textarea', label: 'Description' },
      ],
    },
  ],
}