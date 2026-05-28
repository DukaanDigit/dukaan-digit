# DukanDigit — Digital Business Infrastructure for Pakistan

> Comprehensive software ecosystem designed specifically for Pakistani retailers, wholesalers, and distributors.

---

## Overview

DukanDigit is a full-stack marketing and product website built for Pakistan's leading retail digitization platform. The platform serves 3.5M+ potential retailers with offline-first technology, WhatsApp-integrated reporting, and Pakistan-first localization. This repository contains the public-facing web presence — landing pages, product showcases, industry solutions, and lead capture forms.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Fonts | Hanken Grotesk · Material Symbols Outlined |
| Rendering | SSR + Client Components |
| Deployment | Vercel (recommended) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, features, product showcase, testimonials, CTA |
| `/solutions` | Solutions overview — Business Software, Automation, Analytics |
| `/products` | Product suite — Inventory OS, Cloud POS, WhatsApp Commerce, ERP, AI |
| `/industries` | Industry-specific modules — Grocery, Fashion, Pharmacy, Wholesale & more |
| `/about` | Company story, mission, values, and leadership team |
| `/contact` | Lead capture form, office info, and support channels |
| `/login` | Merchant login portal |

---

## Key Features

- **Animated Hero Canvas** — Interactive dot-grid with mouse-tracking ripple effects scoped to the hero section
- **Custom Cursor** — Blue dot cursor active only within the hero interaction zone
- **Word Cycling** — Animated headline cycling between "Automated", "Digital", and "Connected"
- **Industry Selector** — Tabbed interface for 8 industry verticals with live content switching
- **Offline-First Messaging** — All copy and UI reflects Pakistan's connectivity-first reality
- **Responsive** — Mobile-first grid layouts across all pages
- **Fixed Navbar** — Glass-blur navbar with active route highlighting
- **Contact Form** — Animated submit state with simulated async flow

---

## Project Structure

```
dukandigit/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata
│   ├── globals.css         # Tailwind v4 theme tokens, global styles
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── contact/
│   ├── industries/
│   ├── login/
│   ├── products/
│   └── solutions/
├── components/
│   ├── Navbar.tsx          # Fixed navbar with active link highlighting
│   ├── Footer.tsx          # Site-wide footer
│   ├── HeroCanvas.tsx      # Interactive canvas animation (client)
│   └── WordCycle.tsx       # Animated word switcher (client)
├── public/                 # Static assets
├── next.config.ts          # Image domain allowlist
├── tailwind.config.ts      # Extended theme tokens
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/dukandigit.git
cd dukandigit

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Production build
npm run start    # Serve production build locally
npm run lint     # Run ESLint
```

---

## Environment Variables

Create a `.env.local` file in the root directory for any environment-specific config. This file is **never committed** to version control.

```env
# Example — add your own keys below
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Deployment

The recommended deployment target is **Vercel**:

1. Push the repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Set any required environment variables in the Vercel dashboard

For other platforms (Railway, Render, DigitalOcean), run `npm run build` and serve the `.next` output with `npm run start`.

---

## Design System

All design tokens are defined in `app/globals.css` under the `@theme` block and extended in `tailwind.config.ts`.

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#2563EB` | Brand blue — buttons, links, highlights |
| `--color-text-main` | `#1E293B` | Primary body text |
| `--color-text-muted` | `#64748B` | Secondary / supporting text |
| `--color-border-subtle` | `#E2E8F0` | Card and section borders |
| `--color-surface-alt` | `#F8FAFC` | Section background alternate |
| Font | Hanken Grotesk 100–900 | All text |

> **Note:** Due to Tailwind v4's spacing resolution, named max-width constraints (e.g. `max-w-lg`) use explicit `style={{ maxWidth: "..." }}` values to avoid collision with custom `--spacing-*` tokens.

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | Full |
| Firefox 88+ | Full |
| Safari 14+ | Full |
| Edge 90+ | Full |

The interactive canvas and custom cursor degrade gracefully under `prefers-reduced-motion`.

---

## License

Copyright © 2024 DukanDigit Pvt. Ltd. All rights reserved.

This codebase is proprietary. Unauthorized copying, distribution, or modification is strictly prohibited.

---

*Building the digital backbone of small business — one merchant at a time.*
