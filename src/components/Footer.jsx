import logo from '../assets/logo.png'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#070707] px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="ShopOwnerSoftware logo" className="h-10 w-10 rounded-md object-cover" />
            <p className="font-display text-2xl font-bold text-white">ShopOwnerSoftware</p>
          </div>
        </div>
        <div>
          <p className="font-body text-sm uppercase tracking-[0.1em] text-[#ff5757]">Quick Links</p>
          <div className="mt-2 flex flex-col gap-2">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase() === 'home' ? 'home' : link.toLowerCase()}`}
                className="font-body text-sm text-white/85"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-body text-sm uppercase tracking-[0.1em] text-[#ff5757]">Social</p>
          <a
            href="https://www.instagram.com/shopownersoftware/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-[44px] items-center rounded-lg border border-[#ff5757]/50 px-4 py-2 font-body text-sm text-[#ff5757] transition hover:shadow-[0_0_15px_rgba(255,87,87,0.45)]"
          >
            Instagram
          </a>
          <p className="mt-2 font-body text-xs text-white/70">Follow me on Instagram for tips</p>
        </div>
        <div>
          <a href="mailto:shopownersoftware@gmail.com" className="font-body text-sm text-white/85">
            shopownersoftware@gmail.com
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4">
        <p className="font-body text-sm text-white/70">© {year} ShopOwnerSoftware</p>
        <p className="mt-1 font-body text-xs text-white/60">
          Built for small businesses, by a developer who cares
        </p>
      </div>
    </footer>
  )
}

export default Footer
