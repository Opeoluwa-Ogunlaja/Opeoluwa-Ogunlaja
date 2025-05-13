import React from 'react'
import SectionHeading from '../components/SectionHeading'
// import { InfiniteMovingCards } from '../components/InfiniteCards'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/data'
import { twMerge } from 'tailwind-merge'
import { Carousel } from 'react-responsive-carousel'
import { ArrowLeftIcon, ArrowRightIcon } from '../assets/icons'

const Dot = (clickHandler, isSelected) => {
  return (
    <button
      onClick={clickHandler}
      className={`mx-4 aspect-square w-12 rounded-full border-2 border-neutral-1100 transition-all ${
        isSelected ? 'scale-110 bg-neutral-1300' : 'bg-white'
      }`}
    ></button>
  )
}

const CtrlBtn = (clickHandler, className, elem) => (
  <button
    onClick={clickHandler}
    className={twMerge(
      `absolute top-1/2 z-30 mx-4 grid aspect-square w-fit -translate-y-1/2 place-content-center rounded-full bg-neutral-1300 bg-opacity-40 p-16 text-white shadow-lg transition-all hover:scale-125`,
      className
    )}
  >
    {elem}
  </button>
)

const CtrlIcon = direction => {
  let className = 'aspect-square w-6'
  return direction == 'left' ? (
    <ArrowLeftIcon className={className} />
  ) : (
    <ArrowRightIcon className={className} />
  )
}

const PrevBtn = clickHandler => CtrlBtn(clickHandler, 'left-[0]', CtrlIcon('left'))

const NextBtn = clickHandler => CtrlBtn(clickHandler, 'right-[0]', CtrlIcon('right'))

const Testimonials_Section = ({ className }) => {
  const manyTestimonials = testimonials.length > 1
  return (
    <section
      className={twMerge(
        'testimonials-section mx-auto mt-96 rounded-lg bg-neutral-9300 bg-opacity-30 max-lg:w-full max-md:p-24 md:p-64 md:pb-[0] lg:w-3/4 lg:bg-opacity-40',
        className
      )}
    >
      <SectionHeading
        heading={'Testimonials'}
        subHeading={'What my previous clients have to say about me'}
        className={'flex flex-col items-center justify-center text-center'}
      />
      <div className="relative mt-48 grid h-[300px] grid-rows-1 items-center justify-center overflow-hidden antialiased md:px-32">
        <Carousel
          autoPlay={true}
          interval={2000}
          centerMode={true}
          centerSlidePercentage={100}
          showThumbs={false}
          infiniteLoop={true}
          renderArrowPrev={PrevBtn}
          renderArrowNext={NextBtn}
          renderIndicator={Dot}
          showStatus={false}
          className="absolute inset-[0] w-full bg-[transparent]"
        >
          {testimonials.map((testimonial, i) => {
            return <TestimonialCard key={`${testimonial.title}${i}`} {...testimonial} />
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials_Section
