'use client';

export function DetailsSection() {
  const details = [
    {
      label: 'Group Size',
      value: '12 guests maximum per vehicle (larger groups may be accommodated)',
      icon: '👥',
    },
    {
      label: 'Duration',
      value: 'Approximately 5 hours',
      icon: '🕒',
    },
    {
      label: 'Restaurant Stops',
      value: "Through 4 of Nassau's most celebrated establishments",
      icon: '🍽️',
    },
    {
      label: 'Per Stop',
      value: 'Three signature dishes + paired drinks',
      icon: '🍷',
    },
    {
      label: 'Transportation',
      value: 'We pick your group up at one designated location',
      icon: '🚗',
    },
    {
      label: 'Hospitality',
      value: 'Dedicated host to guide your journey',
      icon: '✨',
    },
  ];

  return (
    <section id="details" className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Experience Details</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">A Feast for the Senses</h2>
          <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
            Every detail is curated to create an unforgettable evening of taste, elegance, and
            discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="p-8 border border-white/10 hover:border-gold/50 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {detail.icon}
              </div>
              <h3 className="text-gold text-sm tracking-widest uppercase mb-3 font-light">
                {detail.label}
              </h3>
              <p className="text-white/80 font-light text-base leading-relaxed">{detail.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-gold/30 bg-gold/5">
          <p className="text-white/80 font-light text-center leading-relaxed">
            Each experience is a feast for the senses — a taste of the island's culinary artistry,
            hospitality, and charm, shared with fellow food lovers who appreciate the finer things.
          </p>
        </div>
      </div>
    </section>
  );
}
