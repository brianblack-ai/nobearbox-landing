'use client';

import Image from 'next/image';

interface HeaderProps {
  onGetQuote: () => void;
  onRequestBulkPricing: () => void;
}

export default function Header({ onGetQuote, onRequestBulkPricing }: HeaderProps) {
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

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="No Bear Box"
              width={40}
              height={40}
              className="text-white"
            />
            <span className="text-white font-bold text-xl tracking-tight">
              No Bear Box
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('for-who')}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              For Who
            </button>
            <button
              onClick={() => scrollToSection('details')}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Details
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onRequestBulkPricing}
              className="hidden sm:inline-flex items-center px-4 py-2 border border-white/30 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
            >
              Request Bulk Pricing
            </button>
            <button
              onClick={onGetQuote}
              className="inline-flex items-center px-5 py-2 bg-brand-red text-white text-sm font-bold rounded hover:bg-red-700 transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
