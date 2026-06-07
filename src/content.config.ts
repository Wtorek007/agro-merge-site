import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const hardware = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hardware" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    specs: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    featured: z.boolean().default(false),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/software" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
    features: z.array(z.string()),
    tier: z.enum(["starter", "pro", "enterprise"]),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    image: z.string().optional(),
    results: z.array(z.string()),
    date: z.coerce.date(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Agro-Merge"),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const consulting = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/consulting" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    stages: z.array(z.string()).optional(),
  }),
});

export const collections = {
  hardware,
  software,
  "case-studies": caseStudies,
  blog,
  consulting,
};
