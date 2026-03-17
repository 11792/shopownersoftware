import { motion as Motion } from 'framer-motion'

const steps = [
  {
    title: 'Tell Me Your Problem',
    icon: '💬',
    description: 'We hop on a quick call. You tell me what drives you crazy.',
  },
  {
    title: 'I Build a Solution',
    icon: '💻',
    description: 'I build custom software just for your business. No templates.',
  },
  {
    title: 'You Test & Feedback',
    icon: '✅',
    description: 'You try it with real customers. I tweak until it is perfect.',
  },
  {
    title: 'You Save Time & Make Money',
    icon: '🚀',
    description: 'Your business runs smoother. You focus on what matters.',
  },
]

function HowItWorks() {
  return (
    <section className="bg-[#0d0d0d] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
          From Idea to Launch in 4 Steps
        </h2>

        <div className="relative mt-10 space-y-8">
          <span className="absolute left-5 top-0 h-full w-[2px] bg-[#ff5757]/40" />
          {steps.map((step, index) => (
            <Motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="relative ml-10 rounded-xl border border-white/10 bg-black/70 p-5"
            >
              <span className="absolute -left-10 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5757] text-white">
                {index + 1}
              </span>
              <p className="text-xl">{step.icon}</p>
              <h3 className="mt-2 font-display text-3xl text-white">{step.title}</h3>
              <p className="mt-2 font-body text-sm text-white/80">{step.description}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
