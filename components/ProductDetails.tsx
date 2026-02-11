const details = [
  'Heavy-duty painted steel construction',
  'Modular design for scalable configurations',
  'Integrated latch with steel cable and tethered carabiner',
  'Designed for 65- and 95-gallon cans',
  'Built for residential and multi-property use in bear country',
];

const models = [
  {
    category: 'Commercial',
    items: [
      { name: 'Single', description: 'fits (1) 95-gallon can', model: 'Model #195' },
      { name: 'Double', description: 'fits (2) 95-gallon cans', model: 'Model #295' },
    ],
  },
  {
    category: 'Residential',
    items: [
      { name: 'Double', description: 'fits (2) 65-gallon cans', model: 'Model #265' },
    ],
  },
];

export default function ProductDetails() {
  return (
    <section id="details" className="bg-white text-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The No Bear Box System
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            All current models are modular and can be joined to create custom configurations for multi-unit properties.
          </p>

          {/* Models Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {models.map((category, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4 text-brand-red">{category.category}</h4>
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="border-l-4 border-brand-red pl-4">
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                        <div className="text-sm font-medium text-gray-800 mt-1">{item.model}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="ml-4 text-lg">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
