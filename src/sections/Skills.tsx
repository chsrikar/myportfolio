import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const Skills = () => {
  const skills = {
    'Technical Skills': {
      Languages: ['Python', 'C', 'C++', 'JavaScript'],
      'ML/AI Libraries': ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow'],
      'AI Skills': ['Prompt Engineering', 'Context Model Engineering', 'LLMs', 'Generative AI'],
    },
    'Core Expertise': [
      'Machine Learning & AI Model Development',
      'Large Language Models (LLMs)',
      'System Architecture & Design',
      'Data Engineering & Pipelines',
      'Problem Solving',
      'Communication',
    ],
    Tools: ['Git & GitHub', 'Vercel', 'Linux', 'Raspberry Pi OS', 'Jupyter Notebook'],
  }

  const headerSegments = [
    { text: 'Technical skills and expertise.', className: 'text-primary' },
    { text: 'Built through practice. Refined by projects.', className: 'text-gray-500' },
  ]

  return (
    <section id="skills" className="relative min-h-screen bg-black py-20 md:py-32 px-6">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-4xl mx-auto"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Technical Skills Card */}
          <SkillCard title="Technical Skills" index={0}>
            <div className="space-y-6">
              {Object.entries(skills['Technical Skills']).map(([category, items], i) => (
                <div key={i}>
                  <h4 className="text-primary text-sm font-medium mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-gray-300 border border-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SkillCard>

          {/* Core Expertise Card */}
          <SkillCard title="Core Expertise" index={1}>
            <ul className="space-y-3">
              {skills['Core Expertise'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SkillCard>

          {/* Tools Card */}
          <SkillCard title="Tools" index={2}>
            <div className="flex flex-wrap gap-3">
              {skills.Tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  title: string
  index: number
  children: React.ReactNode
}

const SkillCard = ({ title, index, children }: SkillCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#212121] rounded-2xl p-8 h-full"
    >
      <h3 className="text-primary text-xl md:text-2xl mb-6">{title}</h3>
      {children}
    </motion.div>
  )
}

export default Skills
