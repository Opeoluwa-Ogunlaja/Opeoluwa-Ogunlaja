import React from 'react'
import SectionHeading from '../components/SectionHeading'
import { InfiniteMovingCards } from '../components/InfiniteCards'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/data'

const Testimonials_Section = () => {
  return (
    <section className="testimonials-section mx-auto mt-96 rounded-lg bg-neutral-9400 p-24 sm:w-3/5 sm:min-w-[720px] sm:px-64 sm:py-32">
      <SectionHeading
        heading={'Testimonials'}
        subHeading={'What my previous clients have to say about me'}
      />
      <div className="rounded-md relative mt-48 flex h-[50vh] flex-col items-center justify-center overflow-hidden antialiased">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          renderedElement={TestimonialCard}
        />
      </div>
    </section>
  )
}

export default Testimonials_Section
