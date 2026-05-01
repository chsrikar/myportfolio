import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'

const About = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const bodyText =
    'Currently serving as CEO at IEDC VISAT, I lead innovation, strategy, and execution of student-driven technical initiatives. Previously as CTO, I headed technical development and system architecture. I also serve as Co-Lead at MuLearn VISAT and Community Head at ADC, driving peer learning and fostering collaboration.'

  const segments = [
    { text: 'I am Srikar,', className: 'font-normal' },
    { text: 'a tech-driven problem solver.', className: 'italic font-serif' },
    {
      text: 'I specialize in Prompt enginnering, AI pipelines, and scalable architectures.',
      className: 'font-normal',
    },
  ]

  return (
    <section id="about" className="bg-black py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-3xl p-8 md:p-16 text-center">
          {/* Label */}
          <div className="text-primary text-[10px] sm:text-xs mb-8 uppercase tracking-wider">
            About Me
          </div>

          {/* Main Heading */}
          <WordsPullUpMultiStyle
            segments={segments}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12"
          />

          {/* Body Text with Scroll Animation */}
          <div
            ref={targetRef}
            className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: '#DEDBC8' }}
          >
            {bodyText.split('').map((char, index) => (
              <AnimatedLetter
                key={index}
                char={char}
                progress={scrollYProgress}
                index={index}
                totalChars={bodyText.length}
              />
            ))}
          </div>

          {/* What I Do Section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Backend Development',
              'AI/ML Systems',
              'Web Development',
              'System Design',
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-black/50 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <p className="text-primary text-sm font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
