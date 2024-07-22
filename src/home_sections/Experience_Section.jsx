import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Experience from '../components/Timeline'

const Experience_Section = () => {
  return (
    <section className="experience-section mt-96">
      <SectionHeading
        heading={'Experience'}
        subHeading={'This is a summary of my work experience over my career'}
      />
      <Experience />
    </section>
  )
}

export default Experience_Section
