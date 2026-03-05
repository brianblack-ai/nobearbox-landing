'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote:
      'Had bears ripping through our cans every week for two years, put the box out, not a single incident since.',
    name: 'D. Kline',
    role: 'Property Manager',
    location: 'Pocono Pines, PA',
  },
  {
    quote:
      'Trash service had no issues with the latch. They figured it out on the first pickup. Bears have not touched the cans.',
    name: 'M. Pruitt',
    role: 'Homeowner',
    location: 'Lake Harmony, PA',
  },
  {
    quote:
      'Ordered the 295 for our rental, looks clean sitting next to the garage.',
    name: 'J. Reeves',
    role: 'Short-Term Rental Owner',
    location: 'Jim Thorpe, PA',
  },
  {
    quote:
      'Solid unit. Heavier than I expected, which is a good thing. Bolted it to the pad and it has not moved.',
    name: 'T. Novak',
    role: 'Homeowner',
    location: 'Tobyhanna, PA',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-advance every 6s
  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [reducedMotion, paused, next]);

  const goTo = (index: number) => setCurrent(index);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    setPaused(false);
    const threshold = 50;
    if (touchDeltaX.current < -threshold) {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    } else if (touchDeltaX.current > threshold) {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const fade = reducedMotion ? '' : 'transition-opacity duration-500 ease-in-out';

  return (
    <section className="relative py-24 md:py-32 min-h-[520px] overflow-hidden">
      {/* Background image -- anchor to top where the cabin + treeline are */}
      <div className="absolute inset-0">
        <Image
          src="/LakeCabinTestimonial.webp"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What owners are saying
          </h2>
        </div>

        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Testimonial card */}
          <div className="relative min-h-[240px]">
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                className={`${
                  index === current
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                } ${fade}`}
                aria-hidden={index !== current}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6 text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/50 text-sm">
                      {t.role}, {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8" role="tablist">
            {testimonials.map((t, index) => (
              <button
                key={t.name}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === current ? 'true' : undefined}
                role="tab"
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-white scale-110'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
