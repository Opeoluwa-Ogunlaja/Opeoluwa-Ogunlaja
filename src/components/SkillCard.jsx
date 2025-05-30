import React from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const SkillCard = ({ icon: Icon, title, subtitle, type }) => {
  return (
    <motion.div className="skill relative" key={title}>
      <button className="flex aspect-square w-48  items-center justify-center rounded-sm bg-neutral-1300 bg-opacity-30">
        {typeof Icon !== 'string' ? (
          <Icon className={'aspect-square w-32 drop-shadow-lg'} />
        ) : (
          <img src={Icon} loading="lazy" className="w-32 drop-shadow-lg" />
        )}
      </button>
      <motion.div
        className={twMerge(
          'skill-description inset-x-1/2 rounded-sm bg-neutral-1300 p-8 drop-shadow-lg',
          clsx()
        )}
      >
        <h3 className="font-axiforma text-base text-white underline">{title}</h3>
        <span className="text-neutral-9200">{type}</span>
        <p className="max-w-[50ch] text-neutral-1100">{subtitle}</p>
      </motion.div>
    </motion.div>
  )
}

export default SkillCard
