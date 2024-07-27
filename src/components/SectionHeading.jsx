import React from 'react'
import { twMerge } from 'tailwind-merge'

const SectionHeading = ({ heading, subHeading, className }) => {
  return (
    <header className={twMerge('space-y-8', className)}>
      <h2 className="font-bold text-neutral-9100 underline text-heading-24">{heading}</h2>
      <p className="max-w-[65ch] text-sm text-neutral-1100">{subHeading}</p>
    </header>
  )
}

export default SectionHeading
