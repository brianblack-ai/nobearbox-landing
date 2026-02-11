const problems = [
  'Trash scattered across lawns and driveways',
  'Fines and warnings from municipalities and HOAs',
  'Guest complaints and bad reviews for short-term rentals',
  'Costly cleanup and repeated service calls',
  'Bears learn properties that feed them, then return',
];

export default function ProblemStrip() {
  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Bears are not polite neighbors.
          </h2>

          {/* Problems List */}
          <div className="space-y-4 mb-8">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-brand-red mr-4 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg">{problem}</p>
              </div>
            ))}
          </div>

          {/* Bottom Line */}
          <div className="border-t-2 border-brand-red pt-6">
            <p className="text-center text-lg font-medium italic">
              Once a bear wins, it comes back with friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
