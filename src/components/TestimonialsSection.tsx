const testimonials = [
  {
    quote:
      'The Winning Clan unlocked a new level of confidence for our leadership team—strategy sessions now feel electric.',
    name: 'Adaeze K.',
    role: 'Head of People, Northwind Africa',
  },
  {
    quote:
      'Our cohort left with playbooks we could deploy the next day. The blend of rigor and energy is unmatched.',
    name: 'Marcus L.',
    role: 'Program Director, Elevate Lab',
  },
  {
    quote:
      'They translate complex transformation initiatives into human stories. Our culture shifted within weeks.',
    name: 'Sara M.',
    role: 'Chief of Staff, Horizon Build',
  },
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative w-full py-20 overflow-hidden bg-[#fefbf3]">
      {/* Light golden background with subtle texture */}
      <div className="absolute inset-0 w-full bg-[#fefbf3]" />
      <div className="absolute inset-0 w-full testimonials-texture" />
      
      {/* Additional subtle abstract shapes */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-[#081833] opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#081833] opacity-[0.025] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-3xl space-y-3 mb-12" data-aos="fade-up">
          <p className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.1em] text-[#8b7355] font-bold">Testimonials</p>
          <h2 className="text-3xl leading-snug sm:text-4xl md:text-5xl lg:text-6xl text-[#081833] font-bold">Leaders trust us to engineer momentum.</h2>
          <p className="text-lg sm:text-xl text-[#081833]/70">
            A rotating pulse of voices from founders, chiefs of staff, and emerging leaders who rely on the clan.
          </p>
        </div>

        <div
          className="mt-12 rounded-[30px] border border-[#f4d35e33] bg-[linear-gradient(135deg,rgba(3,12,30,0.95),rgba(1,9,28,0.95))] p-4 sm:p-8"
          data-aos="fade-up"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#01091c]/80 py-4 sm:py-5">
            <div className="flex gap-6 animate-marquee">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article
                  className="min-w-[85vw] max-w-[85vw] rounded-2xl border border-[#f4d35e33] bg-[rgba(11,45,83,0.7)] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.3)] sm:min-w-[320px] sm:max-w-[360px] sm:p-6"
                  key={`${testimonial.name}-${index}`}
                >
                  <div className="text-4xl text-[#f4d35e66]">"</div>
                  <p className="mt-3 text-base leading-relaxed text-white/85">{testimonial.quote}</p>
                  <p className="mt-4 flex flex-col text-sm font-semibold text-[#f4d35e]">
                    {testimonial.name}
                    <span className="text-xs font-normal text-white/70">{testimonial.role}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

