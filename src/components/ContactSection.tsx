const ContactSection = () => {
  return (
    <footer id="contact" className="relative w-full py-20 overflow-hidden bg-[#fefbf3]">
      {/* Light golden background with subtle texture */}
      <div className="absolute inset-0 w-full bg-[#fefbf3]" />
      <div className="absolute inset-0 w-full abstract-pattern-about" />
      <div className="absolute inset-0 w-full abstract-lines-about" />
      
      {/* Additional subtle abstract shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#081833] opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#081833] opacity-[0.025] rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="rounded-[32px] border border-[#f4d35e59] bg-[linear-gradient(135deg,rgba(5,16,36,0.9),rgba(16,52,96,0.8))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-12">
          <div className="mx-auto max-w-2xl space-y-3" data-aos="fade-up">
            <p className="text-sm uppercase tracking-normal text-[#f4d35e]">Contact us :</p>
            <h2 className="text-3xl leading-snug md:text-4xl">Liked what we do ? Then be a part of The Winning Clan now !!</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div
              className="rounded-2xl border border-[#f4d35e66] bg-[rgba(7,22,45,0.7)] p-6 text-left"
              data-aos="fade-right"
            >
              <p className="text-xs uppercase tracking-normal text-white/60">Email ID</p>
              <p className="mt-3 text-2xl font-semibold text-[#f4d35e]">Contact us for details</p>
            </div>
            <div
              className="rounded-2xl border border-[#f4d35e66] bg-[rgba(7,22,45,0.7)] p-6 text-left"
              data-aos="fade-left"
              data-aos-delay="120"
            >
              <p className="text-xs uppercase tracking-normal text-white/60">Phone Number</p>
              <p className="mt-3 text-2xl font-semibold text-[#f4d35e]">8310448805</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-center text-[#081833]/60">© {new Date().getFullYear()} The Winning Clan.</p>
      </div>
    </footer>
  )
}

export default ContactSection

