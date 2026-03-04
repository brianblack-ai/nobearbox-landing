'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ProductSection from '@/components/ProductSection';
import ModelsSection from '@/components/ModelsSection';
import DeliverySection from '@/components/DeliverySection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'quote' | 'bulk'>('quote');

  const handleGetQuote = () => {
    setModalType('quote');
    setIsModalOpen(true);
  };

  const handleRequestBulkPricing = () => {
    setModalType('bulk');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header
        onGetQuote={handleGetQuote}
        onRequestBulkPricing={handleRequestBulkPricing}
      />

      <main>
        <Hero onGetQuote={handleGetQuote} />
        <ProblemSection />
        <ModelsSection onGetQuote={handleGetQuote} />
        <ProductSection />
        <DeliverySection />
        <Testimonials />
        <FAQ />

        {/* BearXing collage banner */}
        <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden">
          <Image
            src="/BearXingCollage.webp"
            alt="Bear crossing signs and bear country imagery collage"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay to settle it into the page */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-stone-50 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
        </div>

        <FinalCTA
          onGetQuote={handleGetQuote}
          onRequestBulkPricing={handleRequestBulkPricing}
        />
      </main>

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {modalType === 'bulk' ? 'Request Bulk Pricing' : 'Get a Quote'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <LeadForm defaultType={modalType} onClose={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
