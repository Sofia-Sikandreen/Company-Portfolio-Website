import type { Block } from 'payload'

export const PlatformBlock: Block = {
  slug: 'platformBlock',
  labels: { singular: 'Platform Block', plural: 'Platform Blocks' },
  fields: [
    { name: 'headingLine1', type: 'text', defaultValue: 'Platform flexibility.' },
    { name: 'headingLine2', type: 'text', defaultValue: 'Design consistency.' },
    { name: 'description', type: 'text', defaultValue: 'Consistent design across all platforms with scalable architecture.' },
    {
      name: 'platforms',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'icon', type: 'text', required: true, admin: { description: 'aws, nextjs, react, flutter, docker, ai, wordpress, shopify, cloud' } },
      ],
    },
  ],
}