function Contact() {
  return (
    <section id="contact" className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Talk About Your Biggest Business Challenge
          </h2>
          <p className="mt-4 font-body text-white/80">
            DM me on Instagram to talk, or share your biggest business challenge
            so it can help improve solutions for other small businesses too.
            You can email me as well.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://www.instagram.com/shopownersoftware/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#ff5757] px-4 py-3 font-body font-semibold text-white"
            >
              DM on Instagram
            </a>
            <a
              href="mailto:shopownersoftware@gmail.com"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#ff5757] px-4 py-3 font-body font-semibold text-[#ff5757]"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-[#111] to-[#1c1c1c] p-6">
          <div className="space-y-4">
            <p className="text-5xl">📩📈</p>
            <p className="font-body text-white/85">
              Real business problems inspire better tools. Share yours and help
              shape what gets built next.
            </p>
            <div className="rounded-xl border border-[#ff5757]/40 bg-black/40 p-4">
              <p className="font-body text-sm text-white/80">
                What challenge are you facing right now?
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-[#ff5757]">
                <li>• Taking orders manually?</li>
                <li>• Missing bookings?</li>
                <li>• Inventory chaos?</li>
              </ul>
            </div>
          </div>
          <span className="absolute right-6 top-6 text-3xl animate-bounce">☕</span>
          <span className="absolute bottom-8 left-8 text-3xl animate-pulse">{'</>'}</span>
          <span className="absolute bottom-8 right-8 text-3xl animate-bounce">🛍️</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
