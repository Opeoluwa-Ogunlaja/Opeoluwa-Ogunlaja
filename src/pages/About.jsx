import React from 'react'
import Home_Section from '../home_sections/Hero_Section'
import Experience_Section from '../home_sections/Experience_Section'
import SiteWrapper from './../hoc/SiteWrapper'

const About = () => {
  return (
    <>
      <SiteWrapper>
        <Home_Section />
        <Experience_Section />
      </SiteWrapper>
    </>
  )
}

export default About
