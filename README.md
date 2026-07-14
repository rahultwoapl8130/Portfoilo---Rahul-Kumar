# My Portfolio — Starter

A Next.js 14 + Tailwind CSS portfolio starter, styled around a developer/terminal
motif: `~/section` path-style labels, monospace accents, a blinking cursor in the
hero, and a code-editor-style status bar in the footer.

## Design tokens

| Token      | Value      | Use                          |
|------------|------------|-------------------------------|
| `base`     | `#0A0D14`  | page background               |
| `surface`  | `#12151F`  | cards / panels                |
| `surface2` | `#1A1E2B`  | elevated surface (status bar) |
| `line`     | `#232837`  | hairline borders               |
| `ink`      | `#E7E9EE`  | primary text                  |
| `muted`    | `#8B92A6`  | secondary text                |
| `accent`   | `#FFB454`  | warm amber — primary accent   |
| `accent2`  | `#6C8CFF`  | cool indigo — secondary accent|

Fonts: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono** (labels, tags).
All loaded via `next/font/google` — no extra setup needed.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What to customize, in order

1. **`app/layout.tsx`** — page title, description, and social preview metadata.
2. **`components/Hero.tsx`** — your name, title, and pitch.
3. **`components/About.tsx`** — your background, in your own words.
4. **`components/Skills.tsx`** — your real skill groups.
5. **`components/Projects.tsx`** — your real projects. Every `github` and `live`
   link must point somewhere real — don't ship a `#` placeholder link.
6. **`components/Experience.tsx`** — your real roles.
7. **`components/Contact.tsx`** — your email and social links.
8. **`components/Navbar.tsx`** — replace `whoami` with your initials/logo.
9. **`public/`** — add `resume.pdf` and `images/og-image.png` (see
   `public/README-ASSETS.txt`), then delete that file.

## Deploying

Push this to a GitHub repo, then import it at https://vercel.com/new — it
will detect Next.js automatically and deploy on every push to `main`.

## Before you share the link

- [ ] No `#` placeholder links remain anywhere
- [ ] Resume button links to a real PDF
- [ ] All project links go to real, working repos/demos
- [ ] Metadata in `app/layout.tsx` is filled in with your real info
- [ ] Tested on mobile width (DevTools responsive mode)
- [ ] Run a Lighthouse/PageSpeed check on the deployed URL
