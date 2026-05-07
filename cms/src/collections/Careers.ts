import type { CollectionConfig } from 'payload';

export const Careers: CollectionConfig = {
  slug: 'careers',
  admin: {
    useAsTitle: 'jobTitle',
  },
   access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'jobTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'text', // full-time / part-time
      required: true,
    },
  ],
};