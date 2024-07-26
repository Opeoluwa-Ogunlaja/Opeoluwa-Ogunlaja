import React from 'react'
import TechPill from './TechPill'
import { tagFromTitle } from '../data/data'

const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-16 rounded-sm bg-neutral-9400 bg-opacity-80 p-12 transition-transform hover:scale-105">
      <div className="grid place-content-center rounded-sm">
        <img src={image} alt="project image" className="max-h-192 w-full object-cover" />
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
