import VideoBackground from '../components/VideoBackground'

const Skills = () => {
  const technicalSkills = {
    Languages: ['C', 'C++', 'Python', 'JavaScript'],
    Web: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
    Backend: ['Node.js', 'Django', 'Express.js', 'REST APIs'],
    Databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  }

  const coreExpertise = [
    {
      title: 'System Architecture',
      description:
        'Designing scalable, maintainable systems with optimal performance and reliability',
    },
    {
      title: 'AI Model Development',
      description:
        'Building Physics-Informed Neural Networks (PINNs), datasets, and ML pipelines',
    },
    {
      title: 'NAS Server Setup',
      description:
        'Configuring and managing Network Attached Storage with OpenMediaVault',
    },
    {
      title: 'Data Engineering',
      description:
        'Creating robust data pipelines, ETL processes, and data management systems',
    },
  ]

  const tools = [
    'Git & GitHub',
    'Vercel',
    'Linux',
    'Raspberry Pi OS',
    'Docker',
    'VS Code',
    'Postman',
    'Jupyter Notebook',
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>

          {/* Technical Skills */}
          <section className="mb-20 animate-fade-rise-delay">
            <h2
              className="text-3xl md:text-4xl mb-12 text-white text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="liquid-glass rounded-2xl p-8">
                  <h3 className="text-2xl text-white mb-6">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Expertise */}
          <section className="mb-20">
            <h2
              className="text-3xl md:text-4xl mb-12 text-white text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Core Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreExpertise.map((item, index) => (
                <div
                  key={index}
                  className="liquid-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="text-2xl text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="animate-fade-rise-delay-2">
            <h2
              className="text-3xl md:text-4xl mb-12 text-white text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Tools & Technologies
            </h2>
            <div className="liquid-glass rounded-3xl p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="liquid-glass rounded-full px-6 py-3 text-base text-white hover:scale-[1.05] transition-transform"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Skills
