const ContactSection = () => {
  return (
    <footer id="contact" className="py-20 text-center">
      <div className="rounded-[32px] border border-[#f4d35e59] bg-[linear-gradient(135deg,rgba(5,16,36,0.9),rgba(16,52,96,0.8))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-12">
        <div className="mx-auto max-w-2xl space-y-3" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.4em] text-[#f4d35e]">Contact us :</p>
          <h2 className="text-3xl leading-snug md:text-4xl">Book a discovery call with our strategy desk.</h2>
          <p className="text-white/75">
            Share your focus area and we will craft a tailored program blueprint within 48 hours.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div
            className="rounded-2xl border border-[#f4d35e66] bg-[rgba(7,22,45,0.7)] p-6 text-left"
            data-aos="fade-right"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Email ID</p>
            <p className="mt-3 text-2xl font-semibold text-[#f4d35e]">hello@twc-placeholder.com</p>
            <p className="mt-3 text-sm text-white/70">Preferred for proposals, partnerships, and press.</p>
          </div>
          <div
            className="rounded-2xl border border-[#f4d35e66] bg-[rgba(7,22,45,0.7)] p-6 text-left"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Phone no</p>
            <p className="mt-3 text-2xl font-semibold text-[#f4d35e]">+1 (000) 123-4567</p>
            <p className="mt-3 text-sm text-white/70">Mon-Fri · 9a - 6p GMT. WhatsApp ready.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3" data-aos="zoom-in">
          <p className="text-white/85">Ready to co-create? Secure a 20-min alignment session.</p>
          <button
            type="button"
            className="rounded-full border border-[#f4d35e] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4d35e] transition hover:bg-[#f4d35e] hover:text-[#0b1a34]"
          >
            Schedule a Call
          </button>
        </div>
      </div>

      <p className="mt-8 text-sm text-white/60">© {new Date().getFullYear()} The Winning Clan.</p>
    </footer>
  )
}

export default ContactSection

