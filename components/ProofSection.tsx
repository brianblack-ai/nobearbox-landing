'use client';

import Image from 'next/image';
import { useState } from 'react';

function SafeImage({ src, alt, ...props }: { src: string; alt: string; fill?: boolean; className?: string; sizes?: string; priority?: boolean }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 bg-stone-100 flex items-center justify-center">
        <div className="text-center p-4">
          <svg className="w-10 h-10 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
          <p className="text-xs text-gray-400">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={props.fill}
      className={props.className}
      sizes={props.sizes}
      onError={() => setError(true)}
    />
  );
}

export default function ProofSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See it in action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real product. Real properties. Built to handle what bear country throws at it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Banner mock */}
          <div className="md:col-span-2 bg-gray-100 rounded-xl overflow-hidden relative aspect-[16/9]">
            <SafeImage
              src="/banner-mock.png"
              alt="No Bear Box banner showing product lineup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          {/* Features sheet */}
          <div className="bg-gray-100 rounded-xl overflow-hidden relative aspect-[3/4]">
            <SafeImage
              src="/features-sheet.png"
              alt="No Bear Box key features specification sheet"
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Flyers */}
          <div className="bg-gray-100 rounded-xl overflow-hidden relative aspect-[3/4]">
            <SafeImage
              src="/flyer-owner-best.png"
              alt="No Bear Box pricing flyer"
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden relative aspect-[3/4]">
            <SafeImage
              src="/flyer-rework.png"
              alt="No Bear Box reworked pricing flyer"
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Placeholder for future product shots */}
          <div className="bg-stone-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center aspect-[3/4]">
            <div className="text-center p-6">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <p className="text-sm text-gray-400">More photos coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
