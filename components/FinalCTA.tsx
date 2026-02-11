'use client';

import { useState } from 'react';
import LeadForm from './LeadForm';

export default function FinalCTA() {
  const [formType, setFormType] = useState<'quote' | 'bulk' | null>(null);

  if (formType) {
    return (
      <section id="contact" className="bg-white text-black py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => setFormType(null)}
              className="text-gray-600 hover:text-black flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {formType === 'bulk' ? 'Request Bulk Pricing' : 'Get a Quote'}
          </h2>
          <LeadForm defaultType={formType} />
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white text-black py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red rounded-full mb-8">
          <span className="text-brand-red text-sm font-bold tracking-wider">
            READY TO START
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to stop the bear buffet?
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Get a custom quote or request bulk pricing for your properties. We will
          respond within 1 business day with fit confirmation and next steps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setFormType('quote')}
            className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white text-lg font-bold rounded hover:bg-red-700 transition-colors"
          >
            Get a Quote
          </button>
          <button
            onClick={() => setFormType('bulk')}
            className="w-full sm:w-auto px-8 py-4 border-2 border-black text-black text-lg font-bold rounded hover:bg-black hover:text-white transition-colors"
          >
            Request Bulk Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
