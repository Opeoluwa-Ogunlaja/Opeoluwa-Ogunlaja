import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'

export const sentenceVariants = {
  hidden: {
    transition: {
      delay: 1,
      staggerChildren: 0.17,
      staggerDirection: -1
    }
  },
  // change staggerChildren variable to speed up or slow down typing.
  visible: { transition: { staggerChildren: 0.2, staggerDirection: 1 } }
}

export const letterVariants = {
  hidden: { opacity: 0, visibility: 'hidden' },
  visible: { opacity: 1, visibility: 'visible' },
  exit: { opacity: 0, visibility: 'hidden' }
}

const blinkerVariant = {
  blink: {
    opacity: 0,
    transition: {
      duration: 0.9,
      repeat: Infinity
    }
  }
}

const titleOptions = ['Fullstack Developer', 'Problem Solver', 'Creative']

const Typewriter = ({ ...rest }) => {
  const counter = useRef(0)
  const index = useRef(0)
  const [text, setText] = useState(titleOptions[0])
  const [done, setDone] = useState(false)

  useLayoutEffect(() => {
    if (!done) {
      setText(titleOptions[index.current])
    }
  }, [done])

  return (
    <motion.h3
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate={done ? 'hidden' : 'visible'}
      onAnimationComplete={() => {
        counter.current++
        index.current = counter.current % 2 == 0 ? index.current + 1 : index.current
        if (index.current >= titleOptions.length) index.current = 0
        setDone(done => !done)
      }}
      {...rest}
    >
      {text.split('').map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
      {/* <motion.span
        animate="blink"
        variants={blinkerVariant}
        className="ml-[2] inline-block h-[1.2em] w-4 translate-y-12 bg-[currentColor]"
      /> */}
    </motion.h3>
  )
}

export default Typewriter
