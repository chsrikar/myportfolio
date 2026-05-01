import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'

const Hero = () => {
  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[10px] sm:text-xs md:text-sm transition-colors"
                    style={{
                      color: 'rgba(225, 224, 204, 0.8)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#E1E0CC'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Heading */}
            <div className="lg:col-span-8">
              <WordsPullUp
                text="Srikar"
                showAsterisk={true}
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' } as React.CSSProperties}
              />
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/80 text-sm sm:text-base md:text-lg mt-4"
              >
                CEO @ IEDC VISAT  | ML Engineer | System Architect | AI Enthusiast
              </motion.p>
            </div>

            {/* Right Column - Description & CTA */}
            <div className="lg:col-span-4 flex flex-col justify-end gap-6">
              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Building intelligent systems, scalable architectures, and impactful
                digital experiences. Tech-driven problem solver focused on backend systems,
                AI pipelines, and real-world solutions.
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="#projects"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group bg-primary rounded-full text-black font-medium text-sm sm:text-base px-6 py-3 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  <span>View Projects</span>
                  <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight size={18} className="text-primary" />
                  </div>
                </motion.a>

                <motion.a
                  href="#contact"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group border border-primary/30 rounded-full text-primary font-medium text-sm sm:text-base px-6 py-3 hover:bg-primary/10 transition-all"
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
