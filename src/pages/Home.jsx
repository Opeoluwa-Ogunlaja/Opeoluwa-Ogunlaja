import React from 'react'
import Button from '../components/Button'
import { FullLogo, ReactLogo } from '../assets/icons'
import ReactLogoImg from '../assets/icons/react.svg'
import './home.scss'
import { mockIteratable } from '../utilities/arr'
import Experience from '../components/Timeline'
import { InfiniteMovingCards } from '../components/InfiniteCards'

const Project = () => {
  return <div className=""></div>
}

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
            <div className="big-text inline-block text-white">
              I'm <strong className="scale-105  text-violet">Opeoluwa</strong>, a{' '}
              <h3 className="big-text shadow-text inline origin-top-left scale-105 align-baseline text-green">
                Web developer
              </h3>
            </div>
            <p className="max-w-[70ch] font-quicksand text-white">
              I'm a passionate full-stack developer with 3+ years of experience crafting engaging
              and impactful web experiences. From backend systems to pixel-perfect front-end design,
              I thrive on tackling challenges and delivering solutions that meet user needs and
              exceed expectations. I'm always eager to learn and grow, and I'm looking for
              opportunities to use my skills to create innovative and impactful solutions
            </p>
            <Button className={'w-fit'}>Get in Touch</Button>
          </div>

          <div className="stage-cube-cont m-16 grid">
            <div className="cubespinner">
              <div className="face1">
                <ReactLogo />
              </div>
              <div className="face2">
                <ReactLogo />
              </div>
              <div className="face3">
                <ReactLogo />
              </div>
              <div className="face4">
                <ReactLogo />
              </div>
              <div className="face5">
                <ReactLogo />
              </div>
              <div className="face6">
                <ReactLogo />
              </div>
            </div>
          </div>

          <div className="scroll-indicator m-0 bottom-0 absolute z-10 -mb-64 aspect-[1/2] w-32 self-end justify-self-center rounded-[9999px] border border-neutral-light-200 shadow-inner"></div>
        </section>

        <section className="skills-section mt-96">
          <header className="text-white">
            <h2 className="font-bold text-heading-24">Skills</h2>
            <p>Some of my executive skills for your viewing pleasure</p>
          </header>
          <div className="skills-grid mt-24 flex w-3/5 flex-wrap content-start gap-16">
            {mockIteratable(3).map((item, i) => {
              return (
                <div className="skill relative" key={`${String.fromCharCode(i)}${i}`}>
                  <button className="flex aspect-square w-48  items-center justify-center rounded-sm bg-neutral-light-400">
                    <ReactLogo className={'aspect-square w-32'} />
                  </button>
                  <div className="skill-description rounded-lg">
                    <div>
                      <h3>Na so una dey do for here?</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="projects-section mt-96">
          <header className="text-white">
            <h2 className="font-bold text-heading-24">Projects</h2>
            <p>Some of my my projects for your viewing pleasure</p>
          </header>
          <div className="mt-24 flex flex-col content-start gap-16 text-center">
            <ul className="mx-auto flex gap-24 text-white">
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Websites</a>
              </li>
            </ul>
            <div
              className="grid pb-48"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))',
                placeItems: 'center',
                placeContent: 'center'
              }}
            >
              {mockIteratable(3).map((item, i) => {
                return (
                  <div
                    className="flex w-[250px] flex-col gap-12 rounded-lg bg-white p-16 pb-32"
                    key={i}
                  >
                    <div className="grid aspect-video w-full place-content-center rounded-[inherit] bg-green">
                      <img src={ReactLogoImg} alt="Hello" />
                    </div>
                    <div className="text-start">
                      <h3 className="text-xl font-bold">Mindmaze</h3>
                      <p>A memory game built with the react library with a plethora of features</p>
                    </div>
                    <div className="mt-12 grid grid-flow-col gap-4 overflow-auto">
                      {mockIteratable(6).map((item, i) => (
                        <div
                          className="rounded-full bg-neutral-light-400 px-16 py-8 text-sm text-white"
                          key={item + i}
                        >
                          React
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <Experience />
        <div className="max-lg:mt-10 grid grid-flow-col overflow-hidden">
          <div className="rounded-md relative flex h-[50vh] flex-col items-center  justify-center overflow-hidden antialiased">
            <InfiniteMovingCards
              items={[
                { name: 'Me', title: 'Best he can be' },
                { name: 'Me', title: 'Best he can be' },
                { name: 'Me', title: 'Best he can be' }
              ]}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
