import React, { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { projects } from '../data/data'

const Project_Section = () => {
  const [filter, setFilter] = useState('')
  const tabButtonClassFn = bool =>
    twMerge(
      'hover:bg-neutral-9400 py-4 rounded-full px-16 transition font-axiforma',
      clsx({ ['underline bg-neutral-9400 text-green font-medium']: bool })
    )
  return (
    <section className="projects-section mt-128">
      <SectionHeading
        heading={'Projects'}
        subHeading={'Here are some examples of work I have done in the past'}
      />
      <div className="mt-24 flex items-center justify-center text-center">
        <ul className="flex items-center gap-16 text-neutral-1100">
          <li>
            <button className={tabButtonClassFn(filter == '')} onClick={() => setFilter('')}>
              All
            </button>
          </li>
          <li>
            <button
              className={tabButtonClassFn(filter == 'websites')}
              onClick={() => setFilter('websites')}
            >
              Webites
            </button>
          </li>
        </ul>
      </div>
      <div className="projects-grid mt-24 grid flex-1 place-content-center place-items-center gap-24">
        {projects.map((project, i) => {
          return <ProjectCard key={project.title + i} {...project} />
        })}
      </div>
    </section>
  )
}

export default Project_Section
