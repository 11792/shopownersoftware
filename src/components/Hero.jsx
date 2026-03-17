import { motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import FloatingElements from './FloatingElements'
import HeroParticles from './Particles'

const heading = 'Software That Grows With Your Small Business'
const sub = 'Custom websites, apps, and tools built for shop owners like you'

function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setTyped(sub.slice(0, i))
      if (i >= sub.length) clearInterval(timer)
    }, 25)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black pt-24">
      <HeroParticles />
      <FloatingElements />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-6xl flex-col items-center justify-center px-4 text-center md:px-8">
        <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {heading.split('').map((char, index) => (
            <Motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.02 }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </Motion.span>
          ))}
        </h1>

        <p className="mt-6 min-h-[58px] max-w-2xl font-body text-base text-white/85 md:text-xl">
          {typed}
          <span className="animate-pulse">|</span>
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#portfolio"
            className="min-h-[44px] rounded-lg bg-[#ff5757] px-6 py-3 font-body font-semibold text-white"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="min-h-[44px] rounded-lg border border-[#ff5757] px-6 py-3 font-body font-semibold text-[#ff5757]"
          >
            Free Consultation
          </a>
        </div>

        <p className="mt-10 font-body text-sm text-white/80">
          Projects Completed: <span className="font-semibold text-[#ff5757]">20+</span>
        </p>

        <a href="#services" className="mt-10 text-3xl text-white animate-bounce">
          ↓
        </a>
      </div>
    </section>
  )
}

export default Hero
