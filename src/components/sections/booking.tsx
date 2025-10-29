'use client';

import Image from 'next/image';

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

        <div className="mb-12 p-8 bg-gradient-to-b from-black to-black/95 text-white border border-island-teal/20">
          <p className="font-light text-lg leading-relaxed">
            Book now. Taste the art of indulgence.
          </p>
          <p className="text-island-teal font-light text-base mt-4 tracking-widest">
            Experience Amuse-Bouche — A Tease in Every Bite
          </p>
        </div>

        <button className="px-12 py-4 bg-black text-white hover:bg-gold hover:text-black font-light tracking-widest uppercase text-sm transition-all duration-300 mb-8">
          Book Your Table
        </button>

        <div className="border-t border-gray-200 pt-12 mt-12">
          <p className="text-gray-500 font-light text-sm mb-4">Questions? We're here to help.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">
            <div>
              <p className="text-xs text-gold tracking-widest uppercase mb-1">Phone</p>
              <p className="font-light text-base">242-815-8687 | +1 (242) 805-0700</p>
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
