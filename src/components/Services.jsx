import { motion as Motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    title: 'Custom Websites',
    icon: '</>',
    description:
      'Mobile-friendly, fast, beautiful sites that convert visitors to customers',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Online Ordering Systems',
    icon: '🛒',
    description:
      'Take orders via WhatsApp, Instagram, or web-never lose another sale',
    image:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Appointment Booking',
    icon: '📅',
    description:
      'Let customers book online, get reminders, reduce no-shows',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Inventory Tools',
    icon: '📦',
    description:
      'Simple stock tracking, low stock alerts, reorder reminders',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
]

function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="services" ref={ref} className="bg-[#0a0a0a] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="group inline-block font-display text-4xl font-bold text-white md:text-5xl">
          What I Build For Small Businesses
          <span className="mt-2 block h-1 w-0 bg-[#ff5757] transition-all duration-500 group-hover:w-full" />
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-[#ff5757]/40 bg-black"
            >
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="space-y-3 p-5">
                <p className="text-2xl text-[#ff5757]">{service.icon}</p>
                <h3 className="font-display text-3xl text-white">{service.title}</h3>
                <p className="font-body text-sm leading-relaxed text-white/80">{service.description}</p>
                <button
                  type="button"
                  className="mt-2 hidden min-h-[44px] rounded-lg border border-[#ff5757] px-4 py-2 font-body text-sm font-semibold text-[#ff5757] group-hover:inline-block"
                >
                  Learn More
                </button>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
