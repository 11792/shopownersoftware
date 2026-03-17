import { motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 transition md:px-8 ${
          scrolled ? 'bg-black/92 shadow-xl backdrop-blur' : 'bg-transparent'
        }`}
      >
        <a href="#home" className="font-display text-xl font-extrabold text-white">
          ShopOwnerSoftware
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-body text-sm text-white hover:text-[#ff5757]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="mailto:shopownersoftware@gmail.com"
            className="hidden min-h-[44px] items-center rounded-lg bg-[#ff5757] px-4 py-2 font-body text-sm font-semibold text-white md:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="min-h-[44px] min-w-[44px] rounded-lg border border-white/40 text-white md:hidden"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <Motion.div
        initial={false}
        animate={open ? 'open' : 'closed'}
        variants={{
          open: { height: 'auto', opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        className="overflow-hidden bg-black/95 md:hidden"
      >
        <ul className="space-y-2 px-4 pb-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block min-h-[44px] rounded-md border border-white/10 px-3 py-3 font-body text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:shopownersoftware@gmail.com"
              className="block min-h-[44px] rounded-md bg-[#ff5757] px-3 py-3 font-body font-semibold text-white"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </Motion.div>
    </header>
  )
}

export default Navbar
