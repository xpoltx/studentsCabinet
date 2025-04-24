import React from 'react'
import HeaderBar from '../components/HeaderBar'
import Footer from '../components/Footer'
import DevSection from '../components/About/DevSection'

const Contacts = () => {
  return (
    <div>
      <HeaderBar/>
      <div className='mt-30'>
        <DevSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacts