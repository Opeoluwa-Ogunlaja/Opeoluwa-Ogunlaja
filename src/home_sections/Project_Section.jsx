import React, { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const Project_Section = () => {
  const [filter, setFilter] = useState('all')
  const tabButtonClassFn = bool =>
    twMerge(
      'hover:bg-neutral-1300 py-4 rounded-full px-12 transition',
      clsx({ ['underline text-green font-bold']: bool })
    )
  return (
    <section className="projects-section mt-128">
      <SectionHeading
        heading={'Projects'}
        subHeading={'Here are some examples of work I have done in the past'}
      />
      <div className="flex items-center justify-center text-center">
        <ul className="flex items-center gap-16 text-neutral-1100">
          <li>
            <button className={tabButtonClassFn(filter == 'all')}>All</button>
          </li>
          <li>
            <button className={tabButtonClassFn(filter == 'websites')}>Webites</button>
          </li>
        </ul>
      </div>
      <div className="projects-grid mt-24 grid flex-1 place-content-center gap-16">
        <ProjectCard />
      </div>
    </section>
  )
}

export default Project_Section
