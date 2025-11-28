import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className="grid min-h-[80vh] gap-8 py-16 md:grid-cols-2" id="hero">
      <div className="flex flex-col gap-5" data-aos="fade-up">
        <p className="text-sm uppercase tracking-[0.5em] text-[#f4d35e]">The Winning Clan</p>
        <h1 className="text-4xl leading-tight md:text-5xl">Equipping Individuals to Excel</h1>
        <p className="max-w-[540px] text-base text-white/80">
          We architect transformational experiences for teams and leaders who crave momentum. Strategy,
          storytelling, and coaching converge to build cultures that win with purpose.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="programs"
            smooth="easeInOutQuart"
            duration={600}
            offset={-80}
            className="rounded-full bg-[#f4d35e] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0b1a34] shadow-[0_15px_40px_rgba(244,211,94,0.3)] transition hover:-translate-y-0.5"
          >
            View Programs
          </Link>
          <Link
            to="contact"
            smooth="easeInOutQuart"
            duration={600}
            offset={-80}
            className="rounded-full border border-[#f4d35e66] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4d35e] transition hover:border-[#f4d35e] hover:bg-[#f4d35e] hover:text-[#0b1a34]"
          >
            Talk to us
          </Link>
        </div>
      </div>

      <div
        className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[30px] border border-[#f4d35e33] bg-[radial-gradient(circle,_rgba(244,211,94,0.18),_transparent_55%),_rgba(6,20,44,0.7)]"
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <div className="animate-hero-ring absolute h-[220px] w-[220px] rounded-full border border-[#f4d35e66]" />
        <div className="animate-hero-ring-delay absolute h-[280px] w-[280px] rounded-full border border-[#f4d35e33]" />
        <div className="h-3 w-3 rounded-full bg-[#f4d35e] shadow-[0_0_22px_rgba(244,211,94,0.8)]" />
      </div>
    </section>
  )
}

export default HeroSection

