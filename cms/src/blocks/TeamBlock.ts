import type { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'teamBlock',
  labels: { singular: 'Team Block', plural: 'Team Blocks' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Meet Our', label: 'Heading' },
    { name: 'highlightedWord', type: 'text', defaultValue: 'Team', label: 'Highlighted Word' },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'People behind the product — designers, engineers & problem solvers.',
      label: 'Header Description',
    },
    // CEO
    { name: 'ceoName', type: 'text', label: 'CEO Name' },
    { name: 'ceoRole', type: 'text', label: 'CEO Role' },
    { name: 'ceoImage', type: 'upload', relationTo: 'media', label: 'CEO Image' },
    { name: 'ceoGithub', type: 'text', label: 'CEO Github URL' },
    { name: 'ceoLinkedin', type: 'text', label: 'CEO LinkedIn URL' },
    { name: 'ceoBio', type: 'text', label: 'CEO Bio' },
    { name: 'ceoQuote', type: 'text', label: 'CEO Quote' },
    // Team Members
    {
      name: 'members',
      type: 'array',
      label: 'Team Members',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
       { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'github', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'bio', type: 'text' },
        {
          name: 'skills',
          type: 'array',
          fields: [{ name: 'skill', type: 'text', required: true }],
        },
      ],
    },
  ],
}