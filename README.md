# Rovitatech

The company website for Rovitatech: the app catalogue, a page for each app, and the
privacy policies and terms that the app stores link to.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Every page is
statically generated.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Command         | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Production build             |
| `npm run lint`  | ESLint                       |

## Project structure

```
app/
  layout.tsx              Root layout: font, header, footer, default metadata
  globals.css             Design tokens (@theme), type scale, legal prose styles
  page.tsx                Home
  apps/page.tsx           App catalogue, grouped by category
  apps/[slug]/page.tsx    One page per app, generated from lib/apps.ts
  legal/page.tsx          Legal centre: searchable list of every document
  about/  support/        Studio and support pages
  privacy-policy/<app>/   Privacy policies (URLs are linked from the app stores)
  terms-of-use/<app>/     Terms of use
  sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx
components/
  brand/                  Logo
  layout/                 Site header and footer
  ui/                     Container, buttons, section heading, page hero
  apps/                   App icon, card, platform list, tile illustrations
  home/                   Home page sections
  legal/                  Policy page shell, prose blocks, table of contents, index
lib/
  apps.ts                 The app catalogue: single source of truth
  legal.ts                Legal documents, derived from the catalogue
  studio.ts               Studio capabilities and principles
  site.ts                 Company name, email, navigation, site URL
```

## Common tasks

### Add an app

1. Add an entry to `apps` in `lib/apps.ts` (name, tagline, features, privacy summary,
   platforms, colours, and its legal documents).
2. Add the policy at `app/privacy-policy/<slug>/page.tsx`.

The home page, catalogue, app page, legal centre, footer and sitemap all update from that
one entry.

### Add or update a policy

Policy pages are plain semantic HTML inside `<LegalDocument>`:

```tsx
import { LegalDocument } from '@/components/legal/legal-document'
import { Item, List, P, Section } from '@/components/legal/prose'

export default function ExamplePrivacyPolicy() {
  return (
    <LegalDocument
      app="example"
      kind="privacy"
      title="Privacy Policy"
      subtitle="Example"
      dates={['Effective Date: January 1, 2027']}
    >
      <Section title="1. Information We Collect">
        <P>…</P>
      </Section>
    </LegalDocument>
  )
}
```

The shell adds the breadcrumb, title block, table of contents and typography. When a policy
changes, update its date in the page and the matching `updated` / `updatedLabel` in
`lib/apps.ts`, and check that the app's `privacy` summary still matches.

Policy URLs are submitted to the App Store and Google Play. Do not rename or move them.

### Real app icons and store links

Each app currently shows a generated icon tile. To use the real icon, put it in
`public/apps/` and set `icon: "/apps/<slug>.png"` on the app. To show download buttons on an
app page, set `links: { appStore, googlePlay, macAppStore, website }`.

## Environment

`NEXT_PUBLIC_SITE_URL` sets the canonical URL used in the sitemap and social previews. On
Vercel it is optional: the site falls back to the project's production domain.

## Deployment

Pushing to `main` deploys to Vercel.
