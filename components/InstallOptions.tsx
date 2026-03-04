export default function InstallOptions() {
  const options = [
    {
      title: 'Pro installation',
      tag: 'Most popular',
      description:
        'We handle placement, leveling, and anchoring so your property is secured without lifting a finger. Correct installation means your box stays put in wind and weather.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.364-5.364a2.121 2.121 0 113 3l5.364 5.364m0 0l4.243-4.243m-4.243 4.243L21 12m-4.243 4.243L9.879 9.879" />
        </svg>
      ),
    },
    {
      title: 'Rollout support',
      tag: 'Multi-property',
      description:
        'Managing multiple properties? We coordinate delivery, placement, and anchoring across your portfolio. One point of contact for the entire rollout.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
    },
    {
      title: 'Pickup and self-install',
      tag: 'Available',
      description:
        'For those with the equipment and crew, units are available for pickup. Fully built. No assembly required. You handle transport and placement.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="install" className="bg-stone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Install options that fit how you work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every property is different. Choose the install path that makes sense for yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <div
              key={option.title}
              className={`bg-white rounded-xl p-8 border card-hover ${
                index === 0 ? 'border-brand-red ring-1 ring-brand-red/20' : 'border-gray-200'
              }`}
            >
              {/* Tag */}
              <span
                className={`inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-5 ${
                  index === 0
                    ? 'bg-brand-red/10 text-brand-red'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {option.tag}
              </span>

              <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-800 text-white rounded-lg mb-5">
                {option.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div className="max-w-2xl mx-auto mt-10 bg-white border border-gray-200 rounded-lg p-5 flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-gray-600">
            Send a photo of your bin area and we will confirm the right model and placement option for your property.
          </p>
        </div>
      </div>
    </section>
  );
}
