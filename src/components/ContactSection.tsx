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
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#f4d35e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-semibold text-[#f4d35e]">thewinningclan11@gmail.com</p>
              </div>
            </div>
            <div
              className="rounded-2xl border border-[#f4d35e66] bg-[rgba(7,22,45,0.7)] p-6 text-left"
              data-aos="fade-left"
              data-aos-delay="120"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#f4d35e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-lg font-semibold text-[#f4d35e]">8310448805</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-center text-[#081833]/60">© {new Date().getFullYear()} The Winning Clan.</p>
      </div>
    </footer>
  )
}

export default ContactSection

