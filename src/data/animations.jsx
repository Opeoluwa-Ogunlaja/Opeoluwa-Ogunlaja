export const container = {
  hidden: { opacity: 0.7 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
      ease: 'easeInOut',
      duration: 0.3
    }
  }
}

export const navDown = {
  hidden: { opacity: 0.7, y: -16 }, // subtle vertical offset
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.25 } }
}

export const item = {
  hidden: { opacity: 0.7 },
  visible: { opacity: 1, transition: { ease: 'easeOut', duration: 0.2 } }
}

export const itemLeft = {
  hidden: { opacity: 0.7, x: -12 }, // subtle left offset
  visible: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.25 } }
}

export const itemRight = {
  hidden: { opacity: 0.7, x: 12 }, // subtle right offset
  visible: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.25 } }
}

export const sideRight = {
  hidden: { opacity: 0.85, x: 24 }, // subtle right offset
  visible: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.3 } }
}
