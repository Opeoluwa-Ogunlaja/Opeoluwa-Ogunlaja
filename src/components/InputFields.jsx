import React, { useId } from 'react'
import { twMerge } from 'tailwind-merge'

const generalClass =
  'rounded-sm border-2 border-green bg-neutral-9400 text-neutral-1100 placeholder:text-neutral-1200'
export const TextField = props => {
  const id = useId()
  return (
    <div className="contents">
      <input {...props} type="text" id={id} className={twMerge('form-input', generalClass)} />
    </div>
  )
}

export const TextAreaField = props => {
  const id = useId()
  return (
    <div className="contents">
      <textarea {...props} type="text" id={id} className={twMerge('form-textarea', generalClass)} />
    </div>
  )
}
