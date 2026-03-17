import { motion as Motion } from 'framer-motion'
import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <section id="contact" className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 font-body text-white/80">
            Tell me about your business. I&apos;ll tell you how I can help.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="mailto:shopownersoftware@gmail.com"
              className="inline-flex min-h-[44px] items-center rounded-lg border border-[#ff5757] px-4 py-2 font-body text-[#ff5757]"
            >
              shopownersoftware@gmail.com
            </a>
            <a
              href="https://www.instagram.com/shopownersoftware/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-lg border border-[#ff5757] px-4 py-2 font-body text-[#ff5757]"
            >
              @shopownersoftware
            </a>
          </div>

          <form onSubmit={onSubmit} className="mt-8 space-y-3">
            <input
              required
              placeholder="Name"
              className="min-h-[44px] w-full rounded-lg border border-white/20 bg-[#121212] px-3 py-2 font-body text-white"
            />
            <input
              required
              placeholder="Business Type"
              className="min-h-[44px] w-full rounded-lg border border-white/20 bg-[#121212] px-3 py-2 font-body text-white"
            />
            <textarea
              required
              placeholder="Message"
              rows={4}
              className="w-full rounded-lg border border-white/20 bg-[#121212] px-3 py-2 font-body text-white"
            />
            <button
              type="submit"
              className="min-h-[44px] rounded-lg bg-[#ff5757] px-5 py-3 font-body font-semibold text-white"
            >
              Send Message
            </button>
          </form>
          {submitted && (
            <Motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 font-body text-[#ff5757]"
            >
              Message sent! I will reply soon.
            </Motion.p>
          )}
        </div>

        <div className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-[#111] to-[#1c1c1c] p-6">
          <div className="space-y-4">
            <p className="text-5xl">🧑‍💻🤝🏪</p>
            <p className="font-body text-white/85">
              Developer + Shop Owner collaboration in action.
            </p>
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
