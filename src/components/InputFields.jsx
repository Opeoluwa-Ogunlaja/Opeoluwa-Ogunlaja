import React, { useId } from 'react'
import { twMerge } from 'tailwind-merge'

const generalClass =
  'rounded-sm border-2 border-green bg-neutral-9400 text-neutral-1100 placeholder:text-neutral-1200'
export const TextField = props => {
  const { className, icon: Icon, ...htmlProps } = props
  const id = useId()
  return (
    <div className="contents">
      <input
        {...htmlProps}
        type="text"
        id={id}
        className={twMerge('form-input', generalClass, className)}
      />
    </div>
  )
}

export const TextAreaField = props => {
  const { className, icon: Icon, ...htmlProps } = props
  const id = useId()
  return (
    <div className="contents">
      <textarea
        type="text"
        rows={3}
        id={id}
        {...htmlProps}
        className={twMerge('form-textarea', generalClass, className)}
      />
    </div>
  )
}
