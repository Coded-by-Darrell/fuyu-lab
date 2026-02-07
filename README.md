# Fuyu Lab by CKDigitals

A modern landing page for **Fuyu Lab** — a Discord trading community exclusively for those who sign up on OKX and BingX. A project under 365Icarus.

## Tech Stack

- **Next.js 15** – React framework with App Router
- **TypeScript** – Type safety
- **Tailwind CSS v4** – Utility-first styling
- **Framer Motion** – Animations and transitions

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Build for production     |
| `npm start`    | Run production build     |
| `npm run lint` | Run ESLint               |

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles, Tailwind
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
└── components/
    ├── Navbar.tsx     # Fixed navigation
    ├── Hero.tsx       # Hero section + partners marquee
    ├── WhyJoin.tsx    # Services / benefits cards
    ├── HowToJoin.tsx  # Sign-up steps
    ├── Events.tsx     # Events section
    ├── Merch.tsx      # Merchandise
    └── Footer.tsx     # Footer
```

## Sections

- **Hero** – Headline, CTA buttons, animated gradient background, partners marquee (OKX, Bitget, BingX, Blue Guardian)
- **Services** – Bento-style cards: Live Mentorship, Trading Signals, Exclusive Campaign, Weekly Outlook, Personalized Merch
- **How to Join** – Sign-up flow
- **Events** – Upcoming events
- **Merch** – Community merchandise
- **Footer** – Links and contact

## Design System

- **Primary accent:** `#AFFC6D` (neon green)
- **Backgrounds:** Dark gradients, black sections
- **Effects:** Neon glow borders, glassmorphism, backdrop blur
- **Transition:** Hero gradient fades smoothly to black into Services section

## Build

```bash
npm run build
npm start
```
