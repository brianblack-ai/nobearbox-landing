'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  onGetQuote: () => void;
  onRequestBulkPricing: () => void;
}

export default function Header({ onGetQuote, onRequestBulkPricing }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Product', id: 'why' },
    { label: 'Models', id: 'models' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3"
          >
            <Image
              src="/brandmark.png"
              alt="No Bear Box"
              width={120}
              height={120}
              className="h-8 lg:h-10 w-auto"
            />
            <span className="text-white font-bold text-lg lg:text-xl tracking-tight">
              No Bear Box
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onRequestBulkPricing}
              className="px-4 py-2 border border-white/30 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
            >
              Bulk Pricing
            </button>
            <button
              onClick={onGetQuote}
              className="px-5 py-2 bg-brand-red text-white text-sm font-bold rounded hover:bg-red-700 transition-colors"
            >
              Check Availability
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white/80 hover:text-white py-2 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onRequestBulkPricing(); }}
                className="block w-full text-left px-4 py-2 border border-white/30 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
              >
                Request Bulk Pricing
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onGetQuote(); }}
                className="block w-full text-left px-4 py-2 bg-brand-red text-white text-sm font-bold rounded hover:bg-red-700 transition-colors"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
