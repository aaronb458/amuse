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
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Our Mission</p>

            <h2 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
              Amuse Bouche
            </h2>

            <div className="space-y-8">
              {/* Motto */}
              <div>
                <h3 className="text-gold text-sm font-semibold uppercase tracking-wide mb-3">
                  Motto
                </h3>
                <p className="text-gray-700 font-light text-xl italic leading-relaxed">
                  A Tease in Every Bite
                </p>
              </div>

              {/* Mission Statement */}
              <div>
                <h3 className="text-gold text-sm font-semibold uppercase tracking-wide mb-3">
                  Mission Statement
                </h3>
                <p className="text-gray-600 font-light text-base leading-relaxed">
                  To create intimate, memorable culinary experiences that awaken the senses and
                  celebrate the joy of food, culture, and connection. Each tour is designed to
                  delight guests with warmth, laughter, and discovery — one tease at a time.
                </p>
              </div>

              {/* Vision Statement */}
              <div>
                <h3 className="text-gold text-sm font-semibold uppercase tracking-wide mb-3">
                  Vision Statement
                </h3>
                <p className="text-gray-600 font-light text-base leading-relaxed">
                  To share the beauty of Bahamian and Caribbean hospitality through taste and
                  storytelling, becoming the most sought-after food experience in the islands —
                  where every bite feels like a celebration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
