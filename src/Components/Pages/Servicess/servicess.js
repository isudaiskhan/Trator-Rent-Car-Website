import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ChooseUs from '../../ChooseUs/ChooseUs'
import Topbar from '../../Topbar/Topbar'
import Footer from '../../Footer/Footer'

const servicess = () => {
  return (
    <>
      <Navbar />
      <Topbar />
      <div className='mt-28'>
      <ChooseUs />
      </div>
      <div className='mt-64'>
      <Footer />
      </div>
    </>
  )
}

export default servicess
