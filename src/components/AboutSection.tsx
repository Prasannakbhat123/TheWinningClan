const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-20 overflow-hidden bg-[#fefbf3]">
      {/* Light golden background with modern subtle texture */}
      <div className="absolute inset-0 w-full bg-[#fefbf3]" />
      <div className="absolute inset-0 w-full abstract-pattern-about" />
      <div className="absolute inset-0 w-full abstract-lines-about" />
      
      {/* Additional subtle abstract shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#081833] opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#081833] opacity-[0.025] rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#8b7355] font-bold mb-8">About Us</h2>
        </div>

        <div className="grid gap-8">
          <div className="space-y-6" data-aos="fade-right">
            <div className="rounded-3xl border border-[#081833]/30 bg-[linear-gradient(135deg,rgba(8,24,51,0.95),rgba(4,11,26,0.95))] p-6 text-white/90 shadow-[0_20px_45px_rgba(0,0,0,0.35)] sm:p-8 space-y-4">
              <h3 className="text-lg sm:text-xl text-white/95 font-medium mb-4 leading-relaxed">
                Winning Clan is a space for individuals, educational institutions, and corporate organizations committed to upskilling themselves and their people.
              </h3>
              <p>
                We believe that life skills are essential for every individual. In a world where technology continues to advance, 
                it is human qualities—communication, empathy, leadership, adaptability—that make us truly stand out. These skills have no substitute.
              </p>
              <p>
                Every person deserves to be equipped with the right life skills to face challenges confidently, communicate with clarity, 
                manage themselves and others with ease, and ultimately win in every situation while leaving a lasting impact.
              </p>
              <p>
                With this vision, we present TWC Learning & Development, founded with a deep passion for people development. 
                We empower individuals with the skills they need to enhance career performance, build meaningful life, lead effectively, and grow mindfully.
              </p>
              <p className="text-[#f4d35e] font-semibold italic">
              The right skills don't just transform careers—they transform lives.
              </p>
              <p className="text-[#f4d35e] font-semibold">
                At TWC, better is never enough. We strive for the BEST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

