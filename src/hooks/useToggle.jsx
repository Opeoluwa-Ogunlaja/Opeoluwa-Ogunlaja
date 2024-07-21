import { useState } from 'react'

export const useToggle = initialValue => {
  const [bool, setBool] = useState(initialValue)

  const toggle = () => {
    setBool(bool => !bool)
  }

  const set = val => {
    setBool(val)
  }

  return [bool, toggle, set]
}
