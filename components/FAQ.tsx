'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Will this stop bears?',
    answer:
      'Nothing is magic, but removing access to trash removes the reward. When bears cannot access food, they move on.',
  },
  {
    question: 'Does it fit my bins?',
    answer:
      'Designed for standard 65- and 95-gallon cans. Confirm your fit with a quick quote request.',
  },
  {
    question: 'How does it stay closed?',
    answer:
      'Every No Bear Box ships with a latch plus a steel cable and tethered carabiner to keep panels secured.',
  },
  {
    question: 'Do the cans need to be rolled out on trash day?',
    answer:
      'No. Waste Management can access the cans without any extra steps.',
  },
  {
    question: 'Are they modular?',
    answer:
      'Yes. All current models are modular and can be joined to create custom configurations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-brand-red flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
