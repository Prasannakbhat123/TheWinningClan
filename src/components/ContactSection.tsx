const ContactSection = () => {
  return (
    <footer id="contact" className="py-20 text-center">
      <div className="rounded-[32px] border border-[#f4d35e59] bg-[linear-gradient(135deg,rgba(5,16,36,0.9),rgba(16,52,96,0.8))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-12">
        <div className="mx-auto max-w-2xl space-y-3" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.4em] text-[#f4d35e]">Contact us :</p>
          <h2 className="text-3xl leading-snug md:text-4xl">Be a part of 'The Winning Clan' now!!</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div
            className="rounded-2xl border border-[#f4d35e66] bg-[rgba(7,22,45,0.7)] p-6 text-left"
            data-aos="fade-right"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Email ID</p>
            <p className="mt-3 text-2xl font-semibold text-[#f4d35e]">Contact us for details</p>
          </div>
          <div
            className="rounded-2xl border border-[#f4d35e66] bg-[rgba(7,22,45,0.7)] p-6 text-left"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Phone Number</p>
            <p className="mt-3 text-2xl font-semibold text-[#f4d35e]">Contact us for details</p>
          </div>
        </div>

      </div>

      <p className="mt-8 text-sm text-white/60">© {new Date().getFullYear()} The Winning Clan.</p>
    </footer>
  )
}

export default ContactSection

