import type { Block } from 'payload'

export const CmsClockBlock: Block = {
  slug: 'cmsClockBlock',
  labels: { singular: 'CMS + Clock Block', plural: 'CMS + Clock Blocks' },
  fields: [
    {
      name: 'cmsHeading',
      type: 'text',
      defaultValue: 'Seamless',
      label: 'CMS Heading',
    },
    {
      name: 'cmsHighlightedWord',
      type: 'text',
      defaultValue: 'CMS',
      label: 'CMS Highlighted Word',
    },
    {
      name: 'cmsHeadingSuffix',
      type: 'text',
      defaultValue: 'Launch',
      label: 'CMS Heading Suffix',
    },
    {
      name: 'cmsDescription',
      type: 'text',
      defaultValue: 'Update content without code changes.',
      label: 'CMS Description',
    },
    {
      name: 'listItems',
      type: 'array',
      label: 'CMS List Items',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'date', type: 'text', required: true },
      ],
    },
    {
      name: 'clockHeading',
      type: 'text',
      defaultValue: 'Future',
      label: 'Clock Heading',
    },
    {
      name: 'clockHighlightedWord',
      type: 'text',
      defaultValue: 'Ready',
      label: 'Clock Highlighted Word',
    },
    {
      name: 'clockDescription',
      type: 'text',
      defaultValue: 'Systems that scale with growth',
      label: 'Clock Description',
    },
    {
      name: 'clockFooterText',
      type: 'text',
      defaultValue: 'Always on Time',
      label: 'Clock Footer Text',
    },
  ],
}