# +legal_ Site · Project context for Claude

This file gives Claude (Cowork mode and Claude Code) the context it needs to work on this project. Read it first.

## Project summary

Next.js 15 + TypeScript + Tailwind 4 site for **+legal_**, a B2B contract management platform. The site is the first conversion surface for the Early Access programme. It echoes the visual language of the sister product, **somalegal.tech** (the SOMA arbitration chamber), while keeping the +legal_ brand identity.

- **Brand naming:** always `+legal_` (lowercase l, with underscore). Never `MaisLegal`, `Mais Legal`, `+Legal`. The wordmark is always rendered as the PNG logo, never as styled text.
- **Companion brand:** `SOMA` is +legal_'s integrated mediation and arbitration chamber. First mention on each page should be "nossa câmara de mediação e arbitragem, SOMA". External site at https://somalegal.tech.
- **Language:** Brazilian Portuguese (BR-PT). Never European Portuguese conjugations.

## Visual system

**Fonts (loaded via next/font in `src/app/layout.tsx`):**
- `Barlow` — titles, display (font-title)
- `Work Sans` — body (font-body, default)
- `JetBrains Mono` — eyebrows, code, labels (font-mono)

**Colours (Tailwind tokens in `tailwind.config.ts`):**
- `brand` `#1E3A5F` (azul) — primary, replaces SOMA's amber-700 as the accent
- `brand-tint` `#EEF2F8` — light backgrounds
- `peach` / `peach-dark` — secondary accent on dark surfaces
- `soma` `#B8614E` — exclusive to SOMA references
- Neutrals: `bg-white`, `bg-stone-50`, `bg-zinc-900` (dark CTA bands)
- Semantic: `bg-rose-50` for risks/warnings, `bg-emerald-50` for outcomes

**Section rhythm (echoes SOMA):**
- White → stone-50 → white → brand-tint → white → zinc-900 (CTA close)
- Each section starts with `eyebrow` (uppercase brand colour) → `h-soma` H2 (Barlow tracking-tighter) → body text

**Reusable layout classes (in `globals.css`):**
- `.container-soma` — `max-w-7xl px-4 md:px-20`
- `.section-soma` — `py-12 md:py-20`
- `.eyebrow` / `.eyebrow-light` — uppercase tracking-widest
- `.h-soma` / `.h-soma-lg` — Barlow bold tracking-tighter
- `.card-soma` — `rounded-xl border border-stone-200 bg-white p-6`
- `.card-highlight` — `bg-brand-tint` with `border-l-4 border-brand`
- `.card-warn` — `bg-rose-50` with `border-l-4 border-red-600`
- `.pill` — neutral rounded-full tag

**Icons:** Lucide React (`lucide-react`). Always outline (default). `strokeWidth={1.5}` for feature icons, default for inline.

## Voice rules (critical, do not violate)

**Single source of truth:** `../Knowledge/ml-voz-e-tom.md` (in the parent workspace, one folder up from this site repo).

That file is the canonical voice guide for +legal_. It contains all patterns (P-A to P-N), anti-patterns, banlists, vocab tables, persona frames, eixos de tom, registros, and mensagens-núcleo. Read it before writing or rewriting any copy on this site. Do not duplicate its rules in this file.

If you cannot read the parent workspace path (some tools are scoped to the site repo only), ask Felipe to share the canon content directly. **Do not fall back to memorised voice rules** — they will drift from the canon.

Quick reminders that apply to every line of copy on this site (the canon has the full reasoning):
- `+legal_` always lowercase l with underscore. Wordmark is the PNG, never styled text.
- BR-PT only: `você`, `para`, `a gente`. Never `tu`, `pra`, conjugações lusitanas.
- No em-dashes, en-dashes, or hyphens as punctuation. Use commas, full stops, or restructure.
- No exclamation marks in professional copy.
- Always check the canon's "Anti-patterns" sub-section before applying patterns mechanically.

## Project structure

