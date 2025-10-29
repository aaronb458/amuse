'use client';

export function FooterSection() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-island-teal/30">
      {/* Decorative wave accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-island-teal to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-light text-lg tracking-widest mb-2">AMUSE</h3>
            <p className="text-island-teal text-xs tracking-[0.2em]">BOUCHE</p>
            <p className="text-white/50 font-light text-sm mt-4 leading-relaxed">
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
                <a href="#" className="text-white/60 hover:text-white font-light transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white font-light transition">
                  Details
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white font-light transition">
                  Preparation
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
                  href="tel:242-815-8687"
                  className="text-white/60 hover:text-white font-light transition"
                >
                  242-815-8687
                </a>
              </li>
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
            <h4 className="text-gold text-xs tracking-widest uppercase mb-4 font-light">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-white font-light transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white font-light transition">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <p className="text-white/40 text-xs font-light text-center tracking-widest">
            © 2024 AMUSE-BOUCHE. A Tease in Every Bite. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
