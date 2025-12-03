import { useEffect, useState } from 'react'

const programs = [
  {
    code: 'P1',
    title: 'Become the Best of You',
    duration: 'Signature Program',
    cohort: 'Working & Non-working',
    frontDescription: 'A flagship TWC program designed for individuals—working or not—who aspire to grow and excel personally and professionally.',
    details: [
      'Overcome the fear of speaking',
      'Become bold to face your challenges',
      'Learn to manage yourself and others',
      'Make your presence visible',
    ],
    cta: 'Rise above your limitations. Experience a transformation that begins from the inside out. Contact us to know more!!',
  },
  {
    code: 'P2',
    title: 'Empower the Young',
    duration: 'Campus to Corporate',
    cohort: 'Educational Institutions',
    frontDescription: 'Campus to Corporate Catalyst program for Educational Institutions. Empower them to maximize opportunities by complementing their hard skills with strong life skills.',
    details: [
      'Crafting Resumes',
      'Group Discussions',
      'Interview Etiquette',
      'And other student topics that can enhance their resume',
    ],
    cta: 'Contact us to know more!!',
  },
  {
    code: 'P3',
    title: 'Equip Workforce',
    duration: '9 Powerful Modules',
    cohort: 'Corporate Training',
    frontDescription: '9 Powerful Corporate Training Modules for Retreats and Performance Excellence. Experience growth through meaningful and enjoyable learning led by activities.',
    details: [
      'Team Building',
      'Goal Setting',
      'Time Management',
      'Communication Skills',
      'General & Business Etiquette',
      'Interpersonal Skills',
      'Emotional Intelligence',
      'Customer First',
      'Stress Management',
    ],
    cta: "Inbound and Outbound we've got you covered. Contact us to know more!!",
  },
]

const ProgramsSection = () => {
  const [isTouch, setIsTouch] = useState(false)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const query = window.matchMedia('(hover: none)')
    const updateMatch = () => setIsTouch(query.matches)
    updateMatch()
    query.addEventListener('change', updateMatch)
    return () => query.removeEventListener('change', updateMatch)
  }, [])

  const toggleCard = (index: number) => {
    if (!isTouch) return
    setFlippedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="programs" className="relative overflow-hidden border-b border-white/10 py-20">
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_top,_rgba(244,211,94,0.08),_transparent_60%)] sm:block" />
      <div className="relative">
        <div className="max-w-3xl space-y-3" data-aos="fade-up">
          <p className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.1em] text-[#f4d35e] font-bold">Programs</p>
          <h2 className="text-2xl leading-snug sm:text-3xl md:text-4xl">
            Give yourself a gift of growth, explore our programs.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              className="group"
              key={program.code}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              style={{ perspective: '1200px' }}
            >
              <div
                className={`relative w-full h-[500px] transition duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
                  isTouch && flippedIndex === index ? '[transform:rotateY(180deg)]' : ''
                }`}
                role={isTouch ? 'button' : undefined}
                tabIndex={isTouch ? 0 : undefined}
                aria-pressed={isTouch ? flippedIndex === index : undefined}
                onClick={isTouch ? () => toggleCard(index) : undefined}
                onKeyDown={
                  isTouch
                    ? (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          toggleCard(index)
                        }
                      }
                    : undefined
                }
              >
                <div className="absolute inset-0 flex flex-col gap-4 rounded-[22px] border border-[#081833]/20 bg-[#fefbf3] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.1)] [backface-visibility:hidden] overflow-hidden">
                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 card-texture pointer-events-none" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#081833] opacity-[0.02] rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#081833] opacity-[0.02] rounded-full blur-2xl" />
                  
                  <div className="relative z-10 flex flex-col gap-4 h-full min-h-0">
                    <div className="flex items-center justify-between text-sm uppercase tracking-[0.08em] text-[#081833]/60">
                      <span className="text-3xl font-bold tracking-tight text-[#8b7355]">{program.code}</span>
                      <p className="text-xs text-[#081833]/70">{program.duration}</p>
                  </div>
                    <h3 className="text-xl font-semibold text-[#081833]">{program.title}</h3>
                    <p className="text-sm text-[#081833]/80 leading-relaxed">{program.frontDescription}</p>
                  <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#081833]/30 px-3 py-1 text-[0.7rem] uppercase tracking-[0.15em] text-[#081833]/70 bg-[#081833]/5">
                      {program.cohort}
                    </span>
                    </div>
                    <p className="mt-auto text-xs uppercase tracking-[0.2em] text-[#081833]/50">Flip to explore details</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col rounded-[22px] bg-[linear-gradient(135deg,#f4d35e,#f7e19b)] p-6 text-[#0b1a34] shadow-[0_20px_35px_rgba(0,0,0,0.25)] [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                  {/* Elegant pattern overlay */}
                  <div className="absolute inset-0 card-back-pattern pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full min-h-0">
                    <div className="mb-3">
                      <h4 className="text-lg font-bold mb-1">{program.title}</h4>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0b1a34]/70">Program Details</p>
                    </div>
                    <ul className="mt-1 space-y-2 text-sm font-medium flex-1">
                    {program.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1.5 relative">
                            <span className="absolute inset-0 bg-[#0b1a34]/20 rounded-full blur-sm group-hover/item:bg-[#0b1a34]/30 transition-all" />
                            <span className="relative h-2 w-2 rounded-full bg-[#0b1a34] flex items-center justify-center group-hover/item:scale-125 group-hover/item:shadow-lg transition-all">
                              <span className="h-1 w-1 rounded-full bg-[#f4d35e]" />
                            </span>
                          </div>
                          <span className="leading-tight group-hover/item:font-semibold group-hover/item:text-[#0b1a34] transition-all text-[#0b1a34]/90">{detail}</span>
                      </li>
                    ))}
                  </ul>
                    <div className="mt-3 pt-3 border-t border-[#0b1a34]/30">
                      <p className="text-xs font-semibold text-[#0b1a34] leading-relaxed">{program.cta}</p>
                    </div>
                  </div>
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

