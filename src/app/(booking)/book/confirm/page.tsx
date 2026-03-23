'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input } from '@/components/design-system';
import { Logo } from '@/components/layout/Logo';
import { luxuryEase } from '@/lib/animations';

export default function BookingStep3() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'now' | 'salon'>('now');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'MAXXFIRST') {
      setPromoApplied(true);
    }
  };

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const subtotal = 2798;
  const discount = promoApplied ? 500 : 0;
  const total = subtotal - discount;

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-pearl flex items-center justify-center">
        <motion.div
          className="max-w-md w-full mx-4"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
        >
          <div className="bg-ivory border border-smoke rounded-[24px] p-8 text-center shadow-xl">
            {/* Confetti effect via CSS */}
            <div className="relative">
              <motion.div
                className="w-20 h-20 mx-auto bg-gold rounded-full flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <svg className="w-10 h-10 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </div>

            <h2 className="font-display font-black text-2xl text-charcoal">
              You&apos;re all set{name ? `, ${name.split(' ')[0]}` : ''}!
            </h2>
            <p className="font-body text-sm text-ash mt-2">
              Your Maxx Salon appointment is confirmed 💛
            </p>

            <div className="bg-pearl-warm rounded-xl p-4 mt-6 text-left space-y-2">
              <p className="font-body text-sm text-charcoal">
                <span className="font-semibold">Booking ID:</span>{' '}
                #MX-2025-{Math.floor(1000 + Math.random() * 9000)}
              </p>
              <p className="font-body text-sm text-charcoal flex items-center gap-2">
                <span>📍</span> Maxx Salon, Connaught Place
              </p>
              <p className="font-body text-sm text-charcoal flex items-center gap-2">
                <span>📅</span> Tomorrow, 2:30 PM
              </p>
              <p className="font-body text-sm text-charcoal flex items-center gap-2">
                <span>💇</span> Premium Haircut · Hydra Facial
              </p>
              <p className="font-body text-sm text-gold font-semibold">
                Total: ₹{total.toLocaleString('en-IN')}
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <Button variant="primary" fullWidth>
                📅 Add to Calendar
              </Button>
              <Button variant="ghost" fullWidth className="text-emerald-600">
                💬 Share on WhatsApp
              </Button>
              <Link href="/">
                <Button variant="ghost" fullWidth className="text-ash">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl">
      {/* Header */}
      <div className="bg-charcoal">
        <div className="section-container py-4 flex items-center justify-between">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <div className="text-pearl/60 text-sm font-body">
            Step 3 of 3 — <span className="text-gold">Confirm</span>
          </div>
        </div>
        <div className="h-1 bg-charcoal-80">
          <div className="h-full w-full bg-gold rounded-r-full transition-all duration-500" />
        </div>
      </div>

      <div className="section-container py-8 lg:py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        >
          {/* Left: Order Summary */}
          <div className="bg-ivory border border-smoke rounded-[20px] p-6 h-fit">
            <h3 className="font-display font-bold text-xl text-charcoal mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">
              <p className="text-ash flex items-center gap-2">
                📍 Maxx Salon, Connaught Place, Delhi
              </p>
              <p className="text-ash flex items-center gap-2">
                📅 Tomorrow · 2:30 PM
              </p>
              <p className="text-ash flex items-center gap-2">
                👩 Stylist: Meera Kapoor
              </p>
            </div>

            <div className="border-t border-smoke mt-4 pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-charcoal">Premium Haircut & Styling</span>
                <span className="font-medium">₹799</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-charcoal">Hydra Facial Glow</span>
                <span className="font-medium">₹1,999</span>
              </div>
            </div>

            <div className="border-t border-smoke mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-ash">Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-success">
                  <span>Promo discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-base pt-2 border-t border-smoke">
                <span>Total</span>
                <span className="font-display text-xl text-gold">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
              {promoApplied && (
                <p className="text-xs text-gold font-medium">
                  You save ₹{discount}! 🎉
                </p>
              )}
            </div>

            <p className="text-[11px] text-ash mt-4">
              Last booked 4 minutes ago
            </p>
          </div>

          {/* Right: Form + Payment */}
          <div className="space-y-6">
            {/* Customer Details */}
            <div className="bg-ivory border border-smoke rounded-[20px] p-6">
              <h3 className="font-display font-bold text-xl text-charcoal mb-5">
                Your Details
              </h3>
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div>
                  <Input
                    label="Phone Number"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                  />
                  {!otpSent && phone.length >= 10 && (
                    <button
                      onClick={() => setOtpSent(true)}
                      className="text-xs text-gold font-medium mt-2 hover:underline"
                    >
                      Send OTP for verification →
                    </button>
                  )}
                  {otpSent && (
                    <div className="flex gap-2 mt-3">
                      <input
                        type="text"
                        maxLength={6}
                        value={otp}
                        onChange={(e) =>
                          setOtp(e.target.value.replace(/\D/g, ''))
                        }
                        placeholder="Enter 6-digit OTP"
                        className="flex-1 bg-pearl border border-smoke rounded-lg px-4 py-2.5 text-center text-lg tracking-[0.5em] font-body focus:outline-none focus:border-gold"
                      />
                    </div>
                  )}
                </div>
                <Input
                  label="Email Address"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <div>
                  <label className="block text-sm font-medium text-charcoal font-body mb-1.5">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Any allergies, preferences, or special notes..."
                    rows={3}
                    className="w-full bg-ivory border border-smoke rounded-lg px-4 py-3 text-sm font-body text-charcoal placeholder:text-ash/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="bg-ivory border border-smoke rounded-[20px] p-6">
              <h4 className="font-body font-semibold text-sm text-charcoal mb-3">
                Promo Code
              </h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter Maxx Code"
                  disabled={promoApplied}
                  className="flex-1 bg-pearl border border-smoke rounded-lg px-4 py-2.5 text-sm font-body text-charcoal placeholder:text-ash/60 focus:outline-none focus:border-gold disabled:opacity-50"
                />
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleApplyPromo}
                  disabled={promoApplied || !promoCode}
                >
                  {promoApplied ? '✓ Applied' : 'Apply'}
                </Button>
              </div>
              {promoApplied && (
                <p className="text-xs text-success font-medium mt-2">
                  ✅ ₹500 off applied! Use MAXXFIRST
                </p>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-ivory border border-smoke rounded-[20px] p-6">
              <h4 className="font-body font-semibold text-sm text-charcoal mb-3">
                Payment Method
              </h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'now' ? 'border-gold bg-gold/5' : 'border-smoke'}">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'now'}
                    onChange={() => setPaymentMethod('now')}
                    className="accent-[#D4AF37]"
                  />
                  <div>
                    <p className="font-body font-medium text-sm text-charcoal">
                      Pay Now
                    </p>
                    <p className="text-xs text-ash">
                      UPI · Card · Net Banking · Wallets via Razorpay
                    </p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'salon' ? 'border-gold bg-gold/5' : 'border-smoke'}">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'salon'}
                    onChange={() => setPaymentMethod('salon')}
                    className="accent-[#D4AF37]"
                  />
                  <div>
                    <p className="font-body font-medium text-sm text-charcoal">
                      Pay at Salon
                    </p>
                    <p className="text-xs text-ash">
                      Confirm your slot and pay during your visit
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Terms + CTA */}
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="accent-[#D4AF37] mt-1"
                />
                <span className="text-xs text-ash font-body leading-relaxed">
                  I agree to Maxx Salon&apos;s cancellation policy and terms of
                  service. Free cancellation up to 4 hours before your
                  appointment.
                </span>
              </label>

              <Button
                variant="primary"
                fullWidth
                size="lg"
                onClick={handleConfirm}
                disabled={!name || !phone || !agreedToTerms || isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Confirming your booking...
                  </span>
                ) : (
                  'Confirm My Booking'
                )}
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs text-ash">
                <span className="flex items-center gap-1">🔒 Secure Payment</span>
                <span className="flex items-center gap-1">✓ Razorpay Verified</span>
              </div>
            </div>

            {/* Back Button */}
            <Link href="/book/slot">
              <Button variant="ghost" className="text-ash">
                ← Back to Slot Selection
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
