import type { Block } from 'payload'

export const AboutTextBlock: Block = {
  slug: 'aboutTextBlock',
  labels: { singular: 'About Text Block', plural: 'About Text Blocks' },
  fields: [
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Paragraphs',
      minRows: 1,
      defaultValue: [
        { text: "We believe great software isn't just built — it's crafted with purpose and precision. Every detail matters, from how an interface feels to how efficiently it performs." },
        { text: 'Founded with a passion for innovation, we focus on delivering solutions that are not only visually strong but also highly functional and scalable.' },
      ],
      fields: [{ name: 'text', type: 'textarea', required: true, label: 'Paragraph' }],
    },
  ],
}