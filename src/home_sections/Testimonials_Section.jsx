import React from 'react'
import SectionHeading from '../components/SectionHeading'
import { InfiniteMovingCards } from '../components/InfiniteCards'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/data'

const Testimonials_Section = () => {
  return (
    <section className="testimonials-section mx-auto mt-96 rounded-lg bg-neutral-9400 bg-opacity-90 max-sm:p-24 sm:w-3/4 sm:min-w-[720px] sm:p-64">
      <SectionHeading
        heading={'Testimonials'}
        subHeading={'What my previous clients have to say about me'}
      />
      <div className="rounded-md relative mt-48 flex h-[50vh] flex-col items-center justify-center overflow-hidden antialiased sm:px-32">
        <InfiniteMovingCards
          items={testimonials}
          innerShadow={true}
          direction="right"
          speed="normal"
          renderedElement={TestimonialCard}
        />
      </div>
    </section>
  )
}

export default Testimonials_Section
