export default function FeaturesSection() {
  const features = [
    {
      category: 'Construction',
      items: [
        'Heavy-duty painted steel body',
        'Welded seams for maximum strength',
        'Powder coat or paint finish resists rust and weather',
        'Mounting holes for ground or pad anchoring',
      ],
    },
    {
      category: 'Latch System',
      items: [
        'Steel cable with tethered carabiner latch',
        'Easy open for people and trash service',
        'Bears cannot operate the carabiner mechanism',
        'No keys, no combinations, no batteries',
      ],
    },
    {
      category: 'Modular Design',
      items: [
        'Modular units bolt together side by side',
        'Create custom length runs for any property',
        'Add units later as your needs grow',
        'Single and multi-bin configurations available',
      ],
    },
    {
      category: 'Sizing',
      items: [
        'Designed for standard 65-gallon cans',
        'Designed for standard 95-gallon cans',
        'Easy roll-in, roll-out on trash day',
        'Enough clearance for lid-open placement',
      ],
    },
  ];

  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built to take what bears can dish out
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every detail is designed for bear country. Steel construction,
            a latch that stops bears but not your trash service, and modular sizing that fits any property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((group) => (
            <div key={group.category} className="bg-stone-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center">
                <span className="w-2 h-2 bg-brand-red rounded-full mr-3" />
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-forest-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Latch callout */}
        <div className="mt-12 max-w-3xl mx-auto bg-forest-900 text-white rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">The carabiner latch concept</h4>
              <p className="text-white/80 leading-relaxed">
                Your trash service can pop the carabiner and open the lid in seconds. Bears lack the
                dexterity and grip to work the latch mechanism. No keys to lose, no codes to share
                with guests, no batteries to replace. It just works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
