import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const skills = {
  'Technical Skills': {
    Languages: ['Python', 'C', 'DBMS'],
    'ML / DL': [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'NumPy',
      'Pandas',
    ],
    'LLM Engineering': [
      'Tokenization',
      'RoPE',
      'GQA',
      'YaRN',
      'Prompt Engineering',
    ],
  },
  'Research & Engineering': [
    'LLM Architecture & Component Integration',
    'Model Optimization & Efficient Inference',
    'Deep Learning & Model Evaluation',
    'Knowledge Distillation & Mixed Precision',
    'AI Pipelines & System Architecture',
    'Research Prototyping & Experimentation',
  ],
  Tools: [
    'Git & GitHub',
    'Linux / Arch Linux',
    'Docker',
    'Jupyter Notebook',
    'Ollama',
    'Raspberry Pi',
    'Vercel',
  ],
}

const headerSegments = [
  {
    text: 'Research-driven skills.',
    className: 'text-primary',
  },
  {
    text: 'Built through experiments. Proven through projects.',
    className: 'text-gray-500',
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black py-20 md:py-32 px-6"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-5xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SkillCard title="Technical Skills" index={0}>
            <div className="space-y-6">
              {Object.entries(skills['Technical Skills']).map(
                ([category, items]) => (
                  <div key={category}>
                    <h4 className="text-primary text-sm font-medium mb-3">
                      {category}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-gray-300 border border-primary/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </SkillCard>

          <SkillCard title="Research & Engineering" index={1}>
            <ul className="space-y-4">
              {skills['Research & Engineering'].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                >
                  <span className="text-primary mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SkillCard>

          <SkillCard title="Tools & Infrastructure" index={2}>
            <div className="flex flex-wrap gap-3">
              {skills.Tools.map((tool) => (
                <span
                  key={tool}
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
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={
        isInView
          ? { y: 0, opacity: 1 }
          : { y: 24, opacity: 0 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#212121] rounded-2xl p-8 h-full"
    >
      <h3 className="text-primary text-xl md:text-2xl mb-6">
        {title}
      </h3>
      {children}
    </motion.div>
  )
}

export default Skills