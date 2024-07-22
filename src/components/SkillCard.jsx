import React from 'react'

const SkillCard = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="skill relative" key={title}>
      <button className="flex aspect-square w-48  items-center justify-center rounded-sm bg-neutral-1400">
        <Icon className={'aspect-square w-32'} />
      </button>
      <div className="skill-description inset-x-1/2 rounded-sm p-8">
        <h3 className="font-axiforma text-base text-white underline">{title}</h3>
        <p className="text-neutral-1100">{subtitle}</p>
      </div>
    </div>
  )
}

export default SkillCard
