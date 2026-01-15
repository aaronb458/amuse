'use client';

import Image from 'next/image';

const galleryImages = [
  { src: '/images/IMG_2719.jpeg', alt: 'Culinary delight 1' },
  { src: '/images/IMG_2720.jpeg', alt: 'Culinary delight 2' },
  { src: '/images/IMG_2722.jpeg', alt: 'Culinary delight 3' },
  { src: '/images/IMG_2723.jpeg', alt: 'Culinary delight 4' },
  { src: '/images/IMG_2724.jpeg', alt: 'Culinary delight 5' },
  { src: '/images/IMG_2726.jpeg', alt: 'Culinary delight 6' },
  { src: '/images/IMG_2727.jpeg', alt: 'Culinary delight 7' },
  { src: '/images/IMG_2728.jpeg', alt: 'Culinary delight 8' },
  { src: '/images/IMG_2730.jpeg', alt: 'Culinary delight 9' },
  { src: '/images/IMG_2731.jpeg', alt: 'Culinary delight 10' },
  { src: '/images/IMG_2733.jpeg', alt: 'Culinary delight 11' },
  { src: '/images/IMG_2734.jpeg', alt: 'Culinary delight 12' },
  { src: '/images/IMG_2735.jpeg', alt: 'Culinary delight 13' },
  { src: '/images/IMG_2737.jpeg', alt: 'Culinary delight 14' },
  { src: '/images/IMG_2738.jpeg', alt: 'Culinary delight 15' },
  { src: '/images/IMG_2739.jpeg', alt: 'Culinary delight 16' },
  {
    src: '/images/WhatsApp Image 2025-08-14 at 22.33.51.jpeg',
    alt: 'Culinary delight 17',
  },
  {
    src: '/images/WhatsApp Image 2025-08-14 at 22.33.51_1.jpeg',
    alt: 'Culinary delight 18',
  },
  {
    src: '/images/WhatsApp Image 2025-08-14 at 22.33.52.jpeg',
    alt: 'Culinary delight 19',
  },
  {
    src: '/images/WhatsApp Image 2025-08-14 at 22.34.01.jpeg',
    alt: 'Culinary delight 20',
  },
  {
    src: '/images/WhatsApp Image 2025-08-14 at 23.00.24.jpeg',
    alt: 'Culinary delight 21',
  },
  {
    src: '/images/WhatsApp Image 2025-08-14 at 23.00.27.jpeg',
    alt: 'Culinary delight 22',
  },
  {
    src: '/images/WhatsApp Image 2025-08-14 at 23.00.30.jpeg',
    alt: 'Culinary delight 23',
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 23.22.01.jpeg',
    alt: 'Culinary delight 24',
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (1).jpeg',
    alt: 'Culinary delight 25',
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (2).jpeg',
    alt: 'Culinary delight 26',
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (3).jpeg',
    alt: 'Culinary delight 27',
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (4).jpeg',
    alt: 'Culinary delight 28',
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 23.22.05 (5).jpeg',
    alt: 'Culinary delight 29',
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 23.22.06 (1).jpeg',
    alt: 'Culinary delight 30',
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 23.22.06.jpeg',
    alt: 'Culinary delight 31',
  },
  {
    src: '/images/WhatsApp Image 2025-10-28 at 19.42.54 (1).jpeg',
    alt: 'Culinary delight 32',
  },
  {
    src: '/images/WhatsApp Image 2025-10-28 at 19.42.54 (2).jpeg',
    alt: 'Culinary delight 33',
  },
  {
    src: '/images/WhatsApp Image 2025-10-28 at 19.42.54 (3).jpeg',
    alt: 'Culinary delight 34',
  },
  {
    src: '/images/WhatsApp Image 2025-10-28 at 19.42.55 (1).jpeg',
    alt: 'Culinary delight 35',
  },
  {
    src: '/images/WhatsApp Image 2025-10-28 at 19.42.55 (2).jpeg',
    alt: 'Culinary delight 36',
  },
  {
    src: '/images/WhatsApp Image 2025-10-28 at 19.42.55.jpeg',
    alt: 'Culinary delight 37',
  },
  {
    src: '/images/WhatsApp Image 2025-10-29 at 20.45.44 (1).jpeg',
    alt: 'Culinary delight 38',
  },
  {
    src: '/images/WhatsApp Image 2025-10-29 at 20.45.44.jpeg',
    alt: 'Culinary delight 39',
  },
  {
    src: '/images/WhatsApp Image 2025-10-29 at 20.45.45.jpeg',
    alt: 'Culinary delight 40',
  },
  {
    src: '/images/IMG_5529.jpg',
    alt: 'Culinary delight 41',
  },
  {
    src: '/images/IMG_5560.jpg',
    alt: 'Culinary delight 42',
  },
  {
    src: '/images/IMG_5572.jpg',
    alt: 'Culinary delight 43',
  },
  {
    src: '/images/IMG_5577.jpg',
    alt: 'Culinary delight 44',
  },
  {
    src: '/images/IMG_5599.jpg',
    alt: 'Culinary delight 45',
  },
  {
    src: '/images/WhatsApp Image 2026-01-15 at 08.38.42.jpeg',
    alt: 'Culinary delight 46',
  },
  {
    src: '/images/WhatsApp Image 2026-01-15 at 08.39.43.jpeg',
    alt: 'Culinary delight 47',
  },
  {
    src: '/images/WhatsApp Image 2026-01-15 at 08.46.18.jpeg',
    alt: 'Culinary delight 48',
  },
  {
    src: '/images/IMG_7503.jpeg',
    alt: 'Culinary delight 49',
  },
  {
    src: '/images/IMG_7858.jpeg',
    alt: 'Culinary delight 50',
  },
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
