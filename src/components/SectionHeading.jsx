import React from 'react'

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <header className="space-y-8">
      <h2 className="font-bold text-neutral-9100 underline text-heading-24">{heading}</h2>
      <p className="max-w-[65ch] text-sm text-neutral-1100">{subHeading}</p>
    </header>
  )
}

export default SectionHeading
