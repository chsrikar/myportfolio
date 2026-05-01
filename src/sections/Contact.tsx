import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const Contact = () => {
  const headerSegments = [
    { text: "Let's build something amazing.", className: 'text-primary' },
    { text: 'Together.', className: 'italic font-serif text-primary' },
  ]

  const contactMethods = [
    {
      label: 'Email',
      value: 'srikar@example.com',
      href: 'mailto:srikar@example.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/srikar',
      href: 'https://linkedin.com/in/srikar',
    },
    {
      label: 'GitHub',
      value: 'github.com/srikar',
      href: 'https://github.com/srikar',
    },
  ]

  return (
    <section id="contact" className="relative min-h-screen bg-black py-20 md:py-32 px-6">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal max-w-3xl mx-auto"
          />
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-[#101010] rounded-3xl p-8 md:p-12"
        >
          {/* Description */}
          <p className="text-gray-300 text-center mb-12 text-sm sm:text-base">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>

          {/* Contact Methods */}
          <div className="space-y-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-center justify-between p-6 bg-black/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div>
                  <p className="text-gray-400 text-xs mb-1">{method.label}</p>
                  <p className="text-primary text-sm sm:text-base">{method.value}</p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-primary transform -rotate-45 group-hover:scale-110 transition-transform"
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:srikar@example.com"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group bg-primary rounded-full text-black font-medium text-sm sm:text-base px-8 py-4 flex items-center justify-center gap-2 hover:gap-3 transition-all mx-auto w-fit"
          >
            <Mail size={18} />
            <span>Send me an email</span>
            <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={16} className="text-primary" />
            </div>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>© 2024 Srikar. Built with passion.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
