'use client';

interface FinalCTAProps {
  onGetQuote: () => void;
  onRequestBulkPricing: () => void;
}

export default function FinalCTA({ onGetQuote, onRequestBulkPricing }: FinalCTAProps) {
  return (
    <section id="contact" className="bg-black py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
          Ready to stop the bear buffet?
        </h2>

        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          Get a custom quote or request bulk pricing for your properties.
          Response within 1 business day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetQuote}
            className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white text-lg font-bold rounded hover:bg-red-700 transition-colors"
          >
            Get a Quote
          </button>
          <button
            onClick={onRequestBulkPricing}
            className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white text-lg font-bold rounded hover:bg-white/10 transition-colors"
          >
            Request Bulk Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
