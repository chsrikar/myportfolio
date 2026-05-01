import VideoBackground from '../components/VideoBackground'
import { Code, Brain, Server, Layers } from 'lucide-react'

const About = () => {
  const whatIDo = [
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description:
        'Building robust, scalable server-side applications with Node.js and Django',
    },
    {
      icon: <Brain size={32} />,
      title: 'AI/ML Systems',
      description:
        'Developing intelligent systems with machine learning and neural networks',
    },
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Creating modern, responsive web applications with React and Next.js',
    },
    {
      icon: <Layers size={32} />,
      title: 'System Design',
      description:
        'Architecting scalable systems and infrastructure for optimal performance',
    },
  ]

  const roles = [
    {
      title: 'CTO – IEDC',
      points: [
        'Leading technical initiatives',
        'Managing development teams',
        'Strategic decision-making',
      ],
    },
    {
      title: 'Webmaster – IEEE Kerala Section',
      points: ['Website management', 'UI/UX improvements', 'Deployment & maintenance'],
    },
  ]

  return (
    <div className="relative min-h-screen">
      <VideoBackground />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-rise">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl mb-6 text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tech-driven problem solver with a strong focus on backend systems, AI
              pipelines, and scalable architectures.
            </p>
          </div>

          {/* Who I Am */}
          <section className="mb-20 animate-fade-rise-delay">
            <div className="liquid-glass rounded-3xl p-8 md:p-12">
              <h2
                className="text-3xl md:text-4xl mb-6 text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Who I Am
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm a passionate technologist who believes in building solutions that make
                a real difference. My journey in tech has been driven by curiosity and a
                desire to solve complex problems through elegant code and innovative
                thinking.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise spanning backend development, artificial intelligence, and
                system architecture, I focus on creating robust, scalable solutions that
                bridge the gap between cutting-edge technology and practical applications.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section className="mb-20">
            <h2
              className="text-3xl md:text-4xl mb-12 text-white text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatIDo.map((item, index) => (
                <div
                  key={index}
                  className="liquid-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform"
                >
                  <div className="text-white mb-4">{item.icon}</div>
                  <h3 className="text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Current Roles */}
          <section className="mb-20">
            <h2
              className="text-3xl md:text-4xl mb-12 text-white text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Current Roles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <div key={index} className="liquid-glass rounded-2xl p-8">
                  <h3 className="text-2xl text-white mb-6">{role.title}</h3>
                  <ul className="space-y-3">
                    {role.points.map((point, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <span className="text-white mt-1">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Mindset */}
          <section className="animate-fade-rise-delay-2">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 text-center">
              <h2
                className="text-3xl md:text-4xl mb-6 text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                My Mindset
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Focused on building <span className="text-white">real-world solutions</span>
                , not just academic projects. I believe in learning by doing, iterating
                quickly, and creating technology that has tangible impact.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
