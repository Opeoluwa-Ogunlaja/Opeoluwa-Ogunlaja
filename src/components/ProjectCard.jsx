import React from 'react'
import TechPill from './TechPill'
import { projectFromTitle, tagFromTitle } from '../data/data'
import { useModalUpdate } from '../hooks/useModalUpdate'

const ProjectCard = ({ image, title, description, tags }) => {
  const { openModal } = useModalUpdate()

  const handleClick = () => {
    openModal('project', { project: projectFromTitle(title) })
  }

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer flex-col gap-16 rounded-sm bg-neutral-9400 bg-opacity-80 p-12 transition-transform hover:scale-105"
    >
      <div className="grid h-[192px] place-content-center overflow-hidden rounded-sm">
        <img
          src={image}
          alt="project image"
          className="max-h-192 w-full rounded-[inherit] object-cover"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-xl text-white">{title}</h3>
        <p className="text-sm text-gray">{description}</p>
      </div>
      <div className="mt-16 flex flex-row-reverse flex-wrap justify-end gap-8">
        {tags.map(tag => (
          <TechPill key={tag} {...tagFromTitle(tag)} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
