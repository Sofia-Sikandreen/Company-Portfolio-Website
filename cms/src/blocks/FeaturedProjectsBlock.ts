import type { Block } from 'payload'

export const FeaturedProjectsBlock: Block = {
  slug: 'featuredProjectsBlock',
  labels: { singular: 'Featured Projects Block', plural: 'Featured Projects Blocks' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Featured Projects',
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Sub Heading',
    },
    {
      name: 'projects',
      type: 'array',
      label: 'Projects',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Project Title',
        },
        {
          name: 'tag',
          type: 'select',
          label: 'Tag',
          options: [
            { label: 'Web App', value: 'Web App' },
            { label: 'Automation', value: 'Automation' },
            { label: 'eCommerce', value: 'eCommerce' },
            { label: 'Business', value: 'Business' },
            { label: 'Mobile App', value: 'Mobile App' },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media' as any,
          label: 'Project Image',
        },
      ],
    },
  ],
}