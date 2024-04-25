import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Topbar from '../../Topbar/Topbar'
import BestCars from '../../BestCars/BestCars'
import Footer from '../../Footer/Footer'

const Vehicles = () => {
  return (
    <>
      <Navbar />
      <Topbar />
      <BestCars />
      <div className='mt-72'>
      <Footer />
      </div>
    </>
  )
}

export default Vehicles
