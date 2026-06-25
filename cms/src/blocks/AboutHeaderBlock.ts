import type { Block } from 'payload'

export const AboutHeaderBlock: Block = {
  slug: 'aboutHeaderBlock',
  labels: { singular: 'About Header Block', plural: 'About Header Blocks' },
  fields: [
    { name: 'tagText', type: 'text', label: 'Tag (small label above title)', defaultValue: 'About Us' },
    { name: 'title', type: 'text', label: 'Title', defaultValue: 'We Build Modern Software Solutions' },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'We are a software development company focused on building scalable, high-performance digital products for businesses worldwide.',
    },
  ],
}