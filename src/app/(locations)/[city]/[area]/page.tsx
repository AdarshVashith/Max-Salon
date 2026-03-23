import type { Metadata } from 'next';
import Link from 'next/link';
import { generateBeautySalonSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { Navbar, Footer } from '@/components/layout';
import { Button, Badge } from '@/components/design-system';

interface CityAreaPageProps {
  params: { city: string; area: string };
}

const salonData: Record<string, Record<string, {
  name: string;
  fullAddress: string;
  phone: string;
  lat: number;
  lng: number;
  rating: number;
  reviewCount: number;
  popularServices: string[];
  nearby: string[];
  openingSince: string;
  teamHighlight: string;
}>> = {
  delhi: {
    'connaught-place': {
      name: 'Connaught Place',
      fullAddress: 'Block A, Inner Circle, Connaught Place, New Delhi 110001',
      phone: '+91-11-40001234',
      lat: 28.6315,
      lng: 77.2167,
      rating: 4.9,
      reviewCount: 1247,
      popularServices: [
        'Premium Haircut & Styling',
        'Keratin Smoothing Treatment',
        'Maxx Bridal Transformation',
        'Hydra Facial Glow',
      ],
      nearby: ['Select Citywalk', 'CP Metro Station', 'Janpath'],
      openingSince: '2018',
      teamHighlight: 'Led by Award-winning stylist Meera Kapoor',
    },
  },
};

function getCityLabel(slug: string): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

function getAreaLabel(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function generateMetadata({
  params,
}: CityAreaPageProps): Promise<Metadata> {
  const cityLabel = getCityLabel(params.city);
  const areaLabel = getAreaLabel(params.area);

  return {
    title: `Maxx Salon ${areaLabel}, ${cityLabel} | Hair & Spa Booking`,
    description: `Visit Maxx Salon in ${areaLabel}, ${cityLabel}. Expert stylists, premium hair, skin, and bridal services. Book online or call now.`,
    openGraph: {
      title: `Maxx Salon ${areaLabel}, ${cityLabel}`,
      description: `Premium salon & spa in ${areaLabel}, ${cityLabel}. Book your appointment today.`,
    },
  };
}

const faqs = [
  {
    question: 'What are the working hours?',
    answer:
      'Maxx Salon is open Monday–Saturday from 10 AM to 9 PM, and Sunday from 11 AM to 8 PM.',
  },
  {
    question: 'Do I need to book in advance?',
    answer:
      'Walk-ins are welcome, but we recommend booking online to guarantee your preferred time slot and stylist.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept UPI, credit/debit cards, net banking, popular wallets, and cash payments.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Parking availability varies by location. Most of our salons are located near metro stations and have nearby paid parking facilities.',
  },
  {
    question: 'Can I cancel or reschedule my appointment?',
    answer:
      'Yes! Free cancellation is available up to 4 hours before your appointment. You can reschedule via WhatsApp, phone, or our website.',
  },
];

export default function CityAreaPage({ params }: CityAreaPageProps) {
  const cityLabel = getCityLabel(params.city);
  const areaLabel = getAreaLabel(params.area);
  const data = salonData[params.city]?.[params.area];

  const salonName = data?.name || areaLabel;
  const rating = data?.rating || 4.8;
  const reviewCount = data?.reviewCount || 200;
  const address = data?.fullAddress || `${areaLabel}, ${cityLabel}`;
  const phone = data?.phone || '+91-9999999999';

  const beautySalonSchema = generateBeautySalonSchema({
    name: salonName,
    streetAddress: address,
    area: areaLabel,
    city: cityLabel,
    postalCode: '110001',
    lat: data?.lat || 28.6,
    lng: data?.lng || 77.2,
    phone,
    ratingValue: rating,
    reviewCount,
    mapsUrl: `https://maps.google.com/?q=Maxx+Salon+${areaLabel}+${cityLabel}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://maxxsalon.in' },
    { name: cityLabel, url: `https://maxxsalon.in/${params.city}` },
    { name: areaLabel, url: `https://maxxsalon.in/${params.city}/${params.area}` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Schema Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySalonSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Banner */}
        <section className="bg-charcoal pt-28 pb-16">
          <div className="section-container">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs font-body text-pearl/40">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href={`/salons`}
                    className="hover:text-gold transition-colors"
                  >
                    Locations
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <span className="text-gold">{cityLabel}</span>
                </li>
                <li>/</li>
                <li>
                  <span className="text-pearl/70">{areaLabel}</span>
                </li>
              </ol>
            </nav>

            <h1 className="font-display font-black text-3xl md:text-5xl text-pearl">
              Maxx Salon{' '}
              <span className="text-gold">{salonName}</span>
            </h1>
            <p className="font-body text-base text-pearl/60 mt-3 max-w-2xl">
              Experience premium salon & spa services at Maxx Salon{' '}
              {salonName}, {cityLabel}. Expert stylists, luxurious
              treatments, and personalized beauty solutions — all in the
              heart of {areaLabel}.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-body text-sm text-pearl/70">
                  {rating} ({reviewCount.toLocaleString()} reviews)
                </span>
              </div>
              <Badge variant="gold">Open Now</Badge>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/book">
                <Button variant="primary" size="lg">
                  Book This Salon
                </Button>
              </Link>
              <a
                href={`https://maps.google.com/?q=Maxx+Salon+${areaLabel}+${cityLabel}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  📍 Get Directions
                </Button>
              </a>
              <a href={`tel:${phone}`}>
                <Button variant="outline" size="lg">
                  📞 Call Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-pearl">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* About */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-display font-bold text-2xl text-charcoal">
                  About Maxx Salon {salonName}
                </h2>
                <div className="prose prose-sm text-ash font-body leading-relaxed space-y-4">
                  <p>
                    Located in the vibrant heart of {areaLabel},{' '}
                    {cityLabel}, Maxx Salon {salonName} brings
                    premium beauty and grooming services to one of the
                    city&apos;s most popular destinations
                    {data?.nearby
                      ? ` — just steps from ${data.nearby.join(', ')}`
                      : ''}
                    .
                  </p>
                  <p>
                    Since{' '}
                    {data?.openingSince || '2020'}, our{' '}
                    {salonName} salon has been a trusted destination for
                    clients seeking expert hair styling, advanced skin
                    treatments, bridal packages, and relaxing body therapies.{' '}
                    {data?.teamHighlight || 'Our team of certified stylists brings years of premium salon experience.'}
                  </p>
                  <p>
                    Whether you&apos;re preparing for a special occasion,
                    looking for a fresh new style, or simply need a
                    relaxing escape from your busy schedule, Maxx Salon{' '}
                    {salonName} delivers results that exceed
                    expectations.
                  </p>
                  <p>
                    We exclusively use premium international brands and
                    follow the highest hygiene standards — because at Maxx,
                    your comfort and safety are as important as your
                    beauty transformation.
                  </p>
                </div>

                {/* Popular Services */}
                <div className="mt-8">
                  <h3 className="font-display font-bold text-xl text-charcoal mb-4">
                    Popular Services at This Location
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(
                      data?.popularServices || [
                        'Premium Haircut & Styling',
                        'Hydra Facial Glow',
                        'Keratin Treatment',
                        'Bridal Package',
                      ]
                    ).map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 bg-ivory rounded-lg p-3 border border-smoke"
                      >
                        <span className="text-gold">✦</span>
                        <span className="font-body text-sm text-charcoal">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info Card */}
                <div className="bg-ivory border border-smoke rounded-[20px] p-6">
                  <h3 className="font-display font-bold text-lg text-charcoal mb-4">
                    Salon Info
                  </h3>
                  <div className="space-y-3 text-sm text-ash font-body">
                    <p className="flex items-start gap-2">
                      <span className="shrink-0">📍</span>
                      <span>{address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📞</span>
                      <a
                        href={`tel:${phone}`}
                        className="text-gold hover:underline"
                      >
                        {phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🕐</span>
                      <span>Mon–Sat: 10 AM – 9 PM</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🕐</span>
                      <span>Sun: 11 AM – 8 PM</span>
                    </p>
                  </div>
                  <Link href="/book" className="block mt-4">
                    <Button variant="primary" fullWidth>
                      Book Appointment
                    </Button>
                  </Link>
                </div>

                {/* City Offer */}
                <div className="bg-charcoal rounded-[20px] p-6 text-pearl">
                  <Badge variant="signature" className="mb-3">
                    {cityLabel} EXCLUSIVE
                  </Badge>
                  <h4 className="font-display font-bold text-lg mt-2">
                    First Visit Offer
                  </h4>
                  <p className="text-sm text-pearl/60 mt-1">
                    Get 20% off your first service at Maxx {salonName}.
                    Use code <span className="text-gold font-semibold">MAXX{cityLabel.toUpperCase()}</span>
                  </p>
                  <Link href="/book" className="block mt-4">
                    <Button variant="primary" fullWidth size="sm">
                      Claim Offer
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-16">
              <h2 className="font-display font-bold text-2xl text-charcoal mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 max-w-3xl">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-ivory border border-smoke rounded-xl overflow-hidden"
                  >
                    <summary className="p-4 cursor-pointer font-body font-medium text-sm text-charcoal flex items-center justify-between list-none">
                      {faq.question}
                      <svg
                        className="w-4 h-4 text-ash shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-ash font-body">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
