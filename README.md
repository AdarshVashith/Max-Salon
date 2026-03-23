# Maxx Salon — Premium Salon & Spa Website

> **Where Beauty Meets Artistry** — India's premium salon & spa chain digital experience.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

## 🏗 Tech Stack

| Category        | Technology                          |
| --------------- | ----------------------------------- |
| **Framework**   | Next.js 14 (App Router)             |
| **Styling**     | TailwindCSS v3 + CSS Variables      |
| **Animation**   | Framer Motion v11                    |
| **State**       | Zustand (global) + TanStack Query   |
| **Forms**       | React Hook Form + Zod               |
| **Database**    | PostgreSQL via Prisma ORM            |
| **Auth**        | NextAuth.js v5                       |
| **CMS**         | Sanity v3                            |
| **Payments**    | Razorpay                             |
| **SMS/WhatsApp**| Twilio + Meta WhatsApp Business API  |
| **Analytics**   | Mixpanel + GA4                       |
| **Hosting**     | Vercel (Edge + ISR)                  |
| **Image CDN**   | Cloudinary                           |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Homepage, About, Services, Blog, etc.
│   ├── (booking)/            # 3-step booking flow
│   │   └── book/
│   │       ├── page.tsx      # Step 1: Service Selection
│   │       ├── slot/         # Step 2: Date/Time/Stylist
│   │       └── confirm/      # Step 3: Details + Payment
│   ├── (locations)/          # SEO city/area pages
│   │   └── [city]/[area]/
│   ├── api/
│   │   ├── ai-recommendations/
│   │   └── whatsapp-webhook/
│   └── layout.tsx            # Root layout with fonts + metadata
├── components/
│   ├── design-system/        # Button, Badge, Card, Input, Skeleton, Spinner
│   ├── layout/               # Navbar, Footer, Logo, StickyBookingBar
│   └── home/                 # All 11 homepage sections
├── lib/
│   ├── animations.ts         # Shared Framer Motion variants
│   ├── schema.ts             # JSON-LD schema generators
│   └── utils.ts              # cn(), formatPrice(), formatCountdown()
└── styles/
    └── globals.css            # CSS variables + base styles + animations
```

## 🎨 Design System

### Color Palette

| Token           | Value     | Usage                    |
| --------------- | --------- | ------------------------ |
| `charcoal`      | `#1A1A1A` | Primary bg, headings     |
| `gold`          | `#D4AF37` | CTAs, accents, hover     |
| `gold-light`    | `#E8C84A` | Gold hover state         |
| `gold-muted`    | `#B8972E` | Gold active/press        |
| `pearl`         | `#F9F9F9` | Page backgrounds         |
| `pearl-warm`    | `#F5F0E8` | Card backgrounds         |
| `smoke`         | `#E8E0D5` | Borders, dividers        |
| `ash`           | `#8A8275` | Secondary text           |
| `ivory`         | `#FDFAF5` | Input backgrounds        |

### Typography

- **Display**: Playfair Display (400, 700, 900)
- **Body**: Poppins (300, 400, 500, 600, 700)
- **Accent**: Cormorant Garamond (300, italic)

## 🔧 Environment Variables

```env
# Database
DATABASE_URL=postgresql://...

# Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# WhatsApp
WHATSAPP_VERIFY_TOKEN=maxx_salon_verify
META_WHATSAPP_TOKEN=
META_WHATSAPP_PHONE_NUMBER_ID=

# Twilio
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production

# Analytics
NEXT_PUBLIC_MIXPANEL_TOKEN=
NEXT_PUBLIC_GA4_ID=

# AI
ANTHROPIC_API_KEY=

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

# Algolia
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to `main`

### Key Features

- ✅ 11-section homepage with luxury animations
- ✅ 3-step booking flow with service selection
- ✅ AI-powered service recommendations
- ✅ SEO-optimized city/area location pages
- ✅ WhatsApp CRM automation webhook
- ✅ Complete design system (Button, Badge, Card, Input, Skeleton)
- ✅ Responsive across all breakpoints
- ✅ Accessibility: WCAG 2.1 AA compliant
- ✅ JSON-LD structured data for SEO
- ✅ Framer Motion animations throughout

## 📄 License

© 2025 Maxx Salon. All rights reserved.

---

**Made in India 🇮🇳**
