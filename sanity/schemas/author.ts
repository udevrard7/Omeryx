import { defineType, defineField } from "sanity";

export default defineType({
  name: "author",
  title: "Auteur",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom complet",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo de profil",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Biographie",
      type: "text",
      rows: 3,
      description: "Courte biographie de l'auteur",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
