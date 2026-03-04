'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Will this actually stop bears?',
    answer:
      'Yes. The steel enclosure and carabiner latch system are designed specifically for bear-country properties. Bears lack the grip and dexterity to operate the carabiner. The steel body cannot be pried open or chewed through.',
  },
  {
    question: 'Does it fit my bins?',
    answer:
      'We build models for standard 65-gallon and 95-gallon cans, which cover the vast majority of residential and commercial trash bins. If you are unsure, send us a photo of your bins and we will confirm the right model.',
  },
  {
    question: 'How does the latch work?',
    answer:
      'A tethered carabiner clips through a steel cable loop to hold the lid shut. People pop it open in two seconds. Bears cannot. No keys, no combinations, no batteries. Your trash service can open it on pickup day without any special tools or instructions.',
  },
  {
    question: 'Do I need to roll the cans out on trash day?',
    answer:
      'That depends on your trash service. Some services open the box and pull the cans to the truck. Others prefer cans curbside. Either way, the carabiner is easy for your crew to open and re-latch.',
  },
  {
    question: 'Can units be joined together?',
    answer:
      'Yes. All modular models bolt together side by side, so you can create longer runs for multi-unit properties. Add more units later as your needs grow. Single-bin models like the 195 are standalone.',
  },
  {
    question: 'What about bulk orders?',
    answer:
      'We offer bulk pricing for multi-unit orders. Request a quote and let us know how many properties and bins you need to cover.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-stone-50 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
