import React from 'react'
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

const Project = () => {
  return <div className=""></div>
}

const Home = () => {
  return (
    <>
      <header className="relative flex items-center max-lg:p-24 max-fold:p-12 lg:px-64 lg:py-32">
        <div className="logo flex items-center text-green">
          <FullLogo className="aspect-auto w-128 lg:w-auto" />
        </div>
        <div className="z-30 ml-auto flex items-center gap-16 font-quicksand transition max-lg:rounded-lg max-sm:absolute max-sm:inset-x-[0] max-sm:mt-128 max-sm:w-max max-sm:-translate-x-24 max-sm:translate-y-24 max-sm:flex-col max-sm:bg-neutral-1400 max-sm:px-32 max-sm:py-16">
          <Navlink to="/">Home</Navlink>
          <Navlink to="/home">About</Navlink>
          <Navlink to="/home">Contact Us</Navlink>
        </div>
        <button className="ml-auto text-xl text-white max-sm:visible sm:sr-only sm:invisible">
          &#9776;
        </button>
      </header>
      <main className="mt-64 max-lg:px-24 lg:px-64">
        <section className="hero-section relative grid h-fit">
          <div className="flex flex-col gap-24 font-axiforma">
            <div className="big-text inline-block text-white max-lg:text-center">
              I'm <strong className="scale-105  text-violet">Opeoluwa</strong>, a{' '}
              <h3 className="big-text shadow-text origin-top-left align-baseline text-green lg:inline lg:scale-105">
                Web developer
              </h3>
            </div>
            <p className="max-w-[70ch] font-quicksand text-white max-lg:text-center max-lg:text-14 max-sm:text-12">
              I'm a passionate full-stack developer with 3+ years of experience crafting engaging
              and impactful web experiences. From backend systems to pixel-perfect front-end design,
              I thrive on tackling challenges and delivering solutions that meet user needs and
              exceed expectations. I'm always eager to learn and grow, and I'm looking for
              opportunities to use my skills to create innovative and impactful solutions
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
        </section>
      </main>
    </>
  )
}

export default Home
