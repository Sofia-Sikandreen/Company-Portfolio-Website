import type { Block } from 'payload'

export const TechGridBlock: Block = {
  slug: 'techGridBlock',
  labels: { singular: 'Tech Grid Block', plural: 'Tech Grid Blocks' },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Technologies',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Name' },
        {
          name: 'icon',
          type: 'text',
          required: true,
          label: 'Icon Key',
          admin: {
            description: 'js, react, vue, nextjs, typescript, php, laravel, python, django, node, figma, sketch, wordpress, drupal, jira, tailwind, aws, flutter, docker, ai, shopify, youtube, cloud',
          },
        },
      ],
    },
  ],
}