import React from 'react'

const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <div className="rounded-sm bg-neutral-9400 bg-opacity-80 p-12">
      <div className="grid h-128 place-content-center rounded-sm bg-green">
        <img src={image} alt="project image" />
      </div>
      <div className="mt-12 flex flex-col gap-8">
        <h3 className="text-xl text-white">{title}</h3>
        <p className="text-xs text-gray">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard