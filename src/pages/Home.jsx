import React from 'react'
import Button from '../components/Button'
import { FullLogo, ReactLogo } from '../assets/icons'
import './home.scss'
import Navlink from '../components/NavLink'
import { twMerge } from 'tailwind-merge'
import useMediaQuery from '../hooks/useMediaQuery'
import { useToggle } from '../hooks/useToggle'
import clsx from 'clsx'
import SectionHeading from '../components/SectionHeading'
import { characteristics, skills } from '../data/data'
import SkillCard from '../components/SkillCard'
import { motion } from 'framer-motion'
import Project_Section from '../home_sections/Project_Section'
import Experience_Section from './../home_sections/Experience_Section'
import Testimonials_Section from '../home_sections/Testimonials_Section'
import { InfiniteMovingCards } from '../components/InfiniteCards'
import CharacterCard from '../components/CharacterCard'
import Form_Section from '../home_sections/Form_Section'
import Home_Section from '../home_sections/Hero_Section'
import Skills_Section from '../home_sections/Skills_Section'
import SiteWrapper from '../hoc/SiteWrapper'

const Home = () => {
  return (
    <>
      <header className="relative flex items-center max-lg:p-24 max-fold:p-12 lg:px-64 lg:py-32">
        <div className="logo flex items-center text-green">
          <FullLogo className="aspect-auto w-192 scale-90 lg:w-auto" />
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
                <Navlink to="/about">About</Navlink>
                <Navlink to="/contact">Contact Us</Navlink>
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
      <SiteWrapper>
        <Home_Section />

        <Skills_Section />

        <Project_Section />

        <Experience_Section />

        <Testimonials_Section />

        <Form_Section />
      </SiteWrapper>
      <footer className="relative mt-96 flex gap-24 bg-neutral-9400 bg-opacity-80 text-white max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-t-[64px] max-sm:p-48 max-sm:pb-64 sm:justify-start sm:rounded-t-[96px] sm:p-64">
        <span className="text-green">
          <FullLogo className="w-192" />
        </span>
        <div className="flex flex-col gap-8 text-center max-sm:justify-center">
          <h4 className="text-neutral-9200">Connect</h4>
          <ul>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>
        <ul className="flex gap-8 max-sm:mt-24 max-sm:justify-center sm:ml-auto">
          <li>
            <a href="">FB</a>
          </li>
          <li>
            <a href="">IG</a>
          </li>
        </ul>
        <div className="absolute inset-x-[0] bottom-32 flex justify-center gap-24 max-sm:mt-16">
          <Navlink to="/">Home</Navlink>
          <Navlink to="/home">About</Navlink>
        </div>
        <span className="absolute inset-x-[0] bottom-[0] text-center text-xs">
          Copyright &copy; {new Date().getFullYear()}.{' '}
          <strong className="text-green">Opeoluwa</strong>
        </span>
      </footer>
    </>
  )
}

export default Home
