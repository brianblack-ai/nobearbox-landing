const photos = [
  {
    caption: 'Before: Trash area hit',
    bgColor: 'bg-gray-400',
  },
  {
    caption: 'During: Install in progress',
    bgColor: 'bg-gray-500',
  },
  {
    caption: 'After: Clean, secured setup',
    bgColor: 'bg-gray-600',
  },
];

export default function ProofGallery() {
  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Built for bear country.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {photos.map((photo, index) => (
              <div key={index}>
                <div
                  className={`${photo.bgColor} aspect-square rounded-lg flex items-center justify-center mb-3`}
                >
                  <svg
                    className="w-16 h-16 text-white/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-center text-sm font-medium">{photo.caption}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500">
            Real customer photos coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
