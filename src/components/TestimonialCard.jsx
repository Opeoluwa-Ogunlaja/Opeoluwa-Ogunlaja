import React from 'react'
import { TestimonialQuoteIcon } from '../assets/icons'

const TestimonialCard = ({ name, image, role, title, organisation, review }) => {
  return (
    <div className="relative isolate mx-auto w-[300px] rounded-lg bg-neutral-9500 bg-opacity-40 px-32 pb-24 pt-48 text-left text-snow hover:scale-[1.02]">
      <div className="absolute left-[0] top-[0] -z-10 translate-x-1/4 select-none">
        <TestimonialQuoteIcon className="select-none" />
      </div>
      <header className="flex items-center gap-8">
        <div>
          <img
            src={image}
            alt={`${name} - ${role}`}
            className="aspect-square !w-[56px] rounded-full shadow-inner"
          />
        </div>
        <div>
          <h4>{name}</h4>
          <span className="text-sm text-neutral-9200">{role}</span>
        </div>
      </header>
      <div className="mb-24 mt-16 space-y-16">
        <h5 className="font-medium">{title}</h5>
        <p className="text-sm text-white text-opacity-90">{review}</p>

        <p className="text-sm text-neutral-1100">{review}</p>
      </div>

      <span className="mt-24 text-xs">{organisation}</span>
    </div>
  )
}

export default TestimonialCard
