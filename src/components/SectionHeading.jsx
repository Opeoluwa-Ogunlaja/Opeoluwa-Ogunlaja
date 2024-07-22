import React from 'react'

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <header>
      <h2 className="font-bold text-neutral-9100 underline text-heading-24">{heading}</h2>
      <p className="text-neutral-1100">{subHeading}</p>
    </header>
  )
}

export default SectionHeading
