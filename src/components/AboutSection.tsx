const AboutSection = () => {
  return (
    <section id="about" className="border-b border-white/10 py-20">
      <div className="max-w-3xl space-y-3" data-aos="fade-up">
        <p className="text-xs uppercase tracking-[0.4em] text-[#f4d35e] sm:text-sm">Our Principle</p>
        <h2 className="text-2xl leading-snug sm:text-3xl md:text-4xl">
          Winning Clan is a space for individuals, institutions, and organizations committed to upskilling themselves and their people.
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="order-1 flex flex-col items-center gap-4 md:order-2" data-aos="fade-left">
          <div className="flex w-full min-h-[220px] items-center justify-center rounded-[26px] border border-dashed border-[#f4d35e99] bg-[linear-gradient(135deg,rgba(244,211,94,0.15),rgba(7,22,45,0.8))] text-[0.65rem] uppercase tracking-[0.25em] text-[#f4d35e]/80 sm:min-h-[300px] sm:text-[0.75rem]">
            Featured Story Placeholder
          </div>
          <p className="text-sm text-white/65">Visual narratives from recent transformation sprints.</p>
        </div>

        <div className="order-2 space-y-6 md:order-1" data-aos="fade-right">
          <div className="rounded-3xl border border-[#f4d35e4d] bg-[linear-gradient(135deg,rgba(12,29,57,0.9),rgba(4,11,26,0.9))] p-6 text-white/85 shadow-[0_20px_45px_rgba(0,0,0,0.35)] sm:p-8 space-y-4">
            <p>
              We believe that life skills are essential for every individual. In a world where technology continues to advance, 
              it is human qualities—communication, empathy, leadership, adaptability—that make us truly stand out. These skills have no substitute.
            </p>
            <p>
              Every person deserves to be equipped with the right life skills to face challenges confidently, communicate with clarity, 
              manage themselves and others with ease, and ultimately win in every situation while leaving a lasting impact.
            </p>
            <p>
              With this vision, we present TWC Learning & Development, founded with a deep passion for people development. 
              We empower individuals with the skills they need to enhance career performance, build meaningful life, lead effectively, and grow mindfully.
            </p>
            <p className="text-[#f4d35e] font-semibold italic">
              Because the right skills don't just transform careers—they transform lives.
            </p>
            <p className="text-[#f4d35e] font-semibold">
              At TWC, better is never enough. We strive for the BEST.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

