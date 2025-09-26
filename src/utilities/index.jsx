export const wait = async delay => {
  return new Promise(resolve => {
    const timeoutId = setTimeout(() => {
      resolve()
      clearTimeout(timeoutId)
    }, delay)
  })
}

export const throttle = (func, delay) => {
  let prev = 0

  return (...args) => {
    const now = Date.now()
    if (now - prev > delay) {
      prev = now
      func(...args)
    }
  }
}