```
maislegal-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (fonts, header, footer)
│   │   ├── page.tsx             # Home
│   │   ├── globals.css          # Design tokens + base styles
│   │   ├── early-access/        # Conversion landing
│   │   ├── como-funciona/       # 3 steps + lifecycle
│   │   ├── funcionalidades/     # 6 product blocks
│   │   ├── integracoes/         # Partners + roadmap
│   │   ├── para-operacoes/      # Persona landing · Diretora
│   │   ├── para-pmes/           # Persona landing · Sócia-fundadora
│   │   ├── para-advogados/      # Persona landing · Advogado
│   │   ├── resolucao-de-disputas/  # SOMA chamber integration
│   │   ├── precos/              # Pricing
│   │   ├── sobre/               # Founders + mission
│   │   ├── blog/                # Blog hub + [slug]
│   │   ├── privacidade/         # Privacy policy stub
│   │   └── termos/              # Terms of use stub
│   └── components/
│       ├── base/                # Header, Footer, Logo, Button, Card, CtaDark
│       ├── home/                # Home page sections
│       └── early-access/        # (reserved for future)
├── public/
│   └── logos/                   # maislegal-logo-black.png, maislegal-logo-white.png
├── docs/
│   ├── sitemap.md               # Full sitemap and page-by-page spec
│   └── knowledge/               # Stub pointers to ../Knowledge/ (single source of truth lives in the parent workspace)
└── tailwind.config.ts           # Brand tokens
```

## Approved copy is in the workspace Knowledge MDs

Before writing or rewriting any copy on a page, read these from the **parent workspace** (one folder up from this site repo). The workspace `Knowledge/` directory is the single source of truth for everything below; the site no longer keeps its own copy of these files.

- `../Knowledge/ml-voz-e-tom.md` — **voice rules, single source of truth.** Read this before writing or revising any copy.
- `../Knowledge/ml-site.md` — full approved copy by section
- `../Knowledge/ml-personas.md` — persona-specific copy, scenarios
- `../Knowledge/ml-posicionamento.md` — positioning, mensagens-núcleo
- `../Knowledge/ml-produto.md` — product features, pricing
- `docs/sitemap.md` — page-by-page structure with copy âncora (this one lives in the site repo because it's site-specific)

If you cannot reach the parent workspace path from your tool scope, ask Felipe to share the canon content directly. Do not fall back to memorised rules — they will drift.

## Open decisions (3 are blocking)

Before pushing the site to production, the following need to be confirmed:

**Blocking:**
1. Domain: maislegal.tech (current) or new domain?
2. Early Access: real waitlist, or product is live?
3. Typography: Barlow + Work Sans (current, matches SOMA) is the intended stack?

**Important:**
4. Stat "86% economia": still pending verifiable source (currently not used on site)
5. Stat "23 dias → 6 dias": rotular como ilustrativo (current approach)
6. Pricing exact for escritórios: R$250 firm, but discount structure pending
7. Premium add-on: percent discount and template list pending

See `docs/knowledge/ml-decisoes-abertas.md` for the complete list.

## Working with this project

**Run locally:**
```bash
npm install     # first time only
npm run dev     # starts http://localhost:3000
```

**Conventions:**
- Server components by default, `"use client"` only when needed (Header has it for state)
- Page components in `src/app/<route>/page.tsx`
- Reusable sections in `src/components/<area>/`
- All copy hardcoded in components for now — i18n is not in scope
- Forms (Early Access) are visual only, no backend wired yet

**Common follow-up tasks:**
- Wire Early Access form to a backend or form service
- Build out the 4 individual blog post pages with full copy from `docs/knowledge/`
- Add the platform mockup to /como-funciona and /para-operacoes (currently only on Home)
- Build the SVG diagram for the contract lifecycle
- Add Open Graph images
- Set up analytics

## Sister site

The visual language deliberately echoes **https://somalegal.tech** (the SOMA chamber site). When in doubt about pattern (section padding, card style, eyebrow rhythm, dark CTA band), check what SOMA does and mirror it with the +legal_ brand colours.

The single visual swap from SOMA: their `amber-700` accent becomes our `brand` (`#1E3A5F`).
