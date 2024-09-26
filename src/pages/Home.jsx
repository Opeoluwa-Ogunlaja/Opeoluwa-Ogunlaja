import React from 'react'
import { FacebookIcon, FullLogo, InstagramIcon } from '../assets/icons'
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

        <Form_Section className={'max-md:mt-48 md:mt-192'} />
      </SiteWrapper>
      <footer className="relative mt-96 flex gap-24 bg-neutral-9400 bg-opacity-80 text-white max-md:flex-col max-md:items-center max-md:justify-center max-md:rounded-t-[64px] max-md:p-48 max-md:pb-64 md:justify-start md:rounded-t-[96px] md:p-64">
        <span className="text-green">
          <FullLogo className="w-192" />
        </span>
        <div className="flex flex-col gap-8 text-center max-md:justify-center">
          <h4 className="text-neutral-9200">Connect</h4>
          <ul>
            <li>
              <a href="http://www.linkedin.com/in/o-opeoluwa" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/Ope_oluwa_77" target="_blank">
                X
              </a>
            </li>
          </ul>
        </div>
        <ul className="mb-48 flex gap-8 max-md:mt-24 max-md:justify-center md:ml-auto">
          <li>
            <a href="https://web.facebook.com/profile.php?id=100075021142594" target="_blank">
              <FacebookIcon className="scale-75" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_ope._.oluwa_/" target="_blank">
              <InstagramIcon className="scale-75" />
            </a>
          </li>
        </ul>
        <div className="absolute inset-x-[0] bottom-48 flex justify-center gap-24 max-md:mt-16">
          <Navlink to="/">Home</Navlink>
          <Navlink to="/about">About</Navlink>
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
