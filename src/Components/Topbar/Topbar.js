import React from 'react'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';


const Topbar = () => {
  return (
    <>
<div className='hidden md:block'>
    <div className="bg-[#fe5b29] mt-20 text-white py-4 px-4 flex items-center justify-around">
      <div className="flex items-center space-x-2 hover:text-black cursor-pointer duration-300">
        <FiMapPin />
        <span className="hidden sm:inline">123 Main St, Cityville</span>
      </div>
      <div className="flex items-center space-x-2 hover:text-black cursor-pointer duration-300">
        <FiPhone />
        <span>123-456-7890</span>
      </div>
      <div className="flex items-center space-x-2 hover:text-black cursor-pointer duration-300">
        <FiMail />
        <span>example@gmail.com</span>
      </div>
    </div>
    </div>
    </>
  )
}

export default Topbar