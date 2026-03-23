'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { luxuryEase, staggerContainer, fadeUpItem } from '@/lib/animations';

const blogPosts = [
  {
    slug: 'monsoon-hair-care-tips',
    title: 'Monsoon Hair Care: 7 Expert Tips to Keep Your Hair Gorgeous',
    excerpt:
      'Professional stylists share their secrets for maintaining beautiful hair during the rainy season...',
    category: 'Hair Care',
    author: 'Dr. Sneha Mehta',
    readTime: '5 min read',
    featured: true,
    gradient: 'from-[#1a1e2a] to-[#2a2838]',
  },
  {
    slug: 'bridal-makeup-trends-2025',
    title: 'Top Bridal Makeup Trends to Watch in 2025',
    excerpt:
      'From dewy glass skin to bold lip colors — here are the styles every Indian bride should know.',
    category: 'Bridal',
    author: 'Maxx Style Team',
    readTime: '4 min read',
    featured: false,
    gradient: 'from-[#2a1a18] to-[#38282a]',
  },
  {
    slug: 'benefits-of-regular-facials',
    title: 'Why Monthly Facials Are a Skincare Game-Changer',
    excerpt:
      'Your skin deserves more than just a daily routine. Discover the science behind regular facials.',
    category: 'Skincare',
    author: 'Dr. Aarti Sharma',
    readTime: '6 min read',
    featured: false,
    gradient: 'from-[#1a2a1e] to-[#283a2e]',
  },
];

export function BlogPreview() {
  const featured = blogPosts.find((p) => p.featured);
  const others = blogPosts.filter((p) => !p.featured);

  return (
    <section className="py-20 lg:py-28 bg-charcoal" id="blog-preview">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: luxuryEase }}
        >
          <h2 className="font-display font-bold italic text-3xl md:text-[40px] text-pearl">
            The Maxx Edit
          </h2>
          <p className="font-accent italic font-light text-base md:text-lg text-pearl/60 mt-3">
            Beauty insights, style tips, and trend reports
          </p>
        </motion.div>

        {/* Editorial Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Featured Post */}
          {featured && (
            <motion.div variants={fadeUpItem} className="lg:col-span-3">
              <Link href={`/blog/${featured.slug}`}>
                <div className={`group relative h-[320px] md:h-[440px] rounded-[20px] overflow-hidden bg-gradient-to-br ${featured.gradient}`}>
                  {/* Ambient glow */}
                  <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-gold/5 rounded-full blur-[80px]" />

                  {/* Bottom content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent">
                    <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-[10px] font-semibold uppercase tracking-wider font-body mb-3">
                      {featured.category}
                    </span>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-pearl leading-snug group-hover:text-gold transition-colors duration-300">
                      {featured.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-3 text-xs text-pearl/50 font-body">
                      <span>{featured.author}</span>
                      <span>·</span>
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Smaller Posts */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {others.map((post) => (
              <motion.div key={post.slug} variants={fadeUpItem}>
                <Link href={`/blog/${post.slug}`}>
                  <div className={`group relative h-[200px] md:h-[210px] rounded-[20px] overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-[10px] font-semibold uppercase tracking-wider font-body mb-2">
                        {post.category}
                      </span>
                      <h4 className="font-display font-bold text-base text-pearl leading-snug group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h4>
                      <p className="text-xs text-pearl/40 font-body mt-2">
                        {post.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-gold font-body font-medium text-sm border border-gold/30 rounded-full px-6 py-3 hover:bg-gold/10 transition-all duration-300">
              Read All Articles →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
