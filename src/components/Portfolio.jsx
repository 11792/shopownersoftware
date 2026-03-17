import { motion as Motion } from 'framer-motion'

const projects = [
  {
    name: 'Artisan Bread Co.',
    tags: ['Bakery', 'E-commerce'],
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    link: 'https://artisan-bread-co.vercel.app',
  },
  {
    name: 'Flora & Flour',
    tags: ['Cafe', 'Botanical'],
    image:
      'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1200&q=80',
    link: 'https://flora-and-flour.vercel.app',
  },
  {
    name: 'Midnight Munch',
    tags: ['Delivery', 'Late Night'],
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',
    link: 'https://midnight-munch.vercel.app',
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-white md:text-5xl"
        >
          Recent Work
        </Motion.h2>

        <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="font-display text-3xl text-white">{project.name}</h3>
                <p className="font-body text-sm text-[#ff5757]">{project.tags.join(' • ')}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center rounded-lg border border-[#ff5757] px-4 py-2 font-body text-sm font-semibold text-[#ff5757]"
                >
                  Live Link
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
