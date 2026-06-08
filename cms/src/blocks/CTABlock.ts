import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'ctaBlock',
  labels: { singular: 'CTA / Contact Block', plural: 'CTA Blocks' },
  fields: [
    { name: 'heading', type: 'text', label: 'Heading', defaultValue: "Let's Build Something" },
    { name: 'email', type: 'text', label: 'Email', defaultValue: 'hello@yourcompany.com' },
    { name: 'responseTime', type: 'text', label: 'Response Time', defaultValue: 'within 24 hours' },
    { name: 'supportText', type: 'text', label: 'Support Text', defaultValue: '24/7 available' },
  ],
}