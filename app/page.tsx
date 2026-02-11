'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemStrip from '@/components/ProblemStrip';
import SolutionIntro from '@/components/SolutionIntro';
import HowItWorks from '@/components/HowItWorks';
import AudienceSegments from '@/components/AudienceSegments';
import ProductDetails from '@/components/ProductDetails';
import InstallLogistics from '@/components/InstallLogistics';
import ProofGallery from '@/components/ProofGallery';
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
        <ProblemStrip />
        <SolutionIntro />
        <HowItWorks />
        <AudienceSegments onRequestBulkPricing={handleRequestBulkPricing} />
        <ProductDetails />
        <InstallLogistics />
        <ProofGallery />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {modalType === 'bulk' ? 'Request Bulk Pricing' : 'Get a Quote'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
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
