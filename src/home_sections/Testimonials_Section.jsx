import React from 'react'
import SectionHeading from '../components/SectionHeading'
import { InfiniteMovingCards } from '../components/InfiniteCards'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/data'
import useMediaQuery from '../hooks/useMediaQuery'

const Testimonials_Section = () => {
  const largeScreen = useMediaQuery('(max-width:976px)')

  return (
    <section className="testimonials-section mx-auto mt-96 rounded-lg bg-neutral-9400 bg-opacity-90 p-24 sm:w-7/12 sm:min-w-[720px] sm:px-64 sm:py-32">
      <SectionHeading
        heading={'Testimonials'}
        subHeading={'What my previous clients have to say about me'}
      />
      <div className="rounded-md relative mt-48 flex h-[50vh] flex-col items-center justify-center overflow-hidden antialiased">
        <InfiniteMovingCards
          items={testimonials}
          innerShadow={largeScreen}
          direction="right"
          speed="slow"
          renderedElement={TestimonialCard}
        />
      </div>
    </section>
  )
}

export default Testimonials_Section
