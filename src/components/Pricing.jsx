const tiers = [
  {
    name: 'Starter',
    price: 'EUR499',
    features: ['5-page website', 'Mobile optimized', 'Contact form', '2 rounds of revisions'],
  },
  {
    name: 'Business',
    price: 'EUR999',
    popular: true,
    features: [
      'Everything in Starter',
      'Online ordering/booking',
      'WhatsApp integration',
      '4 rounds of revisions',
    ],
  },
  {
    name: 'Custom',
    price: 'EUR1999+',
    features: [
      'Fully custom software',
      'Any features you need',
      'Ongoing support',
      'Unlimited revisions',
    ],
  },
]

function Pricing() {
  return (
    <section className="bg-[#0d0d0d] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-2xl border p-6 transition hover:scale-[1.02] ${
                tier.popular
                  ? 'border-[#ff5757] bg-black shadow-[0_0_25px_rgba(255,87,87,0.35)]'
                  : 'border-white/20 bg-black'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 right-4 rounded-full bg-[#ff5757] px-3 py-1 font-body text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-3xl text-white">{tier.name}</h3>
              <p className="mt-2 font-body text-2xl font-bold text-[#ff5757]">{tier.price}</p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="font-body text-sm text-white/85">
                    • {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
