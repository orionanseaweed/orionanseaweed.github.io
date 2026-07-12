import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// Optional text field that tolerates a blank line in frontmatter (which
// YAML parses as null) — treats it the same as "not set".
const optionalText = z
  .string()
  .nullish()
  .transform((v) => v ?? undefined);

/* Blog posts: drop a Markdown file into src/content/blog/ and it appears. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    subtitle: optionalText,
    date: z.coerce.date(),
    author: z.string().default('Kane'),
    tags: z.array(z.string()).default([]),
    /** Post language — powers the blog language filter. */
    lang: z.enum(['vi', 'en']).default('vi'),
    /** Hero image path, e.g. "/img/home-bg.jpg". Optional — set per post. */
    headerImg: optionalText,
    /** Darken hero image 0–1 for readable title. */
    headerMask: z.number().min(0).max(1).optional(),
    /** Show an auto table of contents on wide screens. */
    catalog: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/* Gallery: one entry per photo in src/data/gallery.yaml. */
const gallery = defineCollection({
  loader: file('src/data/gallery.yaml'),
  schema: z.object({
    src: z.string(),
    alt: z.string().optional(),
    title: z.string(),
    caption: z.string().optional(),
    date: z.string().optional(),
    location: z.string().optional(),
    camera: z.string().optional(),
    credit_name: z.string().optional(),
    credit_url: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, gallery };
