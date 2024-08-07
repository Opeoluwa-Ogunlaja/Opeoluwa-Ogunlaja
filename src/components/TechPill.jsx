import React from 'react'
import { twMerge } from 'tailwind-merge'

const TechPill = ({ icon: Icon, tagTitle, className }) => {
  return (
    <div
      className={twMerge(
        'flex items-center gap-8 rounded-full bg-neutral-1300 bg-opacity-40 px-8 py-[2px] text-sm text-white',
        className
      )}
    >
      <Icon className="scale-80 aspect-square w-16 self-center text-white" />{' '}
      <span className="text-white">{tagTitle}</span>
    </div>
  )
}

export default TechPill
