const benefits = [
  {
    title: 'Fully built units. No assembly.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="black" strokeWidth="3"/>
        <path d="M 35 50 L 45 60 L 65 40" fill="none" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-checkmark"/>
        <circle cx="75" cy="30" r="3" fill="black"/>
        <circle cx="75" cy="70" r="3" fill="black"/>
      </svg>
    ),
  },
  {
    title: 'Carabiner latch. Easy for people. Tough for bears.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="15" ry="25" fill="none" stroke="black" strokeWidth="3"/>
        <rect x="48" y="30" width="4" height="10" fill="#DC2626" className="animate-latch-slide"/>
        <path d="M 65 45 L 75 45 L 75 55 L 65 55" fill="none" stroke="black" strokeWidth="3"/>
        <rect x="30" y="40" width="15" height="20" fill="white" stroke="black" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Modular units join for custom runs.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="30" width="25" height="40" fill="none" stroke="black" strokeWidth="3"/>
        <rect x="42" y="30" width="25" height="40" fill="none" stroke="black" strokeWidth="3"/>
        <rect x="69" y="30" width="16" height="40" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 2" className="animate-module-slide"/>
        <path d="M 75 50 L 70 50" stroke="#DC2626" strokeWidth="2" className="animate-arrow-connect"/>
      </svg>
    ),
  },
  {
    title: 'Fits common bin sizes.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="25" width="40" height="50" fill="none" stroke="black" strokeWidth="3"/>
        <rect x="40" y="35" width="20" height="30" fill="#DC2626" stroke="black" strokeWidth="2"/>
        <path d="M 25 40 L 30 40 M 70 40 L 75 40 M 25 50 L 30 50 M 70 50 L 75 50 M 25 60 L 30 60 M 70 60 L 75 60" stroke="black" strokeWidth="2" strokeLinecap="round" className="animate-dimension-pulse"/>
      </svg>
    ),
  },
];

export default function BearBoxBenefits() {
  return (
    <section className="bg-white text-black py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How bear boxes save you headaches
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                {benefit.icon}
              </div>
              <p className="text-base font-medium text-gray-800">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
