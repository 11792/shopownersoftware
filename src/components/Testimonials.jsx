import { motion as Motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Helped me set up online orders. Best decision for my bakery.',
    by: "Sarah's Cupcakes, London",
  },
  {
    quote: 'My customers can finally book appointments online. No more phone tag.',
    by: "Ahmed's Barbershop, Berlin",
  },
  {
    quote: 'Simple, affordable, and actually works. Rare combo.',
    by: "Maria's Boutique, Paris",
  },
]

function Testimonials() {
  return (
    <section className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold text-white glow-heading md:text-5xl">
          Loved by Shop Owners
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Motion.blockquote
              key={testimonial.by}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[#ff5757]/35 bg-[#111] p-5"
            >
              <p className="font-body text-base text-white/90">&quot;{testimonial.quote}&quot;</p>
              <footer className="mt-3 font-body text-sm text-[#ff5757]">- {testimonial.by}</footer>
            </Motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
