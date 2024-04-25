import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Topbar from '../../Topbar/Topbar'
import ClientsSay from '../../ClientsSay/ClientsSay'
import Footer from '../../Footer/Footer'

const OurClients = () => {
  return (
    <>
    <Navbar />
    <Topbar />
    <ClientsSay />
    <div className='mt-96'>
    <Footer />
    </div>     
    </>
  )
}

export default OurClients
