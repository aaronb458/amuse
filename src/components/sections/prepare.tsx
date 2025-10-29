'use client';

import Image from 'next/image';

export function PrepareSection() {
  const preparations = [
    {
      icon: '✨',
      title: 'Dress Code',
      desc: 'Chic and comfortable. Think elevated island style — smart casual attire is perfect. Many of our guests like to dress up just a touch for photos and fine dining.',
    },
    {
      icon: '🚗',
      title: 'Pick-Up & Transportation',
      desc: 'We provide front-door pickup and drop-off service for your convenience. Your private driver will escort you to each of the four restaurants.',
    },
    {
      icon: '🍽️',
      title: 'Your Experience',
      desc: "At each stop, you'll enjoy three signature dishes — each personally chosen by the chef to showcase their finest creations.",
    },
    {
      icon: '🕒',
      title: 'Duration',
      desc: 'Please allow approximately 3½ hours for your full experience. Every moment is designed to flow effortlessly from one restaurant to the next.',
    },
    {
      icon: '💙',
      title: 'Special Requests',
      desc: 'If you have any dietary restrictions, allergies, or special occasions to celebrate, please let us know in advance.',
    },
    {
      icon: '🌴',
      title: 'Relax and Savor',
      desc: "Amuse-Bouche is more than a food tour — it's an experience designed to be savored. Sit back and enjoy.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with image */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
              alt="Luxury dining experience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Before You Go</p>

            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Preparing for Your Experience
            </h2>

            <p className="text-gray-600 font-light text-lg leading-relaxed">
              Your culinary journey is almost here — and we can't wait to welcome you. To help you
              enjoy every moment, here are a few details to make your evening seamless and
              stress-free.
            </p>
          </div>
        </div>

        {/* Preparation details grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {preparations.map((prep, index) => (
            <div key={index} className="pb-8 border-b border-gray-200 last:border-b-0">
              <div className="text-4xl mb-4">{prep.icon}</div>
              <h3 className="text-gold text-sm tracking-widest uppercase font-light mb-3">
                {prep.title}
              </h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">{prep.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer message */}
        <div className="mt-20 p-8 md:p-12 bg-black text-white text-center">
          <p className="text-lg font-light mb-2">We'll see you soon.</p>
          <p className="text-gold font-light text-base tracking-widest">
            Get ready to taste, indulge, and discover A Tease in Every Bite.
          </p>
        </div>
      </div>
    </section>
  );
}
