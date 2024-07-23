import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  listClass,
  itemClass,
  innerShadow = true,
  renderedElement: Elem
}) => {
  const containerRef = React.useRef()
  const scrollerRef = React.useRef()

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={twMerge(
        // max-w-7xl to w-screen
        'scroller relative z-20 w-full overflow-hidden',
        className,
        clsx({
          ['[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]']:
            !innerShadow
        })
      )}
    >
      <ul
        ref={scrollerRef}
        className={twMerge(
          // change gap-16
          ' flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          listClass
        )}
      >
        {items.map((item, idx) => (
          <li
            className={twMerge('', itemClass)}
            style={{
              backgroundColor:
                !innerShadow && 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 -left-0.5 -top-0.5 pointer-events-none absolute"
              ></div>
              {Elem && <Elem {...item} />}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
