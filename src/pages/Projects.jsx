import React from 'react'
import SiteWrapper from '../hoc/SiteWrapper'
import Project_Section from '../home_sections/Project_Section'
import Topnav from '../components/Topnav'

const Projects = () => {
  return (
    <>
      <Topnav />
      <SiteWrapper>
        <Project_Section className={'-mt-32'} />
      </SiteWrapper>
    </>
  )
}

export default Projects
