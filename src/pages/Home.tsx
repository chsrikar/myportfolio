import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import VideoBackground from '../components/VideoBackground'

const Home = () => {
  const featuredProjects = [
    {
      title: 'Alpha - NAS Server & Data Bank',
      description: 'Centralized NAS system for secure data storage with OpenMediaVault',
      tech: ['Raspberry Pi', 'OMV', 'Linux'],
      link: '/projects',
    },
    {
      title: 'AI + PINN Model',
      description: 'Physics-Informed Neural Network with real-world constraints',
      tech: ['Python', 'TensorFlow', 'NIST Data'],
      link: '/projects',
    },
    {
      title: 'VISAT Website',
      description: 'Institutional website with optimized UI/UX deployed on Vercel',
      tech: ['React', 'Next.js', 'Vercel'],
      link: '/projects',
    },
  ]

  const skills = [
    'Python',
    'JavaScript',
    'React/Next.js',
    'Node.js',
    'Django',
    'AI/ML',
    'System Architecture',
    'Data Engineering',
  ]

  return (
    <div className="relative min-h-screen">
      <VideoBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Name & Title */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight font-normal animate-fade-rise mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Srikar
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 animate-fade-rise-delay">
            CTO | Machine learning | System Architect | AI Enthusiast
          </h2>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-rise-delay">
            Building intelligent systems, scalable architectures, and impactful digital
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-rise-delay-2">
            <Link
              to="/projects"
              className="liquid-glass rounded-full px-8 py-4 text-base text-white hover:scale-[1.03] transition-transform inline-flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="liquid-glass rounded-full px-8 py-4 text-base text-white hover:scale-[1.03] transition-transform"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-rise-delay-2">
            <a
              href="https://github.com/srikar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/srikar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:srikar@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Tech-Driven Problem Solver
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I specialize in building backend systems, AI pipelines, and scalable
            architectures that solve real-world problems. Currently serving as CTO at IEDC
            and Webmaster at IEEE Kerala Section.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My focus is on creating impactful solutions that bridge the gap between
            cutting-edge technology and practical applications.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3
              className="text-4xl sm:text-5xl text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Featured Projects
            </h3>
            <Link
              to="/projects"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="liquid-glass rounded-2xl p-6 hover:scale-[1.02] transition-transform group"
              >
                <h4 className="text-xl font-medium text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-gray-400 group-hover:text-white transition-colors inline-flex items-center gap-2">
                  Learn More <ExternalLink size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3
            className="text-4xl sm:text-5xl mb-12 text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Skills Snapshot
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="liquid-glass rounded-full px-6 py-3 text-base text-white"
              >
                {skill}
              </span>
            ))}
          </div>
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 mt-12 text-gray-400 hover:text-white transition-colors"
          >
            View All Skills <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className="text-4xl sm:text-5xl mb-6 text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let's Build Something Amazing
          </h3>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
          <Link
            to="/contact"
            className="liquid-glass rounded-full px-10 py-4 text-lg text-white hover:scale-[1.03] transition-transform inline-flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
