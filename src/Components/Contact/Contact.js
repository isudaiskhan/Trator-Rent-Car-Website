import React from 'react'
import { FiMail, FiMessageSquare, FiUser, FiPhone } from "react-icons/fi";



const Contact = () => {
  return (
    <>

<h1 className="md:text-5xl max-w-6xl mx-auto mt-36 text-3xl md:mb-20 text-center font-bold text-[#3b3b3b]">GET IN TOUCH</h1>

<div className="max-w-[1140px] mx-auto sm:px-48 px-4 p-96 mt-24 bg-[#fe5b29] rounded-full">
<div className="grid grid-cols-1 ">



   {/* Form Section */}
    <div className='p-1 -mt-36'>
    <form className="space-y-5 lg:mt-0 mt-14">
      {/* Form inputs */}
      <div className="space-y-7">
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='w-full relative'>
          <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full bg-white px-4 py-3 text-black rounded placeholder:text-gray-600" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
        
      </div>
      
      <div className='w-full relative'>
          <input type="text" id="input2" name="user_phone" placeholder='Phone' required className="w-full bg-white px-4 py-3 text-black rounded placeholder:text-gray-600" />
          <FiPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>

        <div className='relative'>
          <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full bg-white px-4 py-3 text-black rounded placeholder:text-gray-600" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
        <div className='relative'>
          <textarea id="textarea" placeholder='Message' name="message" required rows="5" className="p-2 px-4 py-3 w-full bg-white text-black rounded placeholder:text-gray-600" />
          <FiMessageSquare className="absolute right-3 bottom-3 text-gray-600" />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="font-medium rounded mt-5 flex items-center justify-center px-8 py-3 text-white hover:bg-white bg-red-600 duration-500 hover:text-black">
          SEND MESSAGE
        </button>
      </div>
    </form>
  </div>
  
</div>

</div>


    </>
  )
}

export default Contact