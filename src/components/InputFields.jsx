import clsx from 'clsx'
import React, { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'

const generalClass =
  'rounded-sm border border-green bg-neutral-9400 text-neutral-1100 placeholder:text-neutral-1200'
const iconStyle = 'absolute z-30 self-center text-green m-16 scale-75'
export const TextField = forwardRef((props, ref) => {
  const { className, icon: Icon, ...htmlProps } = props
  const id = useId()
  return (
    <div className="relative grid">
      {Icon && <Icon className={twMerge('', iconStyle)} />}
      <input
        {...htmlProps}
        type="text"
        id={id}
        ref={ref}
        className={twMerge('form-input', generalClass, className, clsx({ ['pl-48']: Icon }))}
      />
    </div>
  )
})

export const TextAreaField = forwardRef((props, ref) => {
  const { className, icon: Icon, ...htmlProps } = props
  const id = useId()

  return (
    <div className="relative grid">
      {Icon && <Icon className={twMerge('', iconStyle, 'm-12 self-start')} />}
      <textarea
        type="text"
        rows={3}
        id={id}
        ref={ref}
        {...htmlProps}
        className={twMerge('form-textarea', generalClass, className, clsx({ ['pl-48']: Icon }))}
      />
    </div>
  )
})
