import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { TextAreaField, TextField } from '../components/InputFields'
import Button from '../components/Button'
import { twMerge } from 'tailwind-merge'
import { AtIcon, MessageTextSquareIcon, UsersIcon } from '../assets/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { wait } from '../utilities'

const contactFormSchema = yup.object({
  name: yup.string(),
  email: yup.string().email('Email must be a valid email').required('Please input your email'),
  message: yup.string().required('Please write a message')
})

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    clearErrors,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(contactFormSchema)
  })
  const [successMsg, setSuccessMsg] = useState(false)
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const successMessage = "Thank you for contacting me. I'll get back to you as soon as possible"

  const onSubmit = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLICID
        }
      )

      setSuccessMsg(true)

      await wait(3000)

      setSuccessMsg(false)
      reset({
        email: '',
        name: '',
        message: ''
      })
    } catch (error) {
      setError('root', error)

      alert(error)

      await wait(2000)
      clearErrors('root')
    }

    setIsSubmitting(false)
  }

  watch('name')
  watch('email')
  watch('message')

  return (
    <form
      ref={formRef}
      className="relative grid gap-16 max-md:w-full md:min-w-[342px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-50 justify-self-center rounded-sm bg-neutral-1300 p-24 font-bold text-green shadow-lg md:translate-x-1/2"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>
      {errors?.root && (
        <h3 className="max-w-full text-center font-bold text-red">
          Sorry, The message wasn't sent. <br /> Please check your connection
        </h3>
      )}
      <div>
        <TextField
          placeholder="Email"
          name="email"
          {...register('email')}
          className="w-full bg-opacity-60 py-12"
          icon={AtIcon}
        />
        {errors?.email?.message && <span className="text-red">{errors?.email?.message}</span>}
      </div>
      <div>
        <TextField
          placeholder="Name"
          name="name"
          {...register('name')}
          className="w-full bg-opacity-60 py-12"
          icon={UsersIcon}
        />
        {errors?.name?.message && <span className="text-red">{errors?.name?.message}</span>}
      </div>
      <div>
        <TextAreaField
          placeholder="How may I help you?"
          className="w-full bg-opacity-60 py-12"
          {...register('message')}
          icon={MessageTextSquareIcon}
        />
        {errors?.message?.message && <span className="text-red">{errors?.message?.message}</span>}
      </div>
      <Button disabled={isSubmitting} className="px-16 max-md:w-full md:w-fit">
        Contact Me
      </Button>
    </form>
  )
}

const Form_Section = ({ className }) => {
  return (
    <section
      className={twMerge(
        'form-section flex flex-col items-center max-sm:gap-24 sm:gap-64',
        className
      )}
    >
      <h3 className="text-pretty text-center font-axiforma text-white max-sm:text-3xl sm:text-5xl">
        {(() => {
          const headlines = [
            <>
              Want to <strong className="text-green">Innovate</strong> together?
            </>,
            <>
              Ready to Start Something <strong className="text-green">Great</strong>?
            </>,
            <>
              Let's Make <strong className="text-green">Magic</strong> Happen!
            </>
          ]
          return headlines[Math.floor(Math.random() * headlines.length)]
        })()}
      </h3>
      <div className="form-grid grid place-content-around place-items-center gap-32">
        <ContactForm />
        <div className="flex h-full flex-col items-center gap-32 self-stretch justify-self-stretch rounded-lg border border-green bg-neutral-9400 bg-opacity-40 px-16 py-32  font-axiforma sm:min-w-[276px]">
          <strong className="text-center text-lg font-medium text-white">
            Here to help you build the best products
          </strong>

          <div className="flex flex-col justify-center gap-8">
            <img
              src="/me-jpg.png"
              alt="Profile"
              loading="lazy"
              className="mx-auto aspect-square w-96 rounded-full"
            />
            <span className="font-quicksand font-bold text-green">Opeoluwa Ogunlaja</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form_Section
