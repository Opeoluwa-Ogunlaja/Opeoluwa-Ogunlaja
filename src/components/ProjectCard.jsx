import React from 'react'
import TechPill from './TechPill'
import { tagFromTitle } from '../data/data'

const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <div className="cursor-pointer rounded-sm bg-neutral-9400 bg-opacity-80 p-12 transition-transform hover:scale-105">
      <div className="grid h-128 place-content-center rounded-sm bg-green">
        <img src={image} alt="project image" />
      </div>
      <div className="mt-12 flex flex-col gap-8">
        <h3 className="text-xl text-white">{title}</h3>
        <p className="text-sm text-gray">{description}</p>
      </div>
      <div className="mt-32 flex flex-row-reverse flex-wrap justify-end gap-8">
        {tags.map(tag => (
          <TechPill key={tag} {...tagFromTitle(tag)} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
