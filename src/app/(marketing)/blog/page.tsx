'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/design-system';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const blogPosts = [
  {
    slug: 'monsoon-hair-care-tips',
    title: 'Monsoon Hair Care: 7 Expert Tips to Keep Your Hair Gorgeous',
    excerpt: 'Professional stylists share their secrets for maintaining beautiful hair during the rainy season. From anti-frizz serums to deep conditioning rituals.',
    category: 'Hair Care',
    author: 'Dr. Sneha Mehta',
    readTime: '5 min read',
    date: 'March 20, 2026',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    slug: 'bridal-makeup-trends-2026',
    title: 'Top Bridal Makeup Trends Every Indian Bride Should Know in 2026',
    excerpt: 'From dewy glass skin to bold lip colors — the looks that will define bridal beauty this year.',
    category: 'Bridal',
    author: 'Maxx Style Team',
    readTime: '4 min read',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=400&fit=crop',
  },
  {
    slug: 'benefits-of-regular-facials',
    title: 'Why Monthly Facials Are a Skincare Game-Changer',
    excerpt: 'Your skin deserves more than just a daily routine. Discover the science behind regular professional facials.',
    category: 'Skincare',
    author: 'Dr. Aarti Sharma',
    readTime: '6 min read',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
  },
  {
    slug: 'keratin-treatment-guide',
    title: 'The Complete Guide to Keratin Treatment: What to Expect',
    excerpt: 'Everything you need to know before your first keratin treatment — process, aftercare, and results.',
    category: 'Hair Care',
    author: 'Vikram Patel',
    readTime: '7 min read',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop',
  },
  {
    slug: 'nail-art-trends',
    title: '10 Nail Art Trends That Are Taking Over Indian Salons',
    excerpt: 'From minimalist French tips to bold 3D designs — the nail art styles everyone is asking for.',
    category: 'Nail Art',
    author: 'Anita Singh',
    readTime: '4 min read',
    date: 'February 28, 2026',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop',
  },
  {
    slug: 'self-care-routine-busy-professionals',
    title: 'A Busy Professional\'s Guide to Self-Care in 30 Minutes',
    excerpt: 'Quick salon treatments you can fit into your lunch break for maximum impact.',
    category: 'Wellness',
    author: 'Maxx Style Team',
    readTime: '3 min read',
    date: 'February 22, 2026',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop',
  },
];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const others = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-16">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: luxuryEase }}
          >
            <h1 className="font-display font-bold italic text-4xl md:text-5xl lg:text-6xl text-pearl">
              The Maxx Edit
            </h1>
            <p className="font-accent italic text-lg text-pearl/60 mt-4">
              Beauty insights, style tips, and trend reports
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-pearl">
        <div className="section-container">
          {/* Featured Post */}
          {featured && (
            <motion.div
              className="mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: luxuryEase }}
            >
              <Link href={`/blog/${featured.slug}`}>
                <div className="group relative rounded-[24px] overflow-hidden h-[300px] md:h-[420px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                    <Badge variant="gold" className="mb-3">{featured.category}</Badge>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-pearl group-hover:text-gold transition-colors leading-snug max-w-2xl">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-pearl/60 mt-2 max-w-xl">{featured.excerpt}</p>
                    <div className="flex items-center gap-3 mt-4 text-xs text-pearl/50 font-body">
                      <span>{featured.author}</span>
                      <span>·</span>
                      <span>{featured.readTime}</span>
                      <span>·</span>
                      <span>{featured.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Blog Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {others.map((post) => (
              <motion.div key={post.slug} variants={fadeUpItem}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="group bg-ivory border border-smoke rounded-[20px] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <Badge variant="gold" className="mb-2">{post.category}</Badge>
                      <h3 className="font-display font-bold text-base text-charcoal group-hover:text-gold transition-colors leading-snug mt-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-ash mt-2 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-ash font-body">
                        <span>{post.author}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
