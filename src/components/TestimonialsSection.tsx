import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    quote:
      "It was so helpful and I am really happy that I attended the sessions and I have learnt a lot in this and I am sure that it will help me well in the future and I wasn't that confident before and now I am confident of facing the challenges that I may face in the profession, Thank you",
    name: '',
    role: '',
  },
  {
    quote:
      'It was very good I came to know how to face the interviews This sections was very helpful to me',
    name: '',
    role: '',
  },
  {
    quote:
      "The information and content provided is more sufficient than required, it provided us a way to display the outcome ahead and to overcome situations, I'm looking for to have more sessions like this in the future.",
    name: '',
    role: '',
  },
  {
    quote:
      "It was really helpful You have done an amazing job in teaching us, resume making, interview appearance, email etiquette, presentation skills, and English communication. The way you kept the sessions interactive and fun made learning very engaging and effective. Your efforts have truly helped us gain confidence in our communication and professional skills. Thank you for your guidance and support.",
    name: '',
    role: '',
  },
]

const TestimonialsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Calculate max length of all testimonials except the last one
  const maxLength = Math.max(...testimonials.slice(0, -1).map(t => t.quote.length))
  const lastTestimonial = testimonials[testimonials.length - 1]
  const isLastTestimonialLong = lastTestimonial.quote.length > maxLength

  // Handle hover for desktop (pause on hover, resume on leave)
  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 640) {
      setIsPaused(false)
    }
  }

  // Handle click/tap for mobile (pause for 3 seconds)
  const handleClick = () => {
    if (window.innerWidth < 640) {
      setIsPaused(true)
      
      // Clear any existing timeout
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
      
      // Resume after 3 seconds
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false)
      }, 3000)
    }
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="testimonials" className="relative w-full py-20 overflow-hidden bg-[#fefbf3]">
      {/* Light golden background with subtle texture */}
      <div className="absolute inset-0 w-full bg-[#fefbf3]" />
      <div className="absolute inset-0 w-full testimonials-texture" />
      
      {/* Additional subtle abstract shapes */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-[#081833] opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#081833] opacity-[0.025] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-3xl space-y-3 mb-12" data-aos="fade-up">
          <p className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.1em] text-[#8b7355] font-bold">Testimonials</p>
          <h2 className="text-3xl leading-snug sm:text-4xl md:text-5xl lg:text-6xl text-[#081833] font-bold">Hear from those we've trained and empowered.</h2>
        </div>

      <div
          className="mt-12 rounded-[30px] border border-[#f4d35e33] bg-[linear-gradient(135deg,rgba(3,12,30,0.95),rgba(1,9,28,0.95))] p-4 sm:p-8"
        data-aos="fade-up"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#01091c]/80 py-4 sm:py-5">
          <div 
            className="flex gap-6 animate-marquee flex-nowrap" 
            style={{ 
              width: 'max-content',
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              // Get the original index (accounting for duplication)
              const originalIndex = index % testimonials.length
              const isLastOne = originalIndex === testimonials.length - 1
              
              // Only apply read more to the last testimonial if it's longer than max
              const shouldTruncate = isLastOne && isLastTestimonialLong && !isExpanded
              const displayText = shouldTruncate
                ? lastTestimonial.quote.substring(0, maxLength) + '...'
                : testimonial.quote
              
              return (
                <article
                  className="flex-shrink-0 min-w-[85vw] max-w-[85vw] rounded-2xl border border-[#f4d35e33] bg-[rgba(11,45,83,0.7)] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.3)] sm:min-w-[320px] sm:max-w-[360px] sm:p-6"
                  key={`${testimonial.quote}-${index}`}
                >
                  <div className="text-4xl text-[#f4d35e66]">"</div>
                  <p className="mt-3 text-base leading-relaxed text-white/85">{displayText}</p>
                  {isLastOne && isLastTestimonialLong && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-2 text-sm font-semibold text-[#f4d35e] hover:text-[#f7e19b] transition-colors"
                    >
                      {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                  )}
                  {testimonial.name && (
                    <p className="mt-4 flex flex-col text-sm font-semibold text-[#f4d35e]">
                      {testimonial.name}
                      {testimonial.role && (
                        <span className="text-xs font-normal text-white/70">{testimonial.role}</span>
                      )}
                    </p>
                  )}
                </article>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

