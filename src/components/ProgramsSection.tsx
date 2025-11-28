const programs = [
  {
    code: 'P1',
    title: 'Peak Performance Labs',
    duration: '2-day intensive',
    cohort: 'Max 20 seats',
    details: [
      'Rapid experimentation frameworks',
      'Leadership hot-seat and peer review',
      'Momentum blueprints delivered post-lab',
    ],
  },
  {
    code: 'P2',
    title: 'Future Leaders Fellowship',
    duration: '10-week hybrid',
    cohort: 'Cohort model',
    details: [
      'Executive mentorship pairings',
      'Accountability pods & scorecards',
      'Systems thinking & influence labs',
    ],
  },
  {
    code: 'P3',
    title: 'Executive Storycraft',
    duration: '4-week sprint',
    cohort: 'CXO circles',
    details: [
      'Narrative architecture sessions',
      'High-stakes presentation coaching',
      'Signature story asset delivered',
    ],
  },
]

const ProgramsSection = () => {
  return (
    <section id="programs" className="relative border-b border-white/10 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,211,94,0.08),_transparent_60%)]" />
      <div className="relative">
        <div className="max-w-3xl space-y-3" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.4em] text-[#f4d35e]">Programs :</p>
          <h2 className="text-3xl leading-snug md:text-4xl">
            Purpose-built experiences for every growth stage.
          </h2>
          <p className="text-white/70">
            Each pathway blends research-backed frameworks, real-time coaching, and immersive accountability to sustain
            long-term change.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <div
              className="group"
              key={program.code}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              style={{ perspective: '1200px' }}
            >
              <div className="relative w-full pt-[130%] transition duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-col gap-4 rounded-[22px] border border-[#f4d35e66] bg-[linear-gradient(135deg,rgba(8,24,51,0.95),rgba(5,18,44,0.9))] p-6 text-white shadow-[0_15px_35px_rgba(0,0,0,0.35)] [backface-visibility:hidden]">
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.08em] text-white/70">
                    <span className="text-3xl font-bold tracking-tight text-[#f4d35e]">{program.code}</span>
                    <p>{program.duration}</p>
                  </div>
                  <h3 className="text-xl">{program.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/40 px-3 py-1 text-[0.7rem] uppercase tracking-[0.15em] text-white/70">
                      {program.cohort}
                    </span>
                    <span className="rounded-full border border-white/40 px-3 py-1 text-[0.7rem] uppercase tracking-[0.15em] text-white/70">
                      Live coaching
                    </span>
                  </div>
                  <p className="mt-auto text-xs uppercase tracking-[0.2em] text-white/60">Flip to explore deliverables</p>
                </div>
                <div className="absolute inset-0 flex flex-col rounded-[22px] bg-[linear-gradient(135deg,#f4d35e,#f7e19b)] p-6 text-[#0b1a34] shadow-[0_20px_35px_rgba(0,0,0,0.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">What you receive:</p>
                  <ul className="mt-4 space-y-2 text-sm font-medium">
                    {program.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#0b1a34]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection

