# Eagles Construction Company — Website

A Next.js (App Router) website for Eagles Construction Company — experts in building work,
drawing, interior and general work. It follows the
project structure used in [tapascript](https://github.com/tapascript)'s Next.js repos:
JavaScript, `src/app` with route groups, `src/components`, `src/lib`, Tailwind CSS.
Animations use [Framer Motion](https://motion.dev).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Structure

```
src/
├── app/
│   ├── layout.js               # fonts, SEO metadata, Header/Footer/WhatsApp button
│   ├── page.js                 # landing page
│   ├── not-found.jsx
│   ├── globals.css
│   └── (marketing)/
│       ├── about/page.js
│       ├── services/page.js
│       ├── projects/page.js
│       ├── projects/[slug]/page.js  # one page per project (statically generated)
│       └── contact/page.js
├── components/
│   ├── Header.jsx, Footer.jsx, Logo.jsx, Icon.jsx, WhatsAppButton.jsx
│   ├── PageHeader.jsx, SectionHeading.jsx, ProjectCard.jsx, ContactForm.jsx
│   ├── motion/                 # Reveal, StaggerGroup/Item, ClipReveal, Providers
│   └── sections/               # Hero, Stats, ServicesGrid, Process, Testimonials, …
└── lib/data.js                 # ALL site content: company info, services, projects, prices
```

## Animations

- **Hero** — staggered headline reveal, slow zoom-in photo, scroll parallax, floating “on site now” card, scroll cue
- **Header** — slides in, turns solid on scroll, animated active-link underline, animated mobile menu
- **Sections** — fade/slide reveal on scroll, staggered cards, images that “unveil” upward
- **Stats** — numbers count up when they enter the screen
- **Process** — timeline line draws itself as you scroll
- **Projects** — animated filter pills and cards that re-flow when filtering
- **Testimonials** — auto-rotating with progress bars (pauses on hover)
- **Locations** — infinite marquee strip
- All motion respects the visitor's “reduce motion” setting.

## Before going live

1. Edit `src/lib/data.js` — add the email, office address, RC number and social links (currently blank and hidden).
2. Site photos and video live in `public/site/`. The interior photo and the older sample projects still use
   Unsplash stock images — swap them for real ones when available.
3. Replace the placeholder testimonials and starting prices with real ones.
4. The contact form sends enquiries through [Web3Forms](https://web3forms.com) to your email. Get a free
   access key, copy `.env.example` to `.env.local` and paste it in (also add it in your host's env settings).
5. Deploy to Vercel (`npx vercel`) or any Node host.
