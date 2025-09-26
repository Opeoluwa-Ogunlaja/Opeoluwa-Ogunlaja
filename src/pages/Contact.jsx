import React from 'react'
import SiteWrapper from '../hoc/SiteWrapper'
import Form_Section from '../home_sections/Form_Section'
import Topnav from '../components/Topnav'

const Contact = () => {
  return (
    <>
      <Topnav />

      <SiteWrapper>
        <Form_Section className={'mt-12'} />
      </SiteWrapper>
    </>
  )
}

export default Contact
