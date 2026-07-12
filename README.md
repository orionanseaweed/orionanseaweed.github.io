# Tung's Archive

Personal website of Hoang Xuan Tung — built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview the production build
```

## How to update content

| I want to…                | Do this                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| **Add a blog post**       | Drop a Markdown file in `src/content/blog/`. See any existing post for the frontmatter fields (`title`, `date`, `tags`, `catalog`…). |
| **Add a gallery photo**   | Put the image in `public/img/gallery/`, then add a block to `src/data/gallery.yaml`. |
| **Change title / socials**| Edit `src/consts.ts` (one file for site title, nav, and social links).  |
| **Change global styling** | Edit `src/styles/global.css` (colors, fonts, typography live in `@theme`). |

## Structure

```
public/            Static assets (images, icons, sw.js, manifest) — served as-is
src/
  consts.ts        Site title, nav, social links
  content/blog/    Blog posts (Markdown)
  data/gallery.yaml  Gallery photos
  components/      Nav, Footer, Hero, BaseHead, SocialLinks
  layouts/         BaseLayout, PostLayout
  pages/           Routes (index, blog, gallery, contact, 404…)
  styles/global.css  Design tokens + base styles
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages.

> **One-time setup:** in the repo's **Settings → Pages**, set **Source** to
> **GitHub Actions** (instead of "Deploy from a branch").

---

Originally based on a template — thanks to Meswx and the [Hux Blog](https://github.com/Huxpro/huxpro.github.io) theme it grew from.
