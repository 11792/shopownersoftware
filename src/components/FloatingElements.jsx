import { motion as Motion } from 'framer-motion'

const elements = [
  { icon: '</>', left: '8%', top: '24%' },
  { icon: '💻', left: '77%', top: '20%' },
  { icon: '📱', left: '14%', top: '74%' },
  { icon: '{ }', left: '73%', top: '72%' },
]

function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {elements.map((element) => (
        <Motion.div
          key={`${element.icon}-${element.left}`}
          className="absolute rounded-xl border border-white/20 bg-black/25 px-3 py-2 text-xl text-white/75 backdrop-blur-sm"
          style={{ left: element.left, top: element.top }}
          animate={{ y: [0, -12, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {element.icon}
        </Motion.div>
      ))}
    </div>
  )
}

export default FloatingElements
