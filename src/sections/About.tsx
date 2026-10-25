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
    'I am driven by curiosity about how intelligent systems work, how they can be made more efficient, and what remains unexplored. I enjoy diving into research, questioning existing approaches, and experimenting with new ideas. But I love getting my hands dirty too — building prototypes, pushing ideas into working systems, and creating unconventional solutions at hackathons. For me, research is not just about understanding what is possible; it is about discovering what I can build next.'

  const segments = [
    { text: 'I am Srikar,', className: 'font-normal' },
    {
      text: 'a research-driven builder.',
      className: 'italic font-serif',
    },
    {
      text: 'I explore ideas, experiment with AI, and build things that push boundaries.',
      className: 'font-normal',
    },
  ]

  const interests = [
    'AI Research & Deep Learning',
    'LLM Systems & Optimization',
    'Rapid Prototyping & Hackathons',
    'Systems Architecture',
  ]

  return (
    <section id="about" className="bg-black py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-3xl p-8 md:p-16 text-center">
          <div className="text-primary text-[10px] sm:text-xs mb-8 uppercase tracking-wider">
            About Me
          </div>

          <WordsPullUpMultiStyle
            segments={segments}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12"
          />

          <div
            ref={targetRef}
            className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
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

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-black/50 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <p className="text-primary text-sm font-medium">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About