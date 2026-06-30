import type { Block } from 'payload'

export const CTAButtonBlock: Block = {
  slug: 'ctaButtonBlock',
  labels: { singular: 'CTA Button Block', plural: 'CTA Button Blocks' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Still Have Questions?' },
    { name: 'description', type: 'text', defaultValue: 'Contact us for custom solutions' },
    { name: 'buttonText', type: 'text', defaultValue: 'Contact Us' },
    { name: 'buttonLink', type: 'text', defaultValue: '/contactus' },
  ],
}