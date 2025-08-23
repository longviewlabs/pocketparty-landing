Pocket Party – Landing Page
===========================

Production-ready Next.js landing page for Pocket Party.

Stack
-----
- Next.js (App Router)
- TypeScript
- Tailwind CSS (v4)
- shadcn/ui (Button, Card)
- lucide-react icons

Getting Started (dev)
---------------------

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

Build & Start (prod)
--------------------

```bash
npm run build
npm start
```

Project Structure
-----------------
- `src/app/page.tsx`: Home landing page
- `src/app/layout.tsx`: Global layout and metadata
- `src/components/`: Reusable UI (StoreBadges, Pill, Stat, HowStep, Feature, GameTile)
- `src/app/(static)/*`: Stub subpages – `/press`, `/creators`, `/about`, `/privacy`, `/contact`

Links & Placeholders
--------------------
- App Store and Google Play links are placeholders with rel="nofollow" in `StoreBadges`.
- Add real store URLs and screenshots later.

Notes
-----
- Lighthouse targets: Performance, Best Practices, SEO ≥ 90
- Mobile-first with responsive sections and `max-w-6xl` container
- Images use remote placeholders; see `next.config.ts` for allowed domains
