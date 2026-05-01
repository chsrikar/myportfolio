import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
}

const WordsPullUp = ({ text, className = '', showAsterisk = false }: WordsPullUpProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = text.split(' ')

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1
        const hasAsterisk = showAsterisk && isLastWord && word.endsWith('a')
        const displayWord = hasAsterisk ? word : word

        return (
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block relative"
          >
            {displayWord}
            {hasAsterisk && (
              <span
                className="absolute text-[0.31em]"
                style={{ top: '0.65em', right: '-0.3em' }}
              >
                *
              </span>
            )}
            {index < words.length - 1 && '\u00A0'}
          </motion.span>
        )
      })}
    </div>
  )
}

export default WordsPullUp
