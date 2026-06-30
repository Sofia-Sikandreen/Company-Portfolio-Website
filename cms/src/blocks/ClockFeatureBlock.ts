import type { Block } from 'payload'

export const ClockFeatureBlock: Block = {
  slug: 'clockFeatureBlock',
  labels: { singular: 'Clock Feature Block', plural: 'Clock Feature Blocks' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Future' },
    { name: 'highlightedWord', type: 'text', defaultValue: 'Ready' },
    { name: 'description', type: 'text', defaultValue: 'Systems that scale with growth' },
    { name: 'footerText', type: 'text', defaultValue: 'Always on Time' },
  ],
}
