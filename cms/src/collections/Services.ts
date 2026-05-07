import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
    delete:() => true,
    create: () => true,
    update: () => true,
  },


  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "icon",
      type: "select",  
      options: [
        { label: "React", value: "react" },
        { label: "JavaScript", value: "js" },
        { label: "Node", value: "node" },
        { label: "Python", value: "python" },
        { label: "Design", value: "design" },

  { label: "Laravel", value: "laravel" },
  { label: "WordPress", value: "wordpress" },
  { label: "Shopify", value: "shopify" },
  { label: "YouTube Automation", value: "youtube" },
  { label: "Next.js", value: "nextjs" },
  { label: "TypeScript", value: "typescript" },
  { label: "Flutter", value: "flutter" },
  { label: "Docker", value: "docker" },
  { label: "AWS", value: "aws" }

        
      ],
    },
  ],
};