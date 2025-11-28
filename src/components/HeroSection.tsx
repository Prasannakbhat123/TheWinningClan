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
      className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden bg-[#fefbf3]" 
      id="hero"
    >
      {/* Light golden/cream base - matching About section */}
      <div className="absolute inset-0 w-full bg-[#fefbf3]" />
      
      {/* Abstract background textures - more visible */}
      <div className="absolute inset-0 abstract-pattern" />
      <div className="absolute inset-0 abstract-grid" />
      <div className="absolute inset-0 abstract-dots" />
      
      {/* Additional subtle abstract shapes - matching About section */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#081833] opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#081833] opacity-[0.025] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#081833] opacity-[0.02] rounded-full blur-3xl" />
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#081833] opacity-[0.02] rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#081833] opacity-[0.025] rounded-full blur-2xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* The Winning Clan - Large, Blue */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#081833] leading-tight">
            The Winning Clan
          </h1>
          
          {/* Equipping Individuals to Excel - Light warm tone */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#8b7355] leading-relaxed max-w-3xl">
            Equipping Individuals to Excel
          </h2>
          
          {/* Description */}
          <p className="max-w-2xl text-base sm:text-lg text-[#5a4a3a] leading-relaxed mt-2">
            A space for individuals, institutions, and organizations committed to upskilling themselves and their people.
          </p>
          
          {/* Buttons - Blue */}
          <div className="flex flex-wrap gap-4 justify-center mt-6 sm:mt-8">
            <a
              href="#programs"
              onClick={(e) => handleScrollClick('programs', e)}
              className="rounded-full bg-[#081833] px-8 py-4 text-sm font-semibold uppercase tracking-normal text-white shadow-lg hover:shadow-xl hover:bg-[#0a1f3f] transition-all duration-300 hover:-translate-y-1 sm:px-10 sm:py-4 sm:text-base font-serif"
            >
              View Programs
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollClick('contact', e)}
              className="rounded-full border-2 border-[#081833] px-8 py-4 text-sm font-semibold uppercase tracking-normal text-[#081833] hover:bg-[#081833] hover:text-white transition-all duration-300 hover:-translate-y-1 sm:px-10 sm:py-4 sm:text-base font-serif"
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

