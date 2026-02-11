const features = [
  {
    title: 'Secure steel enclosure',
    description: 'Heavy-duty construction that stands up to bears and weather',
  },
  {
    title: 'Locking lid and door system',
    description: 'Bear-resistant access that humans can operate easily',
  },
  {
    title: 'Anchoring options for windy areas',
    description: 'Keep it stable even in mountain weather conditions',
  },
  {
    title: 'Built to take hits and keep working',
    description: 'Overbuilt on purpose for years of reliable protection',
  },
];

export default function SolutionIntro() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A real fix, not another hack.
          </h2>
          <p className="text-lg text-white/80">
            No Bear Box manufactures purpose-built modular bear boxes that house your trash cans
            outdoors and lock down access. Designed for mountain properties where bears
            and houses overlap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
