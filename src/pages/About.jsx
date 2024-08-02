import React from 'react'
import Home_Section from '../home_sections/Hero_Section'
import Experience_Section from '../home_sections/Experience_Section'
import SiteWrapper from './../hoc/SiteWrapper'
import Topnav from '../components/Topnav'
import Skills_Section from '../home_sections/Skills_Section'

const About = () => {
  return (
    <>
      <Topnav />
      <SiteWrapper>
        <Home_Section />
        <Skills_Section />
        <Experience_Section className={'mt-192'} />
      </SiteWrapper>
    </>
  )
}

export default About
