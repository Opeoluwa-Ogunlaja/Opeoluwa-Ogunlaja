import React, { useState } from 'react'
import Button from '../components/Button'
import { FullLogo, ReactLogo } from '../assets/icons'
// import ReactLogoImg from '../assets/icons/react.svg'
import './home.scss'
// import { mockIteratable } from '../utilities/arr'
// import Experience from '../components/Timeline'
// import { InfiniteMovingCards } from '../components/InfiniteCards'
// import Block from './Block'
import Navlink from '../components/NavLink'
import { twMerge } from 'tailwind-merge'
import useMediaQuery from '../hooks/useMediaQuery'
import { useToggle } from '../hooks/useToggle'
import clsx from 'clsx'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/data'
import SkillCard from '../components/SkillCard'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Project_Section from '../home_sections/Project_Section'

const Home = () => {
  return (
    <>
      <header className="relative flex items-center max-lg:p-24 max-fold:p-12 lg:px-64 lg:py-32">
        <div className="logo flex items-center text-green">
          <FullLogo className="aspect-auto w-128 lg:w-auto" />
        </div>
        {(() => {
          const largeScreen = useMediaQuery('(max-width:976px)')
          const [isOpen, toggle] = useToggle(false)

          return (
            <>
              <div
                className={twMerge(
                  'z-30 ml-auto flex items-center gap-16 font-quicksand transition max-lg:rounded-lg max-sm:invisible max-sm:absolute max-sm:inset-x-[0] max-sm:mt-128 max-sm:w-max max-sm:-translate-x-24 max-sm:translate-y-24 max-sm:flex-col max-sm:bg-neutral-1400 max-sm:px-32 max-sm:py-16 max-sm:opacity-0',
                  clsx({ ['max-sm:visible max-sm:opacity-100']: isOpen })
                )}
              >
                <Navlink to="/">Home</Navlink>
                <Navlink to="/home">About</Navlink>
                <Navlink to="/home">Contact Us</Navlink>
              </div>
              <button
                className="ml-auto text-xl text-white max-sm:visible sm:sr-only sm:invisible"
                onClick={toggle}
              >
                {!isOpen ? <>&#9776;</> : <>&times;</>}
              </button>
            </>
          )
        })()}
      </header>
      <main className="mt-64 max-lg:px-24 lg:px-64">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
                bounce: true
              }
            }
          }}
          className="hero-section relative grid h-fit max-lg:mb-[356px]"
        >
          <div className="flex flex-col gap-24 font-axiforma">
            <div className="big-text inline-block text-white max-lg:text-center">
              I'm <strong className="scale-105  text-violet">Opeoluwa</strong>, a{' '}
              <h3 className="big-text shadow-text origin-top-left align-baseline text-green lg:inline lg:scale-105">
                Web developer
              </h3>
            </div>
            <p className="max-w-[70ch] font-quicksand text-white max-lg:mx-24 max-lg:text-center max-lg:text-14">
              I'm a passionate full-stack developer with 3+ years of experience crafting engaging
              and impactful web experiences. From backend systems to pixel-perfect front-end design,
              I thrive on tackling challenges and delivering solutions that meet user needs and
              exceed expectations.
              <span className="max-lg:hidden lg:contents">
                {' '}
                I'm always eager to learn and grow, and I'm looking for opportunities to use my
                skills to create innovative and impactful solutions.
              </span>
            </p>
            <div className="flex gap-8 max-lg:mx-auto">
              <Button className={'w-fit'}>Get in Touch</Button>
              <Button className={'w-fit'} color={'secondary'}>
                Check out my resume
              </Button>
            </div>
          </div>
          <div className="stage-cube-cont grid lg:m-16">
            <div className="cubespinner text-green dark:text-violet">
              {(() => {
                const faceClassName = 'bg-green bg-violet bg-opacity-[0.1]'
                return (
                  <>
                    <div className={twMerge('face face1', faceClassName)}>
                      <ReactLogo />
                    </div>
                    <div className={twMerge('face face2', faceClassName)}>
                      <ReactLogo />
                    </div>
                    <div className={twMerge('face face3', faceClassName)}>
                      <ReactLogo />
                    </div>
                    <div className={twMerge('face face4', faceClassName)}>
                      <ReactLogo />
                    </div>
                    <div className={twMerge('face face5', faceClassName)}>
                      <ReactLogo />
                    </div>
                    <div className={twMerge('face face6', faceClassName)}>
                      <ReactLogo />
                    </div>
                  </>
                )
              })()}
            </div>
          </div>

          <div className="scroll-indicator m-0 bottom-0 absolute z-10 aspect-[1/2] w-32 self-end justify-self-center rounded-[9999px] border border-neutral-1200 shadow-inner after:bg-green max-lg:-mb-[312px] lg:-mb-64"></div>
        </motion.section>
        <section className="skills-section max-lg:mt-192 lg:mt-128">
          <SectionHeading
            heading={'Skills'}
            subHeading={
              'Over the years, I have gained mastery of various tools and languages related to web development. A few of many are shown below'
            }
          />
          <div className="skills-grid mt-24 flex w-3/5 flex-wrap content-start gap-16 pl-48">
            {skills.map((skill, i) => {
              return <SkillCard {...skill} key={skill.title} />
            })}
          </div>
        </section>

        <Project_Section />
      </main>
    </>
  )
}

export default Home
