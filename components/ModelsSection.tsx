'use client';

import Image from 'next/image';

interface ModelsSectionProps {
  onGetQuote: () => void;
}

const models = [
  {
    name: 'Model 195',
    fits: 'Fits 1 x 65 or 95 gallon bin',
    price: '$1,199',
    popular: false,
    image: '/NBB195.webp',
  },
  {
    name: 'Model 265',
    fits: 'Fits 2 x 65 gallon bins',
    price: '$1,499',
    popular: false,
    image: '/NBB295.webp',
  },
  {
    name: 'Model 295',
    fits: 'Fits 2 x 95 gallon bins',
    price: '$1,799',
    popular: true,
    image: '/NBB265-Angle-Retouch.webp',
  },
  {
    name: 'Model 395',
    fits: 'Fits 3 x 95 gallon bins',
    price: '$2,499',
    popular: false,
    image: '/NBB395.webp',
  },
  {
    name: 'Model 495',
    fits: 'Fits 4 x 95 gallon bins',
    price: '$3,299',
    popular: false,
    image: '/NBB495.webp',
  },
];

export default function ModelsSection({ onGetQuote }: ModelsSectionProps) {
  return (
    <section id="models" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-brand-red font-semibold mb-3">
            THE SOLUTION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Models
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All models are heavy-duty, 12 gauge painted steel with integrated carabiner latch systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {models.map((model) => (
            <div
              key={model.name}
              className={`rounded-xl overflow-hidden card-hover flex flex-col ${
                model.popular
                  ? 'bg-white ring-2 ring-amber-400 shadow-xl scale-[1.03] relative z-10'
                  : 'bg-stone-50 border border-gray-200'
              }`}
            >
              {/* Most Popular badge */}
              {model.popular && (
                <div className="bg-amber-400 text-gray-900 text-[11px] font-bold tracking-widest uppercase text-center py-1.5">
                  Most Popular
                </div>
              )}

              {/* Product image */}
              <div className="relative bg-gray-100 h-48 overflow-hidden">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{model.name}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">{model.price}</p>
                <p className="text-sm text-gray-500 mb-4">{model.fits}</p>
                <div className="mt-auto">
                  <button
                    onClick={onGetQuote}
                    className="w-full py-2.5 bg-brand-red text-white font-bold rounded hover:bg-red-700 transition-colors text-sm"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
