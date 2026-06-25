import type { Block } from 'payload'
export const CTABannerBlock: Block = {
  slug: 'ctaBannerBlock',
  labels: { singular: 'CTA Banner Block', plural: 'CTA Banner Blocks' },
  fields: [
    { name: 'heading', type: 'text', label: 'Heading', defaultValue: "Let's Build Something Great Together" },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'We collaborate with startups and enterprises to turn ideas into scalable digital products.',
    },
  ],
}