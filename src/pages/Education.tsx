import VideoBackground from '../components/VideoBackground'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const Education = () => {
  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Your College Name',
    period: '2021 - 2025',
    gpa: '8.5/10',
  }

  const coursework = [
    'Foundation of Computing',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Technologies',
    'System Design',
  ]

  const focusAreas = [
    {
      icon: <BookOpen size={32} />,
      title: 'Programming',
      description:
        'Strong foundation in C, C++, Python, and JavaScript with focus on problem-solving and algorithmic thinking',
    },
    {
      icon: <Award size={32} />,
      title: 'AI & ML',
      description:
        'Deep learning, neural networks, and practical applications of machine learning in real-world scenarios',
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'System Design',
      description:
        'Scalable architecture, distributed systems, and designing robust backend infrastructure',
    },
  ]

  const certifications = [
    'Machine Learning Specialization - Coursera',
    'Full Stack Web Development - Udemy',
    'AWS Cloud Practitioner',
    'Python for Data Science',
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
              Education
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Academic background and continuous learning journey
            </p>
          </div>

          {/* Degree Information */}
          <section className="mb-20 animate-fade-rise-delay">
            <div className="liquid-glass rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-white">
                  <GraduationCap size={48} />
                </div>
                <div className="flex-1">
                  <h2
                    className="text-3xl md:text-4xl text-white mb-3"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {education.degree}
                  </h2>
                  <p className="text-xl text-gray-400 mb-2">{education.institution}</p>
                  <p className="text-gray-500 mb-2">{education.period}</p>
                  <p className="text-gray-400">GPA: {education.gpa}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Focus Areas */}
          <section className="mb-20">
            <h2
              className="text-3xl md:text-4xl mb-12 text-white text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="liquid-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform text-center"
                >
                  <div className="text-white mb-4 flex justify-center">{area.icon}</div>
                  <h3 className="text-2xl text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Relevant Coursework */}
          <section className="mb-20">
            <h2
              className="text-3xl md:text-4xl mb-12 text-white text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Relevant Coursework
            </h2>
            <div className="liquid-glass rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {coursework.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-white mt-1">→</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="animate-fade-rise-delay-2">
            <h2
              className="text-3xl md:text-4xl mb-12 text-white text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Certifications & Online Learning
            </h2>
            <div className="liquid-glass rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-white mt-1">✓</span>
                    <span className="text-lg">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Education
