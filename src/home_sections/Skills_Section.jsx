import React from 'react'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/data'
import SkillCard from '../components/SkillCard'

const Skills_Section = () => {
  return (
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
  )
}

export default Skills_Section
