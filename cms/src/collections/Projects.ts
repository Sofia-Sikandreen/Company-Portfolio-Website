import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "tag", "createdAt"],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "tag",
      type: "select",
      options: [
        { label: "Web App", value: "Web App" },
        { label: "Automation", value: "Automation" },
        { label: "eCommerce", value: "eCommerce" },
        { label: "Business", value: "Business" },
        { label: "Mobile App", value: "Mobile App" },
      ],
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};