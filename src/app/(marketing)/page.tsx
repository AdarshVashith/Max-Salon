'use client';

import {
  HeroSection,
  ServiceCategories,
  BentoGrid,
  AIRecommender,
  StatsStrip,
  Testimonials,
  OffersSection,
  BlogPreview,
  InstagramFeed,
  CTABand,
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCategories />
      <BentoGrid />
      <AIRecommender />
      <StatsStrip />
      <Testimonials />
      <OffersSection />
      <BlogPreview />
      <InstagramFeed />
      <CTABand />
    </>
  );
}
