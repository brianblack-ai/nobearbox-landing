'use client';

const segments = [
  {
    title: 'Property Managers',
    benefits: [
      'Reduce maintenance call volume',
      'Avoid fines and compliance issues',
      'Standardize across multiple properties with scalable modular units',
    ],
  },
  {
    title: 'Real Estate Investors',
    benefits: [
      'Protect property value',
      'Lower long-term operating costs',
      'Scalable solution for portfolio growth',
    ],
  },
  {
    title: 'Short-Term Rentals',
    benefits: [
      'Prevent guest complaints',
      'Maintain 5-star cleanliness ratings',
      'Show you run a professional operation',
    ],
  },
  {
    title: 'Homeowners',
    benefits: [
      'Stop the nightly bear visits',
      'No more cleanup in the morning',
      'Peace of mind for your family',
    ],
  },
];

interface AudienceSegmentsProps {
  onRequestBulkPricing: () => void;
}

export default function AudienceSegments({ onRequestBulkPricing }: AudienceSegmentsProps) {
  return (
    <section id="for-who" className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Built for people who manage property, not chaos.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {segments.map((segment, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-brand-red">
                {segment.title}
              </h3>
              <ul className="space-y-2">
                {segment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-sm text-white/80">
                    <svg
                      className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onRequestBulkPricing}
            className="px-8 py-3 bg-brand-red text-white font-bold rounded hover:bg-red-700 transition-colors"
          >
            Request Bulk Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
