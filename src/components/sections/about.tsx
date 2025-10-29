'use client';

import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative h-96 md:h-[500px]">
            <Image
              src="/images/background-2.jpeg"
              alt="Chef plating food"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">The Experience</p>

            <h2 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
              An Indulgent Culinary Journey
            </h2>

            <p className="text-gray-600 font-light text-lg mb-6 leading-relaxed">
              Welcome to Amuse-Bouche, the Bahamas' first and only high-end food tour — a private,
              sensory experience that celebrates taste, sophistication, and discovery.
            </p>

            <p className="text-gray-600 font-light text-base mb-6 leading-relaxed">
              The name Amuse-Bouche comes from the French phrase meaning "to amuse the mouth." It
              refers to a single, exquisite bite — a chef's creative introduction meant to awaken
              your palate and set the tone for what's to come.
            </p>

            <p className="text-gray-600 font-light text-base mb-8 leading-relaxed">
              That spirit of surprise and delight defines this tour. Each stop reveals one of
              Nassau's top restaurants, where the chef personally presents three signature dishes —
              each one a masterpiece of flavor, artistry, and presentation.
            </p>

            <p className="text-gray-700 font-light italic text-base">
              "It's an experience worth every penny — filling, yet leaving you craving just one more
              bite."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
