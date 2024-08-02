export const wait = async delay => {
  return new Promise(resolve => {
    const timeoutId = setTimeout(() => {
      resolve()
      clearTimeout(timeoutId)
    }, delay)
  })
}
