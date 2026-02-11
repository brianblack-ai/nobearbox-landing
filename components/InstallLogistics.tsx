const options = [
  {
    title: 'DIY-friendly setup',
    description: 'Designed to be straightforward with included instructions and hardware',
  },
  {
    title: 'Pro installation',
    description: 'Available in select regions for turnkey setup',
  },
  {
    title: 'Rollout support for multi-property sites',
    description: 'Coordinated installation across your entire portfolio',
  },
];

export default function InstallLogistics() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Install options that match reality.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {options.map((option, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-white/70">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-red/10 border border-brand-red rounded-lg p-6 text-center">
            <p className="text-lg">
              Send a photo of your bin area and we will confirm the right model and
              placement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
