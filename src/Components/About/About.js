import React from 'react'
import image from '../Assets/about.png'



const About = () => {
  return (
    <>

<div className='w-full bg-white py-20'>
  <div className='mt-24 flex md:flex-row flex-col items-center overflow-hidden'>
    <img src={image} className='sm:w-1/2 w-full my-4 md:mr-8' />

    <div className='flex flex-col sm:w-2/5 lg:mb-12 justify-center md:ms-10 sm:ps-0 sm:pe-0 ps-10 pe-10'>
      <h1 className='lg:text-4xl text-3xl text-[#3b3b3b] font-semibold py-4'>ABOUT <span className='text-[#fe5b29]'>US</span></h1>
      <p className='mt-3 text-lg text-gray-600'>
      going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>

    <button
      className="text-lg tracking-wider border bg-[#fe5b29] hover:bg-[#3b3b3b] text-white duration-300 mt-9 py-3 px-4 w-44 rounded">
      Read More
    </button>


      </div>
  </div>
</div>
      
    </>
  )
}

export default About