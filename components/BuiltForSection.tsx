'use client';

interface BuiltForSectionProps {
  onRequestBulkPricing: () => void;
}

const segments = [
  {
    title: 'Property Managers',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    bullets: [
      'Reduce maintenance call volume',
      'Avoid fines and compliance issues',
      'Same setup across all your properties',
    ],
  },
  {
    title: 'HOAs',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    bullets: [
      'Standardize trash containment community-wide',
      'Reduce complaints from residents',
      'Clean, uniform look across the neighborhood',
    ],
  },
  {
    title: 'Homeowners',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    bullets: [
      'Stop nightly bear visits for good',
      'No more morning cleanup surprises',
      'Peace of mind, season after season',
    ],
  },
  {
    title: 'Short-Term Rentals',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    bullets: [
      'Prevent guest complaints about bears',
      'Protect your review ratings',
      'Professional look for your property',
    ],
  },
];

export default function BuiltForSection({ onRequestBulkPricing }: BuiltForSectionProps) {
  return (
    <section id="for-who" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for the people who deal with bears
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you manage one property or fifty, No Bear Box gives you
            a permanent solution that works from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="bg-stone-50 rounded-xl p-6 border border-gray-100 card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-800 text-white rounded-lg mb-5">
                {segment.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {segment.title}
              </h3>
              <ul className="space-y-2.5">
                {segment.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-forest-700 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onRequestBulkPricing}
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded hover:bg-gray-900 hover:text-white transition-colors"
          >
            Request Bulk Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
