import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { InfiniteMovingCards } from '../components/InfiniteCards'
import Button from '../components/Button'
import {
  DockerLogo,
  FigmaLogo,
  GitLogo,
  JSLogo,
  MongodbLogo,
  NodeJSLogo,
  ReactLogo
} from '../assets/icons'
import { characteristics } from '../data/data'
import CharacterCard from '../components/CharacterCard'
import { useModalUpdate } from './../hooks/useModalUpdate'
import { container, itemLeft, itemRight } from '../data/animations'
import { useNavigate } from 'react-router-dom'
import TypeWriter from '../components/TypeWriter'

const Home_Section = ({ className }) => {
  const { openModal } = useModalUpdate()
  const navigate = useNavigate()

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className={twMerge('hero-section relative z-0 grid h-fit max-lg:mb-[356px]', className)}
    >
      <motion.div variants={itemLeft} className="z-0 flex flex-col gap-24 font-axiforma">
        <div className="big-text inline-block text-white max-lg:text-center">
          I'm <strong className="scale-105 text-violet brightness-[80%]">Opeoluwa</strong>, a{' '}
          <TypeWriter className="big-text shadow-text origin-top-left align-baseline text-green lg:inline lg:scale-105" />
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
          <Button className={'w-fit'} onClick={() => navigate('/contact')}>
            Get in Touch
          </Button>
          <Button className={'w-fit'} color={'secondary'} onClick={() => openModal('resume')}>
            Check out my resume
          </Button>
        </div>
      </motion.div>
      <motion.div variants={itemRight} className="stage-cube-cont grid lg:m-16">
        <div className="cubespinner text-green dark:text-violet">
          {(() => {
            const faceClassName = 'bg-green bg-violet bg-opacity-[0.1]'
            return (
              <>
                <div className={twMerge('face face1', faceClassName)}>
                  <ReactLogo />
                </div>
                <div className={twMerge('face face2', faceClassName)}>
                  <FigmaLogo className="scale-85" />
                </div>
                <div className={twMerge('face face3', faceClassName)}>
                  <NodeJSLogo />
                </div>
                <div className={twMerge('face face4', faceClassName)}>
                  <MongodbLogo />
                </div>
                <div className={twMerge('face face5', faceClassName)}>
                  <GitLogo />
                </div>
                <div className={twMerge('face face6', faceClassName)}>
                  <JSLogo />
                </div>
              </>
            )
          })()}
        </div>
      </motion.div>
      <div className="scroll-indicator m-0 bottom-0 absolute z-10 aspect-[1/2] w-32 self-end justify-self-center rounded-[9999px] border border-neutral-1200 shadow-inner after:bg-green max-lg:-mb-[312px] lg:-mb-64"></div>
    </motion.section>
  )
}

export default Home_Section
