import React from 'react'
import TechPill from './TechPill'
import { projectFromTitle, tagFromTitle } from '../data/data'
import { useModalUpdate } from '../hooks/useModalUpdate'
import { motion } from 'framer-motion'

const ProjectCard = ({ image, title, description, tags }) => {
  const { openModal } = useModalUpdate()

  const handleClick = () => {
    openModal('project', { project: projectFromTitle(title) })
  }

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1
      }}
      onClick={handleClick}
      className="flex cursor-pointer flex-col rounded-sm bg-neutral-9300 bg-opacity-60 px-16 py-12 transition-transform hover:scale-105"
    >
      <div className="grid h-[172px] w-full place-items-stretch overflow-hidden rounded-sm">
        <img
          src={image}
          alt="project image"
          loading="lazy"
          className="h-[136px] w-full rounded-[inherit] object-cover"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-neutral-1100">{description}</p>
      </div>
      <div className="mt-16 flex flex-row-reverse flex-wrap justify-end gap-8">
        {tags.map(tag => (
          <TechPill key={tag} {...tagFromTitle(tag)} />
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard
