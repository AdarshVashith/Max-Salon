import { NextRequest, NextResponse } from 'next/server';

const servicesCatalog = [
  {
    serviceId: 'hydra-facial',
    name: 'Hydra Facial Glow',
    category: 'Skin & Facial',
    price: 1799,
    duration: 60,
    imageUrl: '/services/hydra-facial.jpg',
    tags: ['relaxation', 'skin', 'maintenance'],
  },
  {
    serviceId: 'head-massage',
    name: 'Aromatherapy Head Massage',
    category: 'Body Treatments',
    price: 899,
    duration: 30,
    imageUrl: '/services/head-massage.jpg',
    tags: ['relaxation', 'body', 'maintenance'],
  },
  {
    serviceId: 'keratin',
    name: 'Keratin Smoothing Treatment',
    category: 'Hair Care',
    price: 2999,
    duration: 180,
    imageUrl: '/services/keratin.jpg',
    tags: ['look-change', 'hair'],
  },
  {
    serviceId: 'bridal-makeup',
    name: 'Maxx Bridal Transformation',
    category: 'Bridal Maxx',
    price: 4999,
    duration: 240,
    imageUrl: '/services/bridal.jpg',
    tags: ['occasion', 'both'],
  },
  {
    serviceId: 'premium-haircut',
    name: 'Premium Haircut & Styling',
    category: 'Hair Care',
    price: 799,
    duration: 45,
    imageUrl: '/services/haircut.jpg',
    tags: ['maintenance', 'look-change', 'hair'],
  },
  {
    serviceId: 'nail-art',
    name: 'Premium Nail Art',
    category: 'Nail Art',
    price: 999,
    duration: 60,
    imageUrl: '/services/nail-art.jpg',
    tags: ['occasion', 'maintenance'],
  },
  {
    serviceId: 'foot-spa',
    name: 'Luxury Foot Spa',
    category: 'Body Treatments',
    price: 699,
    duration: 40,
    imageUrl: '/services/foot-spa.jpg',
    tags: ['relaxation', 'body'],
  },
  {
    serviceId: 'gold-facial',
    name: 'Maxx Gold Facial',
    category: 'Skin & Facial',
    price: 1499,
    duration: 75,
    imageUrl: '/services/gold-facial.jpg',
    tags: ['occasion', 'skin', 'relaxation'],
  },
  {
    serviceId: 'hair-color',
    name: 'Global Hair Color',
    category: 'Hair Care',
    price: 1299,
    duration: 120,
    imageUrl: '/services/hair-color.jpg',
    tags: ['look-change', 'hair'],
  },
  {
    serviceId: 'manicure-pedicure',
    name: 'Express Manicure & Pedicure',
    category: 'Nail Art',
    price: 1299,
    duration: 45,
    imageUrl: '/services/mani-pedi.jpg',
    tags: ['maintenance', 'relaxation'],
  },
];

const goalMap: Record<string, string> = {
  'Relaxation & Rejuvenation': 'relaxation',
  'Fresh New Look': 'look-change',
  'Special Occasion / Event': 'occasion',
  'Regular Maintenance': 'maintenance',
};

const focusMap: Record<string, string> = {
  Hair: 'hair',
  Skin: 'skin',
  Both: 'both',
  'Full Body': 'body',
};

const timeMap: Record<string, number> = {
  '30 Minutes': 30,
  '30min': 30,
  '1 Hour': 60,
  '1hr': 60,
  '2+ Hours': 180,
  '2hr-plus': 180,
};

function scoreService(
  service: typeof servicesCatalog[0],
  goalTag: string,
  focusTag: string,
  maxDuration: number
): number {
  let score = 50; // Base score

  // Goal match
  if (service.tags.includes(goalTag)) score += 30;

  // Focus match
  if (service.tags.includes(focusTag) || focusTag === 'both') score += 15;

  // Duration fit
  if (service.duration <= maxDuration) score += 10;
  else score -= 20;

  // Randomize slightly for variety
  score += Math.floor(Math.random() * 8) - 4;

  return Math.min(100, Math.max(10, score));
}

function generateReason(goalTag: string, focusTag: string): string {
  const reasons: Record<string, string[]> = {
    relaxation: [
      'Perfect for unwinding and rejuvenation',
      'Ideal for stress relief and deep relaxation',
      'The perfect pampering experience for you',
    ],
    'look-change': [
      'Transform your look with expert styling',
      'Fresh and confident — perfect new-look choice',
      'Great pick for a stunning transformation',
    ],
    occasion: [
      'Stunning results for your special event',
      'Perfect prep for your occasion',
      'Event-ready in style at Maxx',
    ],
    maintenance: [
      'Keep looking your best with regular care',
      'Essential upkeep for lasting beauty',
      'Smart self-care for radiant results',
    ],
  };

  const options = reasons[goalTag] || reasons.maintenance;
  return options[Math.floor(Math.random() * options.length)];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { goal, focus, time } = body;

    const goalTag = goalMap[goal] || goal || 'relaxation';
    const focusTag = focusMap[focus] || focus || 'both';
    const maxDuration = timeMap[time] || 60;

    const scored = servicesCatalog
      .map((service) => ({
        ...service,
        matchScore: scoreService(service, goalTag, focusTag, maxDuration),
        reason: generateReason(goalTag, focusTag),
      }))
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);

    const recommendations = scored.map((s) => ({
      serviceId: s.serviceId,
      name: s.name,
      category: s.category,
      price: s.price,
      duration: s.duration,
      matchScore: s.matchScore,
      reason: s.reason,
      imageUrl: s.imageUrl,
    }));

    return NextResponse.json({ recommendations }, { status: 200 });
  } catch {
    // Fallback recommendations
    return NextResponse.json(
      {
        recommendations: [
          {
            serviceId: 'head-massage',
            name: 'Aromatherapy Head Massage',
            category: 'Body Treatments',
            price: 899,
            duration: 30,
            matchScore: 85,
            reason: 'A relaxing start to your Maxx experience',
            imageUrl: '/services/head-massage.jpg',
          },
          {
            serviceId: 'hydra-facial',
            name: 'Hydra Facial Glow',
            category: 'Skin & Facial',
            price: 1799,
            duration: 60,
            matchScore: 80,
            reason: 'Radiant skin in just one session',
            imageUrl: '/services/hydra-facial.jpg',
          },
          {
            serviceId: 'foot-spa',
            name: 'Luxury Foot Spa',
            category: 'Body Treatments',
            price: 699,
            duration: 40,
            matchScore: 75,
            reason: 'Complete your relaxation journey',
            imageUrl: '/services/foot-spa.jpg',
          },
        ],
      },
      { status: 200 }
    );
  }
}
