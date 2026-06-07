import type { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'aboutBlock',
  labels: { singular: 'About Block', plural: 'About Blocks' },
  fields: [
    { name: 'heading', type: 'text', label: 'Heading' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Image' },
  ],
}