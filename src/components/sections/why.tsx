'use client';

import Image from 'next/image';

export function WhySection() {
  return (
    <section id="why" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background3.jpeg"
          alt="Scenic bahamas sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Why Choose Us</p>

        <h2 className="text-4xl md:text-5xl font-light text-white mb-12">
          Because You Deserve More Than a Meal
        </h2>

        <p className="text-white/90 font-light text-xl mb-8 leading-relaxed">
          You deserve a moment.
        </p>

        <p className="text-white/80 font-light text-lg mb-16 leading-relaxed max-w-3xl mx-auto">
          This tour is your invitation to slow down, sip, savor, and connect. Whether you're
          celebrating, exploring, or simply treating yourself, Amuse-Bouche transforms dining into
          an unforgettable journey of taste and elegance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Every Stop', desc: 'An indulgence' },
            { title: 'Every Bite', desc: 'A memory' },
            { title: 'Every Moment', desc: 'Pure elegance' },
          ].map((item, idx) => (
            <div key={idx} className="p-6">
              <p className="text-gold text-sm tracking-widest uppercase font-light mb-2">
                {item.title}
              </p>
              <p className="text-white/70 font-light text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-black font-light tracking-widest uppercase text-sm transition-all duration-300">
          Reserve Now
        </button>
      </div>
    </section>
  );
}
