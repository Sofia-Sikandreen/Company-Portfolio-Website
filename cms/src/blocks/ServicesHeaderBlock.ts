import type { Block } from 'payload'

export const ServicesHeaderBlock: Block = {
  slug: 'servicesHeaderBlock',
  labels: { singular: 'Services Header', plural: 'Services Headers' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Our' },
    { name: 'highlightedWord', type: 'text', defaultValue: 'Services' },
    { name: 'description', type: 'text', defaultValue: 'Technologies and tools we use to build modern digital solutions.' },
  ],
}