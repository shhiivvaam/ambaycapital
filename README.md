# Ambay Capital — Next.js Website

A production-ready financial services website built with:
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** (animations)
- **PostCSS + Autoprefixer**

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
ambay-capital/
├── app/
│   ├── globals.css          # Global styles, Tailwind imports, custom CSS
│   ├── layout.tsx           # Root layout with metadata/SEO
│   └── page.tsx             # Home page — composes all sections
├── components/
│   ├── Navbar.tsx           # Sticky nav with scroll effect + mobile menu
│   ├── Footer.tsx           # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with floating metric cards
│   │   ├── StatsStrip.tsx   # Trust numbers strip
│   │   ├── Services.tsx     # 8-service grid with hover effects
│   │   ├── WhyUs.tsx        # Why choose us with visual cards
│   │   ├── Calculators.tsx  # Interactive SIP / Retirement / Insurance calculators
│   │   ├── Testimonials.tsx # Client testimonial cards
│   │   ├── Partners.tsx     # Partner brand logos strip
│   │   ├── CtaBanner.tsx    # Mid-page CTA
│   │   └── Contact.tsx      # Lead capture form
│   └── ui/
│       ├── Buttons.tsx      # PrimaryButton + SecondaryButton
│       ├── SectionTag.tsx   # Gold tag with line (reusable)
│       └── WhatsAppFab.tsx  # Floating WhatsApp button
├── lib/
│   ├── constants.ts         # All content data (stats, services, testimonials…)
│   └── calculators.ts       # Pure calculation functions
├── tailwind.config.ts       # Custom colors, fonts, animations
├── postcss.config.mjs       # PostCSS with Tailwind + Autoprefixer
├── next.config.ts
└── tsconfig.json
```

## Customisation

### Update contact details
Edit `/lib/constants.ts`:
```ts
export const WHATSAPP_NUMBER = "91XXXXXXXXXX";   // Your WhatsApp number
export const CONTACT_EMAIL   = "hello@ambaycapital.in";
export const CONTACT_PHONE   = "+91 XXXXX XXXXX";
export const CONTACT_ADDRESS = "Your City, India";
```

### Update stats
```ts
export const STATS = [
  { number: "500", suffix: "+", label: "Families Protected" },
  // ...
];
```

### Connect the contact form
In `components/sections/Contact.tsx`, replace the `handleSubmit` function with your API call:
```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
  setSubmitted(true);
};
```

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Self-hosted
```bash
npm run build
npm start
```
