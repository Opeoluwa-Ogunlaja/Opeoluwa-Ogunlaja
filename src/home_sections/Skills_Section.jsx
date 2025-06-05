import React from 'react'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/data'
import SkillCard from '../components/SkillCard'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { container } from '../data/animations'

const Skills_Section = ({ className }) => {
  return (
    <motion.section
      // variants={container}
      className={twMerge('skills-section max-w-[100cqw] max-lg:mt-192 lg:mt-128', className)}
    >
      <SectionHeading
        heading={'Skills and Tools'}
        subHeading={
          'Over the years, I have gained mastery of various tools and languages related to web development. A few of many are shown below'
        }
      />
      <div className="skills-grid mt-24 flex w-full flex-wrap gap-12 max-md:justify-center md:px-48">
        {skills.map((skill, i) => {
          return <SkillCard {...skill} key={skill.title} />
        })}
      </div>
    </motion.section>
  )
}

export default Skills_Section
