import type { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'aboutBlock',
  labels: { singular: 'About / Footer Block', plural: 'About Blocks' },
  fields: [
    { name: 'companyName', type: 'text', label: 'Company Name', defaultValue: 'Hibit' },
    { name: 'description', type: 'textarea', label: 'Company Description' },
    { name: 'copyrightText', type: 'text', label: 'Copyright Text', defaultValue: '© 2024 Your Company' },
    { name: 'facebookUrl', type: 'text', label: 'Facebook URL', defaultValue: '#' },
    { name: 'twitterUrl', type: 'text', label: 'Twitter URL', defaultValue: '#' },
    { name: 'linkedinUrl', type: 'text', label: 'LinkedIn URL', defaultValue: '#' },
    { name: 'instagramUrl', type: 'text', label: 'Instagram URL', defaultValue: '#' },
  ],
}