import type { Block } from 'payload'

export const AboutStatsBlock: Block = {
  slug: 'aboutStatsBlock',
  labels: { singular: 'About Stats Block', plural: 'About Stats Blocks' },
  fields: [
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      maxRows: 6,
      defaultValue: [
        { icon: 'TrendingUp', value: '50+', label: 'Projects Completed' },
        { icon: 'Users', value: '30+', label: 'Happy Clients' },
        { icon: 'CheckCircle', value: '99%', label: 'Satisfaction' },
      ],
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          defaultValue: 'TrendingUp',
          options: [
            { label: 'Trending Up', value: 'TrendingUp' },
            { label: 'Users', value: 'Users' },
            { label: 'Check Circle', value: 'CheckCircle' },
            { label: 'Award', value: 'Award' },
            { label: 'Clock', value: 'Clock' },
            { label: 'Star', value: 'Star' },
          ],
        },
        { name: 'value', type: 'text', required: true, label: 'Value (e.g. 50+)' },
        { name: 'label', type: 'text', required: true, label: 'Label' },
      ],
    },
  ],
}