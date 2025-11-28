const aboutStats = [
  { label: 'Leaders coached', value: '800+' },
  { label: 'Corporate labs', value: '65' },
  { label: 'Retention uplift', value: '38%' },
]

const AboutSection = () => {
  return (
    <section id="about" className="border-b border-white/10 py-20">
      <div className="max-w-3xl space-y-3" data-aos="fade-up">
        <p className="text-xs uppercase tracking-[0.4em] text-[#f4d35e] sm:text-sm">About company</p>
        <h2 className="text-2xl leading-snug sm:text-3xl md:text-4xl">We cultivate a winning mindset.</h2>
        <p className="text-white/70">
          Purpose-led coaching, immersive playbooks, and a community that pushes every member to deliver elite work.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="order-1 flex flex-col items-center gap-4 md:order-2" data-aos="fade-left">
          <div className="flex w-full min-h-[220px] items-center justify-center rounded-[26px] border border-dashed border-[#f4d35e99] bg-[linear-gradient(135deg,rgba(244,211,94,0.15),rgba(7,22,45,0.8))] text-[0.65rem] uppercase tracking-[0.25em] text-[#f4d35e]/80 sm:min-h-[300px] sm:text-[0.75rem]">
            Featured Story Placeholder
          </div>
          <p className="text-sm text-white/65">Visual narratives from recent transformation sprints.</p>
        </div>

        <div className="order-2 space-y-6 md:order-1" data-aos="fade-right">
          <div className="rounded-3xl border border-[#f4d35e4d] bg-[linear-gradient(135deg,rgba(12,29,57,0.9),rgba(4,11,26,0.9))] p-6 text-white/85 shadow-[0_20px_45px_rgba(0,0,0,0.35)] sm:p-8">
            <p>
              The Winning Clan is a professional development collective focused on unlocking potential for emerging
              leaders, corporate teams, and ambitious creators. Through immersive coaching programs, bespoke learning
              journeys, and an energizing community, we equip individuals with frameworks that translate bold vision
              into measurable results.
            </p>
            <p className="mt-4">
              Our ethos: purpose, discipline, collaboration. Every engagement is tailored, data-informed, and led by
              mentors who have engineered high-performing cultures across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#f4d35e40] bg-[rgba(9,21,44,0.8)] px-4 py-5 text-center"
              >
                <span className="block text-2xl font-bold text-[#f4d35e]">{stat.value}</span>
                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

