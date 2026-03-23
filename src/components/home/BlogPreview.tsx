'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { luxuryEase, staggerContainer, fadeUpItem } from '@/lib/animations';

const categories = ['MAKEUP', 'SKINCARE', 'TRENDS'];

const blogPosts = [
  {
    id: 1,
    title: "DANIEL BAUER'S TOP TIPS ON DEWY MAKEUP",
    excerpt: "Daniel Bauer's Top Tips On Dewy Makeup",
    category: 'MAKEUP',
    image: '/images/blog/dewy-makeup.jpg',
    link: '/blog/dewy-makeup'
  },
  {
    id: 2,
    title: "THE PERFECT DATE NIGHT MAKEUP INSPIRED BY ROSES",
    excerpt: "The Perfect Date Night Makeup Inspired by Roses and Romance",
    category: 'MAKEUP',
    image: '/images/blog/rose-makeup.jpg',
    link: '/blog/rose-makeup',
    objectPosition: 'object-top'
  },
  {
    id: 3,
    title: "HOW TO ACE THE NO MAKEUP MAKEUP LOOK",
    excerpt: "How To Ace The No Makeup Makeup Look",
    category: 'MAKEUP',
    image: '/images/blog/no-makeup.jpg',
    link: '/blog/no-makeup-look'
  },
  {
    id: 4,
    title: "5 HYALURONIC ACID SERUMS YOU NEED",
    excerpt: "The ultimate hydration boost for your daily routine",
    category: 'SKINCARE',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    link: '/blog/skincare-serums'
  },
  {
    id: 5,
    title: "BRIDAL TRENDS DOMINATING 2025",
    excerpt: "What modern brides are choosing for their big day",
    category: 'TRENDS',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    link: '/blog/bridal-2025'
  }
];

export function BlogPreview() {
  const [activeTab, setActiveTab] = useState('MAKEUP');

  const filteredPosts = blogPosts.filter(post => post.category === activeTab).slice(0, 3);

  return (
    <section className="py-10 lg:py-16 bg-pearl" id="blog-preview">
      <div className="section-container">
        
        {/* Gallery Header (Lakme Style Left-Aligned) */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: luxuryEase }}
        >
          <span className="inline-block bg-gold/20 text-charcoal font-display font-semibold text-[10px] tracking-widest px-3 py-1 mb-3">
            TRENDING NOW
          </span>
          <h2 className="font-display font-light text-3xl md:text-4xl text-charcoal tracking-wide uppercase">
            The Maxx Edit
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`pb-1 text-sm tracking-widest transition-all duration-300 ${
                activeTab === cat
                  ? 'text-charcoal border-b justify-center items-center border-charcoal font-medium'
                  : 'text-ash hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={activeTab} // Forces re-animation on tab change
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div 
                key={post.id}
                variants={fadeUpItem}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 10 }}
                className="flex flex-col group"
              >
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-smoke mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={`object-cover ${post.objectPosition || 'object-center'} transition-transform duration-700 ease-luxury group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Typography Block */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-display text-[15px] lg:text-[17px] font-medium text-charcoal leading-snug tracking-wide uppercase mb-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-[13px] text-ash mb-6">
                    {post.excerpt}
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto pt-2">
                    <Link href={post.link}>
                      <span className="inline-block border border-charcoal/30 px-5 py-2 text-[11px] font-body tracking-widest text-charcoal uppercase hover:bg-charcoal hover:text-pearl transition-colors duration-300">
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
