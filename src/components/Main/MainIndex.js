import React from 'react'
import { Banner } from './../Banner'
import { Skills } from './../Skills';
import { Projects } from './../Projects';
import { Contact } from './../Contact';

export const MainIndex = () => {
  return (
    <>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
    </>
  )
}
