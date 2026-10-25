import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const Experience = () => {
  const experiences = [
    {
      role: 'Student Lead',
      organization: 'IEDC VISAT',
      description:
        'Leading innovation, strategy, and execution of student-driven technical initiatives.',
      current: true,
    },
    {
      role: 'Techincal Lead',
      organization: 'IEDC VISAT',
      description:
        'Headed technical development, system architecture, and project pipelines.',
      current: false,
    },
    {
      role: 'Co-Lead',
      organization: 'MuLearn VISAT',
      description:
        'Driving peer learning and skill development through structured programs.',
      current: true,
    },
    {
      role: 'Community Head',
      organization: 'ADC',
      description:
        'Managing developer community, organizing events, and fostering collaboration.',
      current: false,
    },
    {
      role: 'Ex-Webmaster',
      organization: 'IEEE VISAT',
      description:
        'Built and maintained web platforms with focus on performance and usability.',
      current: false,
    },
    {
      role: 'Lead Researcher & Co-founder',
      organization: 'Brin Research',
      description:
        'Co-founded Brin Research and lead research in AI and ML, guiding projects from initial ideas through prototype development and evaluation. Focus on practical and collaborative research..',
      current: true,
    },
  ]

  const headerSegments = [
    { text: 'Leadership & Experience.', className: 'text-primary' },
    { text: 'Driving innovation. Building communities.', className: 'text-gray-500' },
  ]

  return (
    <section id="experience" className="bg-black py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-4xl mx-auto"
          />
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ExperienceCardProps {
  experience: any
  index: number
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#101010] rounded-2xl p-6 border border-primary/10 hover:border-primary/20 transition-colors"
    >
      {/* Current Badge */}
      {experience.current && (
        <div className="inline-block mb-3">
          <span className="text-[10px] px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
            Current
          </span>
        </div>
      )}

      {/* Role & Organization */}
      <h3 className="text-primary text-xl md:text-2xl mb-2 font-medium">
        {experience.role}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{experience.organization}</p>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">{experience.description}</p>
    </motion.div>
  )
}

export default Experience
