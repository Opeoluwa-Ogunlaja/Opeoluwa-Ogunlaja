import React, { useCallback, useState } from 'react'
import './page.css'
import { useEffect } from 'react'
import { useAnimationFrame } from './useAnimationFrame'
import { throttle } from '../../utilities'

const InteractiveElement = () => {
  const [tgX, setTgX] = useState(0)
  const [tgY, setTgY] = useState(0)

  // const [reset] = useAnimationFrame(
  //   throttle(() => {
  //     move()
  //   }, 500)
  // )

  function move(e) {
    setTgX(e.clientX)
    setTgY(e.clientY)
  }

  const eventHandler = useCallback(throttle(move, 250), [throttle])

  useEffect(() => {
    window.addEventListener('mousemove', eventHandler)

    return () => {
      window.removeEventListener('mousemove', eventHandler)
    }
  }, [])

  return (
    <div
      className="interactive transition-all"
      style={{
        transform: `translate(${Math.round(tgX / 20)}px, ${Math.round(tgY / 20)}px)`
      }}
    ></div>
  )
}

export const GradientPage = () => {
  return (
    <>
      <div className="gradient-bg after:bg-neutral-9300 max-sm:after:bg-opacity-80 sm:after:bg-opacity-85">
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
