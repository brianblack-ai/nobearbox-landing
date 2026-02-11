'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Mission */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="No Bear Box"
                width={32}
                height={32}
                className="text-white"
              />
              <span className="text-white font-bold text-lg">No Bear Box</span>
            </div>
            <p className="text-white/70 text-sm">
              Modular, painted steel bear boxes that keep bears out and trash in. Built for properties
              where bears and houses overlap.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('for-who')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  For Who
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('details')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Details
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-white/70 text-sm mb-4">
              <a
                href="mailto:info@nobearbox.com"
                className="hover:text-white transition-colors"
              >
                info@nobearbox.com
              </a>
            </p>
            <p className="text-white/70 text-sm">
              <span className="block font-medium text-white mb-1">
                Service Regions:
              </span>
              Serving the Poconos, PA and similar bear-country regions.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} No Bear Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
