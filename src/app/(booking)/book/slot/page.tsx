'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';
import { Logo } from '@/components/layout/Logo';
import { luxuryEase } from '@/lib/animations';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const timeSlots = {
  Morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  Afternoon: ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM'],
  Evening: ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'],
};

const bookedSlots = ['11:30 AM', '2:00 PM', '5:30 PM'];

const stylists = [
  { id: 'any', name: 'Any Available', specialty: '', rating: 0, initials: '?' },
  { id: 'meera', name: 'Meera Kapoor', specialty: 'Hair Color Expert', rating: 4.9, initials: 'MK' },
  { id: 'raj', name: 'Raj Malhotra', specialty: 'Bridal Specialist', rating: 4.8, initials: 'RM' },
  { id: 'anita', name: 'Anita Singh', specialty: 'Skin & Facial', rating: 4.9, initials: 'AS' },
  { id: 'vikram', name: 'Vikram Patel', specialty: 'Hair Styling', rating: 4.7, initials: 'VP' },
];

function generateCalendarDays() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: Array<{ date: number; isToday: boolean; isPast: boolean; isAvailable: boolean }> = [];

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push({ date: 0, isToday: false, isPast: true, isAvailable: false });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today.getDate();
    const isPast = day < today.getDate();
    const isAvailable = !isPast && Math.random() > 0.1;
    days.push({ date: day, isToday, isPast, isAvailable });
  }

  return days;
}

export default function BookingStep2() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedStylist, setSelectedStylist] = useState('any');

  const calendarDays = generateCalendarDays();
  const now = new Date();
  const monthName = now.toLocaleString('en-IN', { month: 'long' });
  const year = now.getFullYear();

  return (
    <div className="min-h-screen bg-pearl">
      {/* Header */}
      <div className="bg-charcoal">
        <div className="section-container py-4 flex items-center justify-between">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <div className="text-pearl/60 text-sm font-body">
            Step 2 of 3 — <span className="text-gold">Choose Slot</span>
          </div>
        </div>
        <div className="h-1 bg-charcoal-80">
          <div className="h-full w-2/3 bg-gold rounded-r-full transition-all duration-500" />
        </div>
      </div>

      <div className="section-container py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="bg-ivory border border-smoke rounded-[20px] p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-2xl text-charcoal">
                  {monthName} {year}
                </h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border border-smoke hover:border-gold flex items-center justify-center text-ash hover:text-gold transition-all" aria-label="Previous month">
                    ←
                  </button>
                  <button className="w-8 h-8 rounded-full border border-smoke hover:border-gold flex items-center justify-center text-ash hover:text-gold transition-all" aria-label="Next month">
                    →
                  </button>
                </div>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-body font-medium text-ash py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, i) => (
                  <button
                    key={i}
                    disabled={day.date === 0 || day.isPast || !day.isAvailable}
                    onClick={() => setSelectedDate(day.date)}
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm font-body transition-all duration-200 ${
                      day.date === 0
                        ? ''
                        : day.isPast || !day.isAvailable
                        ? 'text-ash/30 line-through cursor-not-allowed bg-smoke/30'
                        : selectedDate === day.date
                        ? 'bg-gold text-charcoal font-semibold shadow-gold'
                        : day.isToday
                        ? 'bg-gold/20 text-gold font-semibold hover:bg-gold hover:text-charcoal'
                        : 'text-charcoal hover:bg-pearl-warm hover:border hover:border-gold/30'
                    }`}
                  >
                    {day.date > 0 ? day.date : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-ivory border border-smoke rounded-[20px] p-6">
              {!selectedDate ? (
                <div className="flex items-center justify-center h-full text-ash text-sm font-body">
                  ← Select a date to see available time slots
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display font-bold text-xl text-charcoal">
                      Available Slots
                    </h3>
                    <span className="text-xs text-ash font-body" aria-live="polite">
                      3 people viewing today&apos;s slots
                    </span>
                  </div>

                  {Object.entries(timeSlots).map(([period, slots]) => (
                    <div key={period} className="mb-6">
                      <h4 className="font-body font-semibold text-sm text-charcoal mb-3">
                        {period}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {slots.map((slot) => {
                          const isBooked = bookedSlots.includes(slot);
                          return (
                            <button
                              key={slot}
                              disabled={isBooked}
                              onClick={() => setSelectedTime(slot)}
                              className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-200 ${
                                isBooked
                                  ? 'bg-smoke/50 text-ash/30 line-through cursor-not-allowed'
                                  : selectedTime === slot
                                  ? 'bg-gold text-charcoal font-semibold shadow-gold'
                                  : 'bg-pearl border border-smoke text-charcoal hover:border-gold hover:text-gold'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Stylist Selector */}
          <div className="mt-8 bg-ivory border border-smoke rounded-[20px] p-6">
            <h3 className="font-display font-bold text-xl text-charcoal mb-4">
              Choose Your Stylist
            </h3>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {stylists.map((stylist) => (
                <button
                  key={stylist.id}
                  onClick={() => setSelectedStylist(stylist.id)}
                  className={`flex flex-col items-center gap-2 min-w-[100px] p-3 rounded-xl transition-all duration-300 ${
                    selectedStylist === stylist.id
                      ? 'bg-gold/10 border-2 border-gold'
                      : 'hover:bg-pearl-warm border-2 border-transparent'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-display font-bold ${
                      selectedStylist === stylist.id
                        ? 'bg-gold text-charcoal ring-2 ring-gold ring-offset-2'
                        : 'bg-charcoal text-pearl'
                    }`}
                  >
                    {stylist.initials}
                  </div>
                  <p className="font-body font-medium text-xs text-charcoal text-center">
                    {stylist.name}
                  </p>
                  {stylist.specialty && (
                    <p className="text-[10px] text-ash text-center">
                      {stylist.specialty}
                    </p>
                  )}
                  {stylist.rating > 0 && (
                    <span className="text-[10px] text-gold">
                      ⭐ {stylist.rating}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-8">
            <Link href="/book">
              <Button variant="ghost" className="text-ash">
                ← Back
              </Button>
            </Link>
            <Link href="/book/confirm">
              <Button
                variant="primary"
                size="lg"
                disabled={!selectedDate || !selectedTime}
              >
                Continue to Confirm →
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
