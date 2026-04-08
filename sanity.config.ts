import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import post from "./schemas/post";
import author from "./schemas/author";
import category from "./schemas/category";

export default defineConfig({
  name: "omeryx-blog",
  title: "OMERYX Group — Blog",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: [post, author, category],
  },
});
