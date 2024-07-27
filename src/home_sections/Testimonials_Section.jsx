import React from 'react'
import SectionHeading from '../components/SectionHeading'
// import { InfiniteMovingCards } from '../components/InfiniteCards'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/data'
import { twMerge } from 'tailwind-merge'
import { InfiniteMovingCards } from './../components/InfiniteCards'

const Testimonials_Section = ({ className }) => {
  return (
    <section
      className={twMerge(
        'testimonials-section mx-auto mt-96 rounded-lg bg-neutral-9400 bg-opacity-10 max-sm:p-24 sm:w-3/4 sm:p-64',
        className
      )}
    >
      <SectionHeading
        heading={'Testimonials'}
        subHeading={'What my previous clients have to say about me'}
        className={'flex flex-col items-center justify-center text-center'}
      />
      <div className="rounded-md relative mt-48 flex h-[50vh] flex-col items-center justify-center overflow-hidden antialiased sm:px-32">
        <InfiniteMovingCards
          items={testimonials}
          innerShadow={false}
          direction="left"
          speed="normal"
          renderedElement={TestimonialCard}
        />
      </div>
    </section>
  )
}

export default Testimonials_Section
