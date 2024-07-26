import React from 'react'
import { FullLogo, ReactLogo } from '../assets/icons'
import './home.scss'
import Navlink from '../components/NavLink'
import Project_Section from '../home_sections/Project_Section'
import Experience_Section from './../home_sections/Experience_Section'
import Testimonials_Section from '../home_sections/Testimonials_Section'
import Form_Section from '../home_sections/Form_Section'
import Home_Section from '../home_sections/Hero_Section'
import Skills_Section from '../home_sections/Skills_Section'
import SiteWrapper from '../hoc/SiteWrapper'
import Topnav from '../components/Topnav'

const Home = () => {
  return (
    <>
      <Topnav />
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
