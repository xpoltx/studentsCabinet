import React from 'react'
import HeaderBar from '../../components/Main/HeaderBar'
import GenInfo from '../../components/Main/About/GenInfoSection'
import FuncInfo from '../../components/Main/About/FuncInfoSection'
import DevSection from '../../components/Main/About/DevSection'
import HowTo from '../../components/Main/About/HowToSection'


const About = () => {
  return (
    <div>
      <HeaderBar />
      <GenInfo />
      <FuncInfo />
      <HowTo />
      <DevSection />
    </div>
  )
}

export default About