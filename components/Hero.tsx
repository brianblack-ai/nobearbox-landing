'use client';

import Image from 'next/image';

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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[65vh] min-h-[500px] max-h-[800px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/LakeCabinHero.webp"
          alt="Lakeside cabin in bear country surrounded by forest"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Left-to-right gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.25) 100%)',
          }}
        />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-black/0 via-black/25 to-white" />
      </div>

      {/* Content - left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-white/80 mb-4">
            Built for properties in bear country
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5">
            Keep bears out.
            <br />
            Keep trash in.
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-md">
            Steel bear-resistant trash enclosures designed for real bear country.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={onGetQuote}
              className="px-7 py-3.5 bg-brand-red text-white font-bold rounded hover:bg-red-700 transition-colors text-base"
            >
              Check Availability
            </button>
            <button
              onClick={() => scrollToSection('models')}
              className="px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded hover:bg-white/20 transition-colors text-base"
            >
              View Models
            </button>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-white/70">
            {[
              'All-steel construction',
              'Secure latch system',
              'Built in Pennsylvania',
            ].map((item) => (
              <div key={item} className="flex items-center">
                <svg className="w-4 h-4 text-brand-red mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
