import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProgramsSection from './components/ProgramsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(18,41,79,0.9),_#081833)] text-[#f5f6fb]">
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <div className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-4 sm:px-6 md:px-10 bg-[radial-gradient(circle_at_top,_rgba(18,41,79,0.9),_#081833)]">
          <ProgramsSection />
        </div>
        <TestimonialsSection />
        <div className="mx-auto w-full max-w-[1200px] px-4 pt-4 sm:px-6 md:px-10 bg-[radial-gradient(circle_at_top,_rgba(18,41,79,0.9),_#081833)]">
          <ContactSection />
        </div>
      </main>
    </div>
  )
}

export default App
