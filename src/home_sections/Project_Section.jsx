import React, { useMemo, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { projects } from '../data/data'
import { motion, AnimatePresence } from 'framer-motion'

const projectsVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const Project_Section = ({ className }) => {
  const [filter, setFilter] = useState('')
  const tabButtonClassFn = bool =>
    twMerge(
      'hover:bg-neutral-9400 py-8 rounded-full px-24 transition font-axiforma',
      clsx({ ['underline bg-neutral-9400 text-green font-medium']: bool })
    )

  const memoizedProjects = useMemo(() => {
    return filter !== '' ? projects.filter(project => project.tags.indexOf(filter) > -1) : projects
  }, [filter])
  return (
    <section className={twMerge('projects-section mt-128', className)}>
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
              className={tabButtonClassFn(filter == 'website')}
              onClick={() => setFilter('website')}
            >
              Webites
            </button>
          </li>
          <li>
            <button
              className={tabButtonClassFn(filter == 'game')}
              onClick={() => setFilter('game')}
            >
              Games
            </button>
          </li>
        </ul>
      </div>
      <motion.div
        variants={projectsVariant}
        className="projects-grid mt-24 grid flex-1 place-content-center gap-24"
      >
        <AnimatePresence initial={true}>
          {memoizedProjects.map((project, i) => {
            return <ProjectCard key={project.title + i} {...project} />
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Project_Section
