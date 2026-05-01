import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const Projects = () => {
  const projects = [
    {
      type: 'card',
      number: '01',
      title: 'Athena AI',
      subtitle: 'Academic Intelligence System',
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
      description:
        'Academic prediction system estimating student performance using data-driven modeling and probabilistic simulation.',
      items: [
        'Linear Regression + Monte Carlo Simulation',
        'Predicts marks using study hours & sleep patterns',
        'Visual insights through graphs & distributions',
      ],
      tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'ML'],
    },
    {
      type: 'card',
      number: '02',
      title: 'Arc AI',
      subtitle: 'Architecture Discovery Platform',
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
      description:
        'AI-powered platform connecting clients with architects and designers using LLM-driven recommendations.',
      items: [
        'Smart matching with hybrid ML models',
        'Heuristic ranking for optimized results',
        'Scalable marketplace architecture',
      ],
      tech: ['LLM', 'Machine Learning', 'Backend Design'],
    },
    {
      type: 'card',
      number: '03',
      title: 'Alpha NAS',
      subtitle: 'Personal Cloud Infrastructure',
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
      description:
        'Self-hosted NAS system built with Raspberry Pi for centralized data management and personal cloud storage.',
      items: [
        'Built with Raspberry Pi + OpenMediaVault',
        'Secure and scalable architecture',
        'Complete setup documentation on GitHub',
      ],
      tech: ['Raspberry Pi', 'OMV', 'Linux'],
    },
    {
      type: 'card',
      number: '04',
      title: 'Distributed LLM',
      subtitle: 'Research Initiative',
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
      description:
        'Research exploring distributed architectures for LLMs using chunk-based processing inspired by torrent systems.',
      items: [
        'Model chunking & distributed inference',
        'Parallel processing of LLM components',
        'Scalable AI infrastructure design',
      ],
      tech: ['Research', 'Distributed Systems', 'LLM'],
      upcoming: true,
    },
  ]

  const headerSegments = [
    {
      text: 'Real-world projects. Practical solutions.',
      className: 'text-primary',
    },
    { text: 'Built with passion. Driven by impact.', className: 'text-gray-500' },
  ]

  return (
    <section id="projects" className="relative min-h-screen bg-black py-20 md:py-32 px-6">
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[520px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: any
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
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
      className="bg-[#212121] rounded-2xl p-6 flex flex-col justify-between h-64 lg:h-full"
    >
      {/* Top Section */}
      <div>
        {/* Upcoming Badge */}
        {project.upcoming && (
          <div className="inline-block mb-3">
            <span className="text-[10px] px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
              Upcoming Research
            </span>
          </div>
        )}

        {/* Icon */}
        <img
          src={project.icon}
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-3"
        />

        {/* Title with Number */}
        <h3 className="text-primary text-lg md:text-xl mb-1">
          {project.title}{' '}
          <span className="text-gray-500 text-sm">({project.number})</span>
        </h3>
        <p className="text-gray-500 text-xs mb-3">{project.subtitle}</p>

        {/* Description */}
        <p className="text-gray-400 text-xs mb-3 leading-relaxed">
          {project.description}
        </p>

        {/* Checklist Items */}
        <ul className="space-y-2 mb-3">
          {project.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
              <Check size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Learn More Link */}
      <a
        href="#"
        className="text-primary text-sm flex items-center gap-2 hover:gap-3 transition-all group mt-auto"
      >
        <span>View Details</span>
        <ArrowRight
          size={16}
          className="transform -rotate-45 group-hover:scale-110 transition-transform"
        />
      </a>
    </motion.div>
  )
}

export default Projects
