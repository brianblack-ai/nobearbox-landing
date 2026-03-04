'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', action: scrollToTop },
    { label: 'Product', action: () => scrollToSection('why') },
    { label: 'Models', action: () => scrollToSection('models') },
    { label: 'FAQ', action: () => scrollToSection('faq') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <footer className="bg-forest-950 text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/brandmark.png"
                alt="No Bear Box"
                width={120}
                height={120}
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg">No Bear Box</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Steel bear-resistant trash enclosures designed for properties in bear country.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/70 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/70 mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <a
                  href="mailto:info@nobearbox.com"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  info@nobearbox.com
                </a>
              </p>
              <div>
                <p className="text-white/70 font-medium mb-1">Location</p>
                <p className="text-white/50">
                  Based near Allentown, Pennsylvania.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} No Bear Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
