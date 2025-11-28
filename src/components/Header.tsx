import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/twc-logo.svg'

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Programs', to: 'programs' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Contact us', to: 'contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <>
      <header
        className="sticky top-0 z-30 border-b border-[#f4d35e66] bg-[#030f20e6] px-4 py-3 backdrop-blur-xl sm:px-6 md:px-10"
        id="home"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Winning Clan emblem" className="h-11 w-11 sm:h-12 sm:w-12" />
            <span className="text-base font-semibold tracking-[0.35em] text-[#f4d35e] sm:text-lg">TWC</span>
          </div>

          <nav className="hidden items-center gap-3 text-[0.75rem] md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth="easeInOutQuart"
                offset={-80}
                duration={600}
                className="cursor-pointer rounded-full border border-transparent px-4 py-2 font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-[#f4d35e] hover:text-[#f4d35e]"
                activeClass="border-[#f4d35e] text-[#f4d35e]"
                spy
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f4d35e66] text-[#f4d35e] transition hover:border-[#f4d35e] md:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-[2px] bg-current transition ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 top-2 h-[2px] bg-current transition ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute inset-x-0 top-4 h-[2px] bg-current transition ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#01091cdf] backdrop-blur-md transition-opacity duration-200 ease-out md:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="primary-navigation"
        className={`box-border fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-[320px] flex-col gap-6 border-l border-white/10 bg-[#030f20] px-6 py-10 text-sm uppercase tracking-[0.2em] text-white shadow-[0_20px_60px_rgba(3,15,32,0.8)] transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold tracking-[0.4em] text-white/60">Menu</span>
          <button
            type="button"
            aria-label="Close navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#f4d35e] hover:text-[#f4d35e]"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative block h-4 w-4">
              <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto pb-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth="easeInOutQuart"
              offset={-80}
              duration={600}
              className="rounded-full border border-white/10 px-6 py-3 text-center font-semibold tracking-[0.3em] text-white/80 transition hover:border-[#f4d35e] hover:text-[#f4d35e]"
              activeClass="border-[#f4d35e] text-[#f4d35e]"
              spy
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Header

