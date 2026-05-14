import type { CollectionConfig } from "payload";

export const Applications: CollectionConfig = {
  slug: "applications",

  access: {
  create: () => true,
  read: () => true,
  update: () => true,
  delete: () => true,
},
  admin: {
    useAsTitle: "fullName", // ✅ shows applicant name in the list
    defaultColumns: ["fullName", "email", "jobTitle", "cvUrl", "createdAt"],
  },

  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "jobTitle",
      type: "text",
    },
{
  name: "cvUrl",
  type: "text",
  required: true,
     admin: {
    readOnly: true,
  },
}
  ],
};