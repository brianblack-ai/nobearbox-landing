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
                {/* Illustration tile */}
                <div className="mb-6 flex justify-center">
                  {step.number === 1 && (
                    <svg className="w-32 h-32 animate-bounce-subtle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="30" width="60" height="50" fill="none" stroke="black" strokeWidth="3"/>
                      <rect x="35" y="40" width="15" height="25" fill="#DC2626" stroke="black" strokeWidth="2"/>
                      <rect x="52" y="40" width="15" height="25" fill="#DC2626" stroke="black" strokeWidth="2"/>
                      <path d="M 30 25 L 50 15 L 70 25" fill="none" stroke="black" strokeWidth="3" className="animate-arrow-down"/>
                    </svg>
                  )}
                  {step.number === 2 && (
                    <svg className="w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="20" width="60" height="60" fill="none" stroke="black" strokeWidth="3"/>
                      <rect x="45" y="20" width="30" height="25" fill="white" stroke="black" strokeWidth="3"/>
                      <circle cx="70" cy="32" r="4" fill="#DC2626" className="animate-pulse-subtle"/>
                      <path d="M 65 32 L 72 32" stroke="black" strokeWidth="2" strokeLinecap="round" className="animate-latch-click"/>
                    </svg>
                  )}
                  {step.number === 3 && (
                    <svg className="w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="30" width="70" height="50" fill="none" stroke="black" strokeWidth="3"/>
                      <rect x="30" y="40" width="15" height="25" fill="#DC2626" stroke="black" strokeWidth="2"/>
                      <circle cx="75" cy="25" r="8" fill="white" stroke="black" strokeWidth="2"/>
                      <path d="M 72 25 L 75 28 L 80 22" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" className="animate-checkmark"/>
                    </svg>
                  )}
                </div>

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
