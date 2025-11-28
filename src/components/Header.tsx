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
  return (
    <header
      className="sticky top-0 z-20 flex flex-col gap-4 border-b border-[#f4d35e66] bg-[#030f20cc] px-6 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-10"
      id="home"
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="The Winning Clan emblem" className="h-12 w-12" />
        <span className="text-lg font-semibold tracking-[0.35em] text-[#f4d35e]">TWC</span>
      </div>

      <nav className="flex flex-wrap gap-2 md:gap-3">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth="easeInOutQuart"
            offset={-80}
            duration={600}
            className="cursor-pointer rounded-full border border-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-[#f4d35e] hover:text-[#f4d35e]"
            activeClass="border-[#f4d35e] text-[#f4d35e]"
            spy
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header

