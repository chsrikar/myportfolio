import VideoBackground from '../components/VideoBackground'
import { BookOpen, Map, Wrench, FileText, ExternalLink } from 'lucide-react'

const KnowledgeHub = () => {
  const roadmaps = [
    {
      title: 'Backend Development Roadmap',
      description: 'Complete guide from basics to advanced backend engineering',
      topics: ['Node.js', 'Databases', 'APIs', 'Authentication', 'Deployment'],
      link: '#',
    },
    {
      title: 'AI/ML Learning Path',
      description: 'Structured approach to mastering artificial intelligence',
      topics: ['Python', 'Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision'],
      link: '#',
    },
    {
      title: 'System Design Journey',
      description: 'From fundamentals to designing scalable distributed systems',
      topics: ['Architecture', 'Scalability', 'Databases', 'Caching', 'Load Balancing'],
      link: '#',
    },
  ]

  const skillCorner = [
    {
      category: 'Programming Languages',
      resources: [
        { name: 'C++ Best Practices', link: '#' },
        { name: 'Python Advanced Concepts', link: '#' },
        { name: 'JavaScript ES6+ Guide', link: '#' },
      ],
    },
    {
      category: 'Web Development',
      resources: [
        { name: 'React Patterns & Best Practices', link: '#' },
        { name: 'Next.js Complete Guide', link: '#' },
        { name: 'Tailwind CSS Mastery', link: '#' },
      ],
    },
    {
      category: 'Backend & Databases',
      resources: [
        { name: 'Node.js Performance Optimization', link: '#' },
        { name: 'Database Design Principles', link: '#' },
        { name: 'API Design Best Practices', link: '#' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      resources: [
        { name: 'Neural Networks from Scratch', link: '#' },
        { name: 'TensorFlow & PyTorch Guide', link: '#' },
        { name: 'ML Model Deployment', link: '#' },
      ],
    },
  ]

  const notes = [
    {
      title: 'C++ Programming Notes',
      description: 'Comprehensive notes covering OOP, STL, and advanced concepts',
      topics: ['Pointers', 'Templates', 'STL', 'Memory Management'],
      icon: <FileText size={32} />,
      link: '#',
    },
    {
      title: 'Python for Data Science',
      description: 'Essential Python libraries and data manipulation techniques',
      topics: ['NumPy', 'Pandas', 'Matplotlib', 'Data Analysis'],
      icon: <FileText size={32} />,
      link: '#',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Theory and practical implementation of ML algorithms',
      topics: ['Supervised Learning', 'Neural Networks', 'Model Training', 'Evaluation'],
      icon: <FileText size={32} />,
      link: '#',
    },
    {
      title: 'System Design Patterns',
      description: 'Common patterns and architectures for scalable systems',
      topics: ['Microservices', 'Event-Driven', 'CQRS', 'API Gateway'],
      icon: <FileText size={32} />,
      link: '#',
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
              Knowledge Hub
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learning resources, roadmaps, and curated notes to accelerate your tech
              journey
            </p>
          </div>

          {/* Learning Roadmaps */}
          <section className="mb-20 animate-fade-rise-delay">
            <div className="flex items-center gap-3 mb-12">
              <Map size={32} className="text-white" />
              <h2
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Learning Roadmaps
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmaps.map((roadmap, index) => (
                <a
                  key={index}
                  href={roadmap.link}
                  className="liquid-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform group"
                >
                  <h3 className="text-2xl text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {roadmap.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {roadmap.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {roadmap.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-colors inline-flex items-center gap-2">
                    View Roadmap <ExternalLink size={16} />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Skill Corner */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <Wrench size={32} className="text-white" />
              <h2
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Skill Corner
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCorner.map((section, index) => (
                <div key={index} className="liquid-glass rounded-2xl p-8">
                  <h3 className="text-2xl text-white mb-6">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.resources.map((resource, i) => (
                      <li key={i}>
                        <a
                          href={resource.link}
                          className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                          <span className="text-white">→</span>
                          <span>{resource.name}</span>
                          <ExternalLink
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Notes & Documentation */}
          <section className="animate-fade-rise-delay-2">
            <div className="flex items-center gap-3 mb-12">
              <BookOpen size={32} className="text-white" />
              <h2
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Notes & Documentation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {notes.map((note, index) => (
                <a
                  key={index}
                  href={note.link}
                  className="liquid-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform group"
                >
                  <div className="text-white mb-4">{note.icon}</div>
                  <h3 className="text-2xl text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{note.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {note.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-colors inline-flex items-center gap-2">
                    Read Notes <ExternalLink size={16} />
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeHub
