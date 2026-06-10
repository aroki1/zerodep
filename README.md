# zerodependencies.dev

A minimalist static blog built with Hugo

## Local Development

```bash
hugo server
```

## Production Build

```bash
hugo --gc --minify
```

## Cloudflare Pages

- Build command: `hugo --gc --minify`
- Build output directory: `public`
- Environment variable: `HUGO_VERSION=0.163.0`

## Content

- Blog posts live in `content/posts/*.md`.
- Published posts require `title`, `date`, `description`, and `draft` front matter.
- Projects are listed in `data/projects.yaml`.
- Contact links are listed in `data/contact.yaml`.
