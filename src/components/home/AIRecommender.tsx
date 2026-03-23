'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge, Spinner } from '@/components/design-system';
import { fadeUpItem, luxuryEase } from '@/lib/animations';

const steps = [
  {
    question: "What's your goal today?",
    options: [
      'Relaxation & Rejuvenation',
      'Fresh New Look',
      'Special Occasion / Event',
      'Regular Maintenance',
    ],
  },
  {
    question: "What's your primary focus?",
    options: ['Hair', 'Skin', 'Both', 'Full Body'],
  },
  {
    question: 'How much time do you have?',
    options: ['30 Minutes', '1 Hour', '2+ Hours'],
  },
];

const mockResults = [
  {
    name: 'Maxx Signature Facial',
    category: 'Skin & Facial',
    price: '₹1,999',
    matchScore: 97,
    reason: 'Perfect for rejuvenation with deep hydration',
  },
  {
    name: 'Aromatherapy Head Massage',
    category: 'Body Treatments',
    price: '₹899',
    matchScore: 94,
    reason: 'Ideal stress relief in your time slot',
  },
  {
    name: 'Express Manicure & Pedicure',
    category: 'Nail Art',
    price: '₹1,299',
    matchScore: 89,
    reason: 'Quick pampering to complete your experience',
  },
];

export function AIRecommender() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof mockResults | null>(null);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setResults(mockResults);
      }, 1500);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResults(null);
    setLoading(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden" id="ai-recommender">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            <p className="font-accent italic font-light text-gold text-base mb-4">
              AI-Powered
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-pearl leading-tight">
              Find Your
              <br />
              Perfect Service
            </h2>
            <p className="font-body font-light text-base text-pearl/70 mt-6 max-w-md leading-relaxed">
              Answer 3 quick questions and let our AI curator match you
              with Maxx&apos;s best services for your needs.
            </p>
          </motion.div>

          {/* Right Column - Quiz Card */}
          <motion.div
            className="glass rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
          >
            {/* Progress */}
            <div className="flex gap-2 mb-6">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i <= currentStep ? 'bg-gold' : 'bg-pearl/10'
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Quiz Steps */}
              {!loading && !results && (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: luxuryEase }}
                >
                  <p className="font-body font-medium text-lg text-pearl mb-6">
                    {steps[currentStep].question}
                  </p>
                  <div className="space-y-3">
                    {steps[currentStep].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className="w-full text-left px-5 py-3.5 rounded-xl border border-pearl/20 text-pearl/70 
                          hover:border-gold/50 hover:text-gold hover:bg-gold/5
                          transition-all duration-300 font-body text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Loading */}
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 py-8"
                >
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Spinner />
                    <p className="font-body text-sm text-pearl/70">
                      Finding your perfect services...
                    </p>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-20 rounded-xl skeleton opacity-10"
                    />
                  ))}
                </motion.div>
              )}

              {/* Results */}
              {results && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: luxuryEase }}
                  className="space-y-4"
                >
                  <p className="font-body font-medium text-pearl text-sm mb-4">
                    ✨ Based on your preferences:
                  </p>
                  {results.map((result, i) => (
                    <motion.div
                      key={result.name}
                      className="flex items-center gap-4 p-4 rounded-xl border border-pearl/10 hover:border-gold/30 transition-all group cursor-pointer"
                      variants={fadeUpItem}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center shrink-0">
                        <span className="text-gold text-lg">✦</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-semibold text-[15px] text-pearl truncate">
                            {result.name}
                          </h4>
                          <Badge variant="gold">
                            {result.matchScore}% Match
                          </Badge>
                        </div>
                        <p className="text-xs text-pearl/50 mt-1 truncate">
                          {result.reason}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-accent italic text-gold text-sm">
                          {result.price}
                        </p>
                        <span className="text-[11px] text-gold/70 group-hover:text-gold transition-colors">
                          Book →
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  <button
                    onClick={handleReset}
                    className="w-full text-center text-xs text-pearl/40 hover:text-gold transition-colors mt-4 font-body"
                  >
                    Start over
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
