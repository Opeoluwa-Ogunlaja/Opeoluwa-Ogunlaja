import React from 'react'
import Button from '../components/Button'
import { FullLogo, ReactLogo } from '../assets/icons'
import './home.scss'

const Home = () => {
  return (
    <>
      <header className="flex items-center p-64">
        <div className="logo text-violet">
          <FullLogo />
        </div>
        <div className="ml-auto flex items-center gap-16 font-quicksand">
          <a href="/home" className="font-bold text-violet">
            Home
          </a>
          <a href="/home" className="font-medium text-gray">
            About
          </a>
          <a href="/home" className="font-medium text-gray">
            Contact Us
          </a>
        </div>
      </header>
      <main className="mt-32 px-64">
        <section className="hero-section relative grid h-fit">
          <div className="flex flex-col gap-24 font-axiforma">
            <div className="big-text inline-block">
              I'm <strong className=" scale-105 text-violet">Opeoluwa</strong>, a{' '}
              <h3 className="big-text inline origin-top-left scale-105 align-baseline text-green">
                Web developer
              </h3>
            </div>
            <p className="max-w-[70ch] font-quicksand text-gray">
              I'm a passionate full-stack developer with 3+ years of experience crafting engaging
              and impactful web experiences. From backend systems to pixel-perfect front-end design,
              I thrive on tackling challenges and delivering solutions that meet user needs and
              exceed expectations. I'm always eager to learn and grow, and I'm looking for
              opportunities to use my skills to create innovative and impactful solutions
            </p>
            <Button className={'w-fit'}>Get in Touch</Button>
          </div>

          <div className="stage-cube-cont m-16">
            <div className="cubespinner">
              <div className="face1"><ReactLogo/></div>
              <div className="face2"><ReactLogo/></div>
              <div className="face3"><ReactLogo/></div>
              <div className="face4"><ReactLogo/></div>
              <div className="face5"><ReactLogo/></div>
              <div className="face6"><ReactLogo/></div>
            </div>
          </div>

          <div className="m-0 absolute z-10 bottom-0 -mb-64 aspect-[1/2] w-32 self-end justify-self-center rounded-[9999px] border border-neutral-light-200 shadow-inner"></div>
        </section>

        <section className="skills-section mt-96">
          <header>
            <h2 className="font-bold text-heading-24">Skills</h2>
            <p>Some of my executive skills for your viewing pleasure</p>
          </header>
          <div className="skills-grid mt-24 flex w-3/5 flex-wrap content-start gap-16">
            <div className="skill flex aspect-square w-48 items-center justify-center rounded-sm bg-neutral-light-400">
              <ReactLogo className={'aspect-square w-32'} />
            </div>
            <div className="skill flex aspect-square w-48 items-center justify-center rounded-sm bg-neutral-light-400">
              <ReactLogo className={'aspect-square w-32'} />
            </div>
            <div className="skill flex aspect-square w-48 items-center justify-center rounded-sm bg-neutral-light-400">
              <ReactLogo className={'aspect-square w-32'} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
