/* ─── JSON-LD Schema Generators for Maxx Salon ─── */

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Maxx Salon',
    url: 'https://maxxsalon.in',
    logo: 'https://maxxsalon.in/logo.png',
    description:
      "India's premium salon & spa chain offering expert hair, skin, bridal, and nail services across 500+ locations in 12 cities.",
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9999999999',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://instagram.com/maxxsalon',
      'https://facebook.com/maxxsalon',
      'https://youtube.com/@maxxsalon',
      'https://pinterest.com/maxxsalon',
    ],
  };
}

export function generateBeautySalonSchema(location: {
  name: string;
  streetAddress: string;
  area: string;
  city: string;
  postalCode: string;
  lat: number;
  lng: number;
  phone: string;
  ratingValue: number;
  reviewCount: number;
  mapsUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: `Maxx Salon ${location.name}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.area,
      addressRegion: location.city,
      postalCode: location.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    telephone: location.phone,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '20:00',
      },
    ],
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: location.ratingValue,
      reviewCount: location.reviewCount,
    },
    hasMap: location.mapsUrl,
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: number;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Maxx Salon',
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'INR',
    },
    description: service.description,
    ...(service.image ? { image: service.image } : {}),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
