# NordFlow Site — SEO Content Factory

Next.js 15 + MDX static site for NordFlow. Deployes til Vercel. Auto-receiver dagligt nye SEO-artikler fra n8n workflow.

## Setup (første gang — 30 min)

```bash
cd C:\Users\vhaug\nordflow-site

# Install dependencies
npm install

# Local dev
npm run dev
# → http://localhost:3000
```

## Deploy til Vercel

```bash
# Install Vercel CLI (hvis du ikke har den)
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

**DNS setup (i Simply.com eller hvor dit domæne er):**
- Peg `nordflow.it.com` A-record til `76.76.21.21`
- Eller CNAME til `cname.vercel-dns.com`

I Vercel dashboard → Projekt → Settings → Domains → Add `nordflow.it.com`.

## Struktur

```
nordflow-site/
├─ app/
│  ├─ layout.tsx              # Global layout + SEO meta
│  ├─ page.tsx                # Homepage (hero + features + artikler)
│  ├─ globals.css             # Tailwind + prose styles
│  └─ artikler/
│     ├─ page.tsx             # Arkiv-side
│     └─ [slug]/page.tsx      # Artikel-side (dynamic)
├─ lib/
│  └─ articles.ts             # Markdown loader
├─ content/
│  └─ artikler/               # 👈 Her lander alle artikler
│     ├─ flere-google-anmeldelser-vvs.md
│     ├─ missede-opkald-koster-vvs.md
│     └─ tilbudsopfolgning-vvs.md
└─ ...
```

## Hvordan n8n tilføjer nye artikler

n8n workflowet `SEO Content Factory` kører dagligt kl 06:00 og:

1. **Exa** søger efter trending VVS-relaterede keywords
2. **Claude Haiku** skriver en 1500-2000 ord artikel baseret på keyword + research
3. **GitHub API** commiter filen til `content/artikler/[slug].md` på `main` branch
4. **Vercel** auto-deployer den nye version inden for 60 sekunder
5. **Google Search Console API** submitter URL for indeksering

## Tilføj artikel manuelt

Lav en ny fil i `content/artikler/` med frontmatter:

```markdown
---
title: "Titel der ranker godt"
date: "2026-04-15"
excerpt: "1-2 linjer der opsummerer artiklen (bruges i meta description og cards)"
keywords: ["vvs seo", "din keyword"]
---

Indhold starter her i Markdown...
```

Commit + push → Vercel auto-deployer.

## Lead capture

Formular-submits fra `/book-demo` (skal tilføjes senere) → Supabase tabel `leads` → n8n workflow → Airtable NordFlow Prospekter.

## Cost

- Vercel: gratis (Pro $20/md når traffic > 100K/md)
- Supabase: gratis
- Claude API: ~50 kr/md ved 30 artikler
- Exa: free tier 1000 searches/md
- Total: ~50 kr/md

## TODO

- [ ] Deploy til Vercel + DNS setup
- [ ] Tilføj lead-capture formular på /book-demo side
- [ ] Integrer Supabase for form-submits
- [ ] Opsæt Google Search Console + submit sitemap
- [ ] Cloudflare Web Analytics (gratis, privacy-friendly)
- [ ] n8n workflow: importér `seo-content-factory.json` fra `n8n-agents/`
- [ ] Setup GitHub repo + Vercel integration
