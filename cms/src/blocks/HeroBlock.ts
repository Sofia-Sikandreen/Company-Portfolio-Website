import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: { singular: 'Hero Block', plural: 'Hero Blocks' },
  fields: [
    {
      name: 'tagText',
      type: 'text',
      label: 'Tag Text (top badge)',
      defaultValue: 'IT Solutions That Empower Businesses',
    },
    {
      name: 'headingLine1',
      type: 'text',
      label: 'Heading Line 1 (white)',
      defaultValue: 'We Build Powerful',
    },
    {
      name: 'headingLine2',
      type: 'text',
      label: 'Heading Line 2 (gradient)',
      defaultValue: 'Digital Solutions',
    },
    {
      name: 'headingLine3',
      type: 'text',
      label: 'Heading Line 3 (white)',
      defaultValue: 'That Drive Growth',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'We are a full-service IT company delivering modern web solutions, automation, and eCommerce services to help businesses scale and succeed in the digital world.',
    },
    {
      name: 'primaryButtonText',
      type: 'text',
      label: 'Primary Button Text',
      defaultValue: 'Explore Services',
    },
    {
      name: 'primaryButtonLink',
      type: 'text',
      label: 'Primary Button Link',
      defaultValue: '/ser',
    },
    {
      name: 'secondaryButtonText',
      type: 'text',
      label: 'Secondary Button Text',
      defaultValue: 'View Our Work',
    },
    {
      name: 'secondaryButtonLink',
      type: 'text',
      label: 'Secondary Button Link',
      defaultValue: '#works',
    },
  ],
}