import React, { useCallback, useState, useRef } from 'react'
import './page.css'
import { useEffect } from 'react'

const InteractiveElement = () => {
  const [cur, setCur] = useState({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const reqRef = useRef()

  // Smoother, less staggered movement
  const move = useCallback(() => {
    setCur(prev => {
      const dx = target.current.x - prev.x
      const dy = target.current.y - prev.y
      // Faster catch-up, less stagger
      return {
        x: prev.x + dx * 0.25,
        y: prev.y + dy * 0.25
      }
    })
    reqRef.current = requestAnimationFrame(move)
  }, [])

  useEffect(() => {
    reqRef.current = requestAnimationFrame(move)
    return () => cancelAnimationFrame(reqRef.current)
  }, [move])

  useEffect(() => {
    const handler = e => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div
      className="interactive transition-transform"
      style={{
        transform: `translate(${Math.round(cur.x)}px, ${Math.round(cur.y)}px)`
      }}
    ></div>
  )
}

export const GradientPage = ({ children }) => {
  return (
    <>
      <div className="gradient-bg opacity-70 after:bg-neutral-9300 max-sm:after:bg-opacity-50 sm:after:bg-opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -6"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" mode="normal" />
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
      {children}
    </>
  )
}
