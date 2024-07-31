export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      bounce: true
    }
  }
}

export const navDown = {
  hidden: { opacity: 0.3, y: '-3rem' },
  visible: { opacity: 1, y: '0' }
}

export const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export const itemLeft = {
  hidden: { opacity: 0, x: '-2rem' },
  visible: { opacity: 1, x: '0' }
}

export const itemRight = {
  hidden: { opacity: 0, x: '2rem' },
  visible: { opacity: 1, x: '0' }
}

export const sideRight = {
  hidden: { opacity: 0.7, x: '5rem' },
  visible: { opacity: 1, x: '0' }
}
