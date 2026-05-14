import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  access: {
    read: () => true,
    create: () => true,
  },

  upload: {
    disableLocalStorage: true, // IMPORTANT for cloud setup
  },

  fields: [
    {
      name: "url",
      type: "text",
    },
  ],
};