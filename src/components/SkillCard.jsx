import React, { useRef } from 'react'
import { useEventListener } from './../hooks/useEventListener'
import { useToggle } from './../hooks/useToggle'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const SkillCard = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="skill relative" key={title}>
      <button className="flex aspect-square w-48  items-center justify-center rounded-sm bg-neutral-1400">
        <Icon className={'aspect-square w-32'} />
      </button>
      <motion.div className={twMerge('skill-description inset-x-1/2 rounded-sm p-8', clsx())}>
        <h3 className="font-axiforma text-base text-white underline">{title}</h3>
        <p className="max-w-[50ch] text-neutral-1100">{subtitle}</p>
      </motion.div>
    </div>
  )
}

export default SkillCard