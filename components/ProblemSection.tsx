import Image from 'next/image';

const bullets = [
  'Bears learn fast. One easy meal and they come back every night.',
  'Trash becomes a reliable food source for the whole neighborhood.',
  'Property damage follows. Siding, decks, garage doors, dumpsters.',
  'Habituated bears get euthanized. Unsecured trash is the root cause.',
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-widest text-brand-red font-semibold mb-3">
              THE PROBLEM
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Trash attracts bears.<br />
              Ordinary bins lose.
            </h2>
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo */}
          <div className="relative h-[320px] md:h-[380px] md:mt-6 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10 overflow-hidden">
            <Image
              src="/trashBear-1.jpeg"
              alt="Bear getting into residential trash cans"
              fill
              className="w-full h-full object-cover object-[center_30%] contrast-[1.1] saturate-[1.05]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
