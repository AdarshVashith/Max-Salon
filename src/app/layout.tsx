import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Poppins, Cormorant_Garamond } from 'next/font/google';
import '@/styles/globals.css';
import { generateOrganizationSchema } from '@/lib/schema';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Maxx Salon | Premium Salon & Spa — Book Appointment',
    template: '%s | Maxx Salon',
  },
  description:
    "Maxx Salon — India's premium salon & spa chain. Expert hair, skin, bridal & nail services. 500+ salons, 12 cities. Book your appointment today.",
  keywords: [
    'maxx salon',
    'premium salon india',
    'hair salon near me',
    'best salon booking',
    'bridal makeup',
    'keratin treatment',
    'spa near me',
  ],
  authors: [{ name: 'Maxx Salon' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://maxxsalon.in',
    siteName: 'Maxx Salon',
    title: 'Maxx Salon | Premium Salon & Spa — Book Appointment',
    description:
      "India's premium salon & spa chain. Expert hair, skin, bridal & nail services across 500+ locations.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxx Salon | Premium Salon & Spa',
    description:
      "India's premium salon & spa chain. Book your appointment today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${cormorant.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-pearl text-charcoal font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
