import type { Block } from 'payload'

export const CmsFeatureBlock: Block = {
  slug: 'cmsFeatureBlock',
  labels: { singular: 'CMS Feature Block', plural: 'CMS Feature Blocks' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Seamless' },
    { name: 'highlightedWord', type: 'text', defaultValue: 'CMS' },
    { name: 'headingSuffix', type: 'text', defaultValue: 'Launch' },
    { name: 'description', type: 'text', defaultValue: 'Update content without code changes.' },
    {
      name: 'listItems',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'date', type: 'text', required: true },
      ],
    },
  ],
}