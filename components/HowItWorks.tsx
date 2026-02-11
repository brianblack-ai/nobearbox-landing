const steps = [
  {
    number: 1,
    title: 'Bins stay inside the bear box',
    description: 'Your trash cans remain secured in the enclosure',
  },
  {
    number: 2,
    title: 'Secure the access panels',
    description: 'Close and lock to prevent bear access',
  },
  {
    number: 3,
    title: 'Trash service can access the cans on pickup day without rolling them out',
    description: 'No extra steps required for Waste Management',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white text-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red text-white text-2xl font-bold rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* What's Included Note */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-sm font-medium text-gray-700">
              <span className="font-bold">No extra steps required for Waste Management.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
