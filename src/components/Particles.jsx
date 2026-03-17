import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

function HeroParticles() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 45, density: { enable: true, area: 900 } },
        color: { value: ['#ff5757', '#ffffff'] },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: { min: 0.2, max: 0.6 } },
        move: { enable: true, speed: { min: 0.2, max: 1.1 }, outModes: { default: 'out' } },
      },
    }),
    [],
  )

  if (!ready) return null

  return <Particles id="hero-particles" options={options} className="absolute inset-0" />
}

export default HeroParticles
