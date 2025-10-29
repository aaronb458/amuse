'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80"
          alt="Elegant dining table"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Logo/Brand mark */}
      <div className="absolute top-8 left-8 z-20">
        <h2 className="text-white font-light text-xl tracking-widest">AMUSE</h2>
        <p className="text-gold text-xs tracking-[0.2em] mt-1">BOUCHE</p>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6 font-light">
            A Culinary Journey
          </p>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            A Tease in Every Bite
          </h1>

          <p className="text-white/90 text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto">
            The Bahamas has never tasted like this.
          </p>

          <p className="text-white/80 text-md md:text-lg font-light mb-12 max-w-2xl mx-auto">
            Four restaurants. Twelve guests. Endless flavor.
          </p>

          <p className="text-white/70 text-sm font-light leading-relaxed mb-12 max-w-xl mx-auto">
            A private, high-end culinary journey through Nassau's most celebrated restaurants —
            where every bite tells a story, and every detail is designed for indulgence.
          </p>

          <button className="px-10 py-4 bg-gold/90 hover:bg-gold text-black font-light tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-lg">
            Book Your Experience
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-pulse">
        <p className="text-white text-xs tracking-widest mb-2">SCROLL</p>
        <svg
          className="w-6 h-6 text-white mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
