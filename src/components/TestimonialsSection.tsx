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
    <section id="testimonials" className="border-b border-white/10 py-20">
      <div className="max-w-3xl space-y-3" data-aos="fade-up">
        <p className="text-xs uppercase tracking-[0.4em] text-[#f4d35e] sm:text-sm">Testimonials</p>
        <h2 className="text-2xl leading-snug sm:text-3xl md:text-4xl">Leaders trust us to engineer momentum.</h2>
        <p className="text-white/70">
          A rotating pulse of voices from founders, chiefs of staff, and emerging leaders who rely on the clan.
        </p>
      </div>

      <div
        className="mt-12 rounded-[30px] border border-[#f4d35e33] bg-[radial-gradient(circle_at_top_right,rgba(244,211,94,0.25),transparent_40%),rgba(3,12,30,0.85)] p-4 sm:p-8"
        data-aos="fade-up"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#01091c]/80 py-4 sm:py-5">
          <div className="flex gap-6 animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article
                className="min-w-[85vw] max-w-[85vw] rounded-2xl border border-[#f4d35e33] bg-[rgba(11,45,83,0.7)] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.3)] sm:min-w-[320px] sm:max-w-[360px] sm:p-6"
                key={`${testimonial.name}-${index}`}
              >
                <div className="text-4xl text-[#f4d35e66]">“</div>
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
    </section>
  )
}

export default TestimonialsSection

