import VideoBackground from '../components/VideoBackground'
import { Briefcase, Users, Code, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'CTO – IEDC',
      organization: 'Innovation and Entrepreneurship Development Cell',
      period: '2023 - Present',
      icon: <Briefcase size={32} />,
      responsibilities: [
        'Leading technical initiatives and innovation projects',
        'Managing development teams and coordinating cross-functional collaboration',
        'Strategic decision-making for technology stack and architecture',
        'Mentoring junior developers and fostering technical growth',
        'Overseeing project timelines and ensuring quality deliverables',
      ],
      achievements: [
        'Successfully launched multiple student-led tech projects',
        'Established development best practices and coding standards',
        'Built and scaled technical team from 5 to 20+ members',
      ],
    },
    {
      role: 'Webmaster – IEEE Kerala Section',
      organization: 'IEEE Kerala Section',
      period: '2023 - Present',
      icon: <Code size={32} />,
      responsibilities: [
        'Website management and maintenance for IEEE Kerala Section',
        'UI/UX improvements to enhance user experience',
        'Deployment & maintenance of web infrastructure',
        'Implementing new features based on stakeholder requirements',
        'Ensuring website security and performance optimization',
      ],
      achievements: [
        'Redesigned website with modern UI/UX principles',
        'Improved page load times by 40%',
        'Implemented automated deployment pipeline',
      ],
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
              Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leadership roles and professional experience in technology and innovation
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="liquid-glass rounded-3xl p-8 md:p-12 hover:scale-[1.01] transition-transform"
              >
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-white mt-1">{exp.icon}</div>
                  <div className="flex-1">
                    <h2
                      className="text-3xl md:text-4xl text-white mb-2"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {exp.role}
                    </h2>
                    <p className="text-xl text-gray-400 mb-2">{exp.organization}</p>
                    <p className="text-gray-500">{exp.period}</p>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                    <Users size={20} /> Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <span className="text-white mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                    <TrendingUp size={20} /> Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <span className="text-white mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Developed */}
          <section className="mt-20 animate-fade-rise-delay">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 text-center">
              <h2
                className="text-3xl md:text-4xl mb-6 text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Skills Developed Through Experience
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                {[
                  'Leadership',
                  'Team Management',
                  'Strategic Planning',
                  'Project Management',
                  'Technical Mentoring',
                  'Stakeholder Communication',
                  'Agile Methodologies',
                  'Problem Solving',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="liquid-glass rounded-full px-6 py-3 text-base text-white"
                  >
                    {skill}
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

export default Experience
