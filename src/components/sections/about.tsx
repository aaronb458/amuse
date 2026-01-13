'use client';

import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">About Us</p>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">Amuse-Bouche</h2>
          <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto italic">
            A Tease in Every Bite
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Image */}
          <div className="relative h-96 md:h-[500px]">
            <Image
              src="/images/background-2.jpeg"
              alt="Chef plating food"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-gray-600 font-light text-base leading-relaxed">
              Amuse-Bouche is a small, family-owned, 100% Bahamian business proudly created in
              Nassau, The Bahamas.
            </p>

            <p className="text-gray-600 font-light text-base leading-relaxed">
              We are the sister company of Live 2 Fish, a premier fishing charter company
              consistently ranked #1 on TripAdvisor, and we bring that same standard of excellence,
              authenticity, and hospitality to the culinary world. Amuse-Bouche is also proudly
              partnered with Titan Hospitality, aligning us with some of the island&apos;s most
              respected restaurants and chefs.
            </p>

            <p className="text-gray-600 font-light text-base leading-relaxed">
              As the first and only high-end food tour in Nassau, Amuse-Bouche was born from the
              vision of a well-traveled founder who recognized something missing at home. While
              culinary tours are celebrated around the world, there was no elevated, chef-driven
              food tour experience that truly showcased Nassau&apos;s dining scene — until now.
            </p>

            <p className="text-gray-600 font-light text-base leading-relaxed">
              Each Amuse-Bouche tour is exclusively designed by the chefs themselves, created
              specifically for our guests. Every participating restaurant curates its own tasting
              experience, ensuring that each stop is distinct, intentional, and unforgettable. No
              menus are repeated, and no two experiences are exactly alike.
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-gray-600 font-light text-base leading-relaxed">
              The inspiration behind Amuse-Bouche comes from a simple love of sampling many flavors
              rather than committing to just one meal — the joy of discovery, contrast, and
              surprise. Guests are invited to experience four of Nassau&apos;s top restaurants in
              one seamless journey, with the added pleasure of seeing the city along the way.
            </p>

            <p className="text-gray-600 font-light text-base leading-relaxed">
              More than a tour, Amuse-Bouche is a celebration of Bahamian hospitality, culinary
              creativity, and thoughtful indulgence.
            </p>

            <p className="text-gray-700 font-light text-lg italic leading-relaxed">
              We hope you enjoy a tease in every bite as much as we enjoy serving you.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="order-1 md:order-2 p-8 md:p-12 bg-black text-white text-center">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Pricing</p>
            <p className="text-5xl md:text-6xl font-light mb-4">$175</p>
            <p className="text-white/60 text-sm uppercase tracking-widest mb-6">per person</p>
            <div className="border-t border-white/20 pt-6 space-y-2 text-white/70 font-light text-sm">
              <p>Includes all food tastings, curated beverage pairings,</p>
              <p>transportation, and guided experience.</p>
              <p className="text-gold mt-4">Gratuity is not included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
