'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#details', label: 'Details' },
    { href: '#why', label: 'Why Us' },
    { href: '#prepare', label: 'Prepare' },
    { href: '#booking', label: 'Book Now' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group">
            <div className="relative h-12 w-32">
              <Image
                src="/images/Amuse-Bouche-Logo.png"
                alt="Amuse-Bouche"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Navigation Links - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold font-light text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#booking"
            className="px-6 py-2 bg-gold/90 hover:bg-gold text-black font-light tracking-widest uppercase text-xs transition-all duration-300"
          >
            Reserve
          </a>
        </div>
      </nav>
    </header>
  );
}
