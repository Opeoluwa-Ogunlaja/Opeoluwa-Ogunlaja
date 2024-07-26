import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Experience from '../components/Timeline'
import { twMerge } from 'tailwind-merge'

const Experience_Section = ({ className }) => {
  return (
    <section className={twMerge('experience-section mt-96', className)}>
      <SectionHeading
        heading={'Experience'}
        subHeading={'This is a summary of my work experience over my career'}
      />
      <Experience />
    </section>
  )
}

export default Experience_Section
