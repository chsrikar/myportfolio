import VideoBackground from '../components/VideoBackground'
import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Alpha - NAS Server & Data Bank',
      description:
        'A centralized NAS system designed for secure data storage, retrieval, and scalable usage.',
      features: [
        'OpenMediaVault setup for enterprise-grade storage',
        'Data management system with automated backups',
        'Scalable storage architecture supporting multiple protocols',
        'Secure remote access and file sharing',
      ],
      tech: ['Raspberry Pi', 'OpenMediaVault', 'Linux', 'Samba', 'NFS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI + PINN Model',
      description:
        'Physics-Informed Neural Network integrating real-world constraints with data-driven learning.',
      features: [
        'Synthetic + real dataset blending for robust training',
        'Physics constraint modeling based on NIST standards',
        'Custom data pipeline system for preprocessing',
        'Model optimization for accuracy and performance',
      ],
      tech: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'NIST Data'],
      github: '#',
      demo: '#',
    },
    {
      title: 'VISAT Website',
      description:
        'Developed and deployed institutional website with scalable frontend architecture.',
      features: [
        'Optimized UI/UX for enhanced user experience',
        'Deployment on Vercel with CI/CD pipeline',
        'Performance optimization and debugging',
        'Responsive design for all devices',
      ],
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'Git'],
      github: '#',
      demo: '#',
    },
    {
      title: 'ArtConnect - Startup Concept',
      description:
        'Platform connecting clients with architects, interior designers, and dealers.',
      features: [
        'Marketplace concept for design professionals',
        'Scalable backend planning with microservices',
        'AI chatbot integration for customer support',
        'Real-time communication system',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AI/ML'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <div className="relative min-h-screen">
      <VideoBackground />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-rise">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl mb-6 text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-world solutions built with cutting-edge technology
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="liquid-glass rounded-3xl p-8 md:p-12 hover:scale-[1.01] transition-transform"
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <h2
                    className="text-3xl md:text-4xl text-white mb-4 md:mb-0"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <span className="text-white mt-1">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
