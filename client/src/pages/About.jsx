import React from 'react'
import HeaderBar from '../components/HeaderBar'
import GenInfo from '../components/About/GenInfoSection'
import FuncInfo from '../components/About/FuncInfoSection'
import DevSection from '../components/About/DevSection'
import Footer from '../components/Footer'
import HowTo from '../components/About/HowToSection'


const About = () => {
  return (
    <div>
        <HeaderBar/>
        <GenInfo/>
        <FuncInfo/>
        <HowTo/>
        <DevSection/>
        <Footer/>
    </div>
  )
}

export default About