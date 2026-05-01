import { motion, useTransform, MotionValue } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  progress: MotionValue<number>
  index: number
  totalChars: number
}

const AnimatedLetter = ({ char, progress, index, totalChars }: AnimatedLetterProps) => {
  const charProgress = index / totalChars
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  )

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

export default AnimatedLetter
