'use client';

import Image from 'next/image';
import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-island-teal/30">
      {/* Decorative wave accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-island-teal to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="relative h-12 w-32 mb-4">
              <Image
                src="/images/Amuse-Bouche-Logo.png"
                alt="Amuse-Bouche"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/50 font-light text-sm leading-relaxed">
              A Tease in Every Bite
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-4 font-light">
              Experience
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#details"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Details
                </Link>
              </li>
              <li>
                <Link href="/#why" className="text-white/60 hover:text-white font-light transition">
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#prepare"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-white/60 hover:text-white font-light transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Booking & Reviews */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-4 font-light">Booking</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#booking"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Reserve Now
                </Link>
              </li>
            </ul>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-4 mt-6 font-light">
              Leave a Review
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://share.google/Pyfx2dTVucQAKaAnk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Google Reviews
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Profile/amusebouchetours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  TripAdvisor
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-4 font-light">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+1-242-815-8687"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  +1 (242) 815-8687
                </a>
              </li>
              <li className="text-white/40 text-xs">Call, Text, or WhatsApp</li>
              <li>
                <a
                  href="mailto:amusebouchetours@gmail.com"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  amusebouchetours@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-4 font-light">
              Follow Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/amusebouchetours?igsh=MWFjcTV6OXRxZnVwZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61585394240320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Profile/amusebouchetours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  TripAdvisor
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-4 font-light">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/waiver"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  Liability Waiver
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <p className="text-white/40 text-xs font-light text-center tracking-widest">
            © 2026 AMUSE-BOUCHE. A Tease in Every Bite. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
