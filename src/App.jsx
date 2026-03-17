import { motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {
  const [loading, setLoading] = useState(true)
  const [dot, setDot] = useState({ x: -40, y: -40 })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <span className="h-14 w-14 animate-pulse rounded-full bg-[#ff5757]" />
      </div>
    )
  }

  return (
    <div
      onMouseMove={(event) => setDot({ x: event.clientX, y: event.clientY })}
      className="relative overflow-x-hidden"
    >
      <Motion.span
        className="pointer-events-none fixed z-[60] hidden h-3 w-3 rounded-full bg-[#ff5757] md:block"
        animate={{ x: dot.x - 6, y: dot.y - 6 }}
        transition={{ type: 'spring', damping: 25, stiffness: 280 }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
