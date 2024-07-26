import React from 'react'
import Home_Section from '../home_sections/Hero_Section'
import Experience_Section from '../home_sections/Experience_Section'
import SiteWrapper from './../hoc/SiteWrapper'
import Topnav from '../components/Topnav'

const About = () => {
  return (
    <>
      <Topnav />
      <SiteWrapper>
        <Home_Section />
        <Experience_Section />
      </SiteWrapper>
    </>
  )
}

export default About
