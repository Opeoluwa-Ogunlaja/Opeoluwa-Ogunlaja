import React, { useCallback, useState } from 'react'
import './page.css'
import { useEffect } from 'react'
import { useAnimationFrame } from './useAnimationFrame'

const InteractiveElement = () => {
  const [curX, setCurX] = useState(0)
  const [curY, setCurY] = useState(0)
  const [tgX, setTgX] = useState(0)
  const [tgY, setTgY] = useState(0)

  const [reset] = useAnimationFrame(() => {
    move()
  })

  function move() {
    setCurX(current => current + (tgX - current) / 20)
    setCurY(current => current + (tgY - current) / 20)
    reset()
  }

  const eventHandler = useCallback(e => {
    setTgX(e.clientX)
    setTgY(e.clientY)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', eventHandler)

    return () => {
      window.removeEventListener('mousemove', eventHandler)
    }
  }, [])

  return (
    <div
      className="interactive"
      style={{
        transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
      }}
    ></div>
  )
}

export const GradientPage = () => {
  return (
    <>
      <div className="gradient-bg after:bg-neutral-9300 max-sm:after:bg-opacity-80 sm:after:bg-opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <InteractiveElement />
        </div>
      </div>
    </>
  )
}
