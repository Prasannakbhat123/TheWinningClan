import bgImage from '../assets/bg2.jpg'

const HeroSection = () => {
  const handleScrollClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-12 overflow-hidden" 
      id="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient blur overlay - stronger in center, fading out */}
      <div className="absolute inset-0 bg-gradient-radial from-white/30 via-white/10 to-transparent backdrop-blur-sm" 
           style={{
             background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 70%, transparent 90%)',
             backdropFilter: 'blur(1px)',
             WebkitBackdropFilter: 'blur(2px)'
           }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
          {/* The Winning Clan - Large, Blue */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#081833] leading-tight">
            The Winning Clan
          </h1>
          
          {/* Equipping Individuals to Excel - Light warm tone */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#8b7355] leading-tight max-w-3xl">
            Equipping Individuals to Excel
          </h2>
          
          {/* Description */}
          <p className="max-w-3xl text-lg sm:text-2xl text-[#5a4a3a] leading-snug mt-1">
          Your preferred place to upskill people and empower teams.
          </p>
          
          {/* Buttons - Blue */}
          <div className="flex flex-wrap gap-4 justify-center mt-4 sm:mt-6">
            <a
              href="#programs"
              onClick={(e) => handleScrollClick('programs', e)}
              className="rounded-full bg-[#081833] px-8 py-4 text-sm font-bold uppercase tracking-normal text-white shadow-lg hover:shadow-xl hover:bg-[#0a1f3f] transition-all duration-300 hover:-translate-y-1 sm:px-10 sm:py-4 sm:text-base"
            >
              View Programs
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollClick('contact', e)}
              className="rounded-full border-2 border-[#081833] px-8 py-4 text-sm uppercase tracking-normal text-[#081833] hover:bg-[#081833] hover:text-white transition-all duration-300 hover:-translate-y-1 sm:px-10 sm:py-4 font-bold sm:text-base"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

