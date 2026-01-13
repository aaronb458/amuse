'use client';

import Image from 'next/image';
import { BookingForm } from '@/components/forms/booking-form';

export function BookingSection() {
  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with low opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_2735.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      {/* Decorative island element */}
      <div className="relative z-10 mb-12 flex justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-island-teal/40" />
        <div className="w-2 h-2 rounded-full bg-gold/40" />
        <div className="w-2 h-2 rounded-full bg-island-teal/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-island-teal text-xs tracking-[0.3em] uppercase mb-6">Ready?</p>

        <h2 className="text-4xl md:text-5xl font-light text-black mb-8">Reserve Your Experience</h2>

        <p className="text-gray-600 font-light text-lg mb-4 leading-relaxed">
          Private tours are available by reservation only.
        </p>

        <p className="text-gray-500 font-light text-base mb-12 leading-relaxed">
          Spots are limited — and once you've experienced it, you'll understand why.
        </p>

        {/* Booking Form */}
        <div className="mb-12">
          <BookingForm />
        </div>

        <div className="border-t border-gray-200 pt-12 mt-12">
          <p className="text-gray-500 font-light text-sm mb-4">Questions? We're here to help.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">
            <div>
              <p className="text-xs text-gold tracking-widest uppercase mb-1">
                Call / Text / WhatsApp
              </p>
              <p className="font-light text-base">+1 (242) 815-8687</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-300" />
            <div>
              <p className="text-xs text-gold tracking-widest uppercase mb-1">Email</p>
              <p className="font-light text-base">amusebouchetours@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
