import React from 'react'
import { TextAreaField, TextField } from '../components/InputFields'

const Form_Section = () => {
  return (
    <section className="form-section mt-192 grid place-content-around place-items-center">
      <form className="">
        <TextField />
        <TextField />
        <TextAreaField />
      </form>
    </section>
  )
}

export default Form_Section
