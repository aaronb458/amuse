'use client';

import Image from 'next/image';

const galleryImages = [
  { src: '/images/IMG_7503.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2719.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-28 at 19.42.54 (1).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_5529.jpg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-08-14 at 22.33.51.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_4641.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2726.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2026-01-15 at 08.38.42.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-09 at 23.22.01.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2720.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_7858.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-29 at 20.45.44.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_5560.jpg', alt: 'Culinary delight' },
  { src: '/images/IMG_2733.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-08-14 at 22.33.52.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_4712.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-28 at 19.42.55.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2722.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (1).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_5572.jpg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2026-01-15 at 08.39.43.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2727.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-08-14 at 23.00.24.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_4634.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2738.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-28 at 19.42.54 (2).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2723.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (2).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_5577.jpg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-29 at 20.45.45.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2728.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-08-14 at 22.33.51_1.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2026-01-15 at 08.46.18.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2734.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-28 at 19.42.54 (3).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2724.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (3).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_5599.jpg', alt: 'Culinary delight' },
  { src: '/images/IMG_2730.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-08-14 at 23.00.27.jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2739.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-28 at 19.42.55 (1).jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (4).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2731.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-08-14 at 22.34.01.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-29 at 20.45.44 (1).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2735.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-28 at 19.42.55 (2).jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (5).jpeg', alt: 'Culinary delight' },
  { src: '/images/IMG_2737.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-08-14 at 23.00.30.jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-09 at 23.22.06 (1).jpeg', alt: 'Culinary delight' },
  { src: '/images/WhatsApp Image 2025-10-09 at 23.22.06.jpeg', alt: 'Culinary delight' },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
            A Visual Feast
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
            Explore moments from our culinary journey through Nassau's finest restaurants
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
