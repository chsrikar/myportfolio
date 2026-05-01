import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextSegment {
  text: string
  className: string
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[]
  containerClassName?: string
}

const WordsPullUpMultiStyle = ({
  segments,
  containerClassName = '',
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Split all segments into words while preserving their className
  const allWords: { word: string; className: string }[] = []
  segments.forEach((segment) => {
    const words = segment.text.split(' ')
    words.forEach((word) => {
      allWords.push({ word, className: segment.className })
    })
  })

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {allWords.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${item.className}`}
        >
          {item.word}
          {index < allWords.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </div>
  )
}

export default WordsPullUpMultiStyle
