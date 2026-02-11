'use client';

import LeadForm from './LeadForm';
import { useState } from 'react';

interface HeroProps {
  onGetQuote: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
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
    <section className="relative bg-black text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red rounded-full mb-8">
            <span className="text-brand-red text-sm font-bold tracking-wider">
              BEAR COUNTRY
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Keep bears out. Keep trash in.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-6 max-w-3xl mx-auto text-balance">
            No Bear Box manufactures modular, painted steel bear boxes designed for residential and multi-property use in bear country.
          </p>

          {/* Supporting Line */}
          <p className="text-base md:text-lg text-white/70 mb-10 max-w-3xl mx-auto text-balance">
            Standard models for 65- and 95-gallon cans. Modular units can be joined for custom runs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onGetQuote}
              className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white text-lg font-bold rounded hover:bg-red-700 transition-colors"
            >
              Get a Quote
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white text-lg font-bold rounded hover:bg-white hover:text-black transition-colors"
            >
              See How It Works
            </button>
          </div>

          {/* Trust Markers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm text-white/60">
            <div className="flex items-center justify-center">
              <svg
                className="w-4 h-4 text-brand-red mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Built in the USA</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-4 h-4 text-brand-red mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Painted steel</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-4 h-4 text-brand-red mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Fits common bin sizes</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-4 h-4 text-brand-red mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Bulk pricing available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
