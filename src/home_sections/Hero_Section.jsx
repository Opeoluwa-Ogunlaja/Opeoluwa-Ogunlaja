import { motion } from 'framer-motion'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { InfiniteMovingCards } from '../components/InfiniteCards'
import Button from '../components/Button'
import { ReactLogo } from '../assets/icons'
import { characteristics } from '../data/data'
import CharacterCard from '../components/CharacterCard'

const Home_Section = ({ className }) => {
  return (
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
      className={twMerge('hero-section relative grid h-fit max-lg:mb-[356px]', className)}
    >
      <div className="flex flex-col gap-24 font-axiforma">
        <div className="big-text inline-block text-white max-lg:text-center">
          I'm <strong className="scale-105 text-violet">Opeoluwa</strong>, a{' '}
          <h3 className="big-text shadow-text origin-top-left align-baseline text-green lg:inline lg:scale-105">
            Web developer
          </h3>
        </div>
        <p className="max-w-[70ch] font-quicksand text-white max-lg:mx-24 max-lg:text-center max-lg:text-14">
          I'm a passionate full-stack developer with 3+ years of experience crafting engaging and
          impactful web experiences. From backend systems to pixel-perfect front-end design, I
          thrive on tackling challenges and delivering solutions that meet user needs and exceed
          expectations.
          <span className="max-lg:hidden lg:contents">
            {' '}
            I'm always eager to learn and grow, and I'm looking for opportunities to use my skills
            to create innovative and impactful solutions.
          </span>
        </p>
        <div className="relative max-lg:mx-auto max-lg:w-[325px] lg:w-[470px]">
          <InfiniteMovingCards
            items={characteristics}
            innerShadow={false}
            direction="left"
            speed="normal"
            listClass={'gap-8'}
            renderedElement={CharacterCard}
          />
        </div>
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
  )
}

export default Home_Section
