import React from 'react'
import Home_Section from '../home_sections/Hero_Section'
import Experience_Section from '../home_sections/Experience_Section'
import SiteWrapper from './../hoc/SiteWrapper'
import Topnav from '../components/Topnav'
import Skills_Section from '../home_sections/Skills_Section'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <Topnav />
      <SiteWrapper className={'pb-32'}>
        <motion.section className="sticky top-48 z-50 mx-24 hidden w-10/12 bg-neutral-9500 bg-opacity-70">
          <motion.ul>
            <motion.li>Hello</motion.li>
          </motion.ul>
        </motion.section>
        <Home_Section />
        <Skills_Section />
        <Experience_Section className={'mt-192'} />
      </SiteWrapper>
    </>
  )
}

export default About
