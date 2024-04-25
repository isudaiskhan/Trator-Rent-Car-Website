import React from 'react'
import {FaFacebookF, FaInstagram } from 'react-icons/fa';
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import logo from '../Assets/logo.png'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';




const Footer = () => {
  return (
    <>

     <div className='py-10 bg-[#363636] md:px-0 px-5 -mt-64'>
  
<div class="md:flex lg:flex mx-auto max-w-[1240px] border-b border-b-gray-400 py-5 px-5">
<div class="md:w-1/2 flex items-center">
        <div class="mr-4">
            <img src={logo} />
        </div>
    </div>

   
</div>



    <div class='max-w-[1240px] mx-auto mt-7 px-3 text-gray-300'>
  <div class='flex flex-wrap justify-center gap-6'>
  <div class='w-full md:w-1/3 md:pe-5'>
      <h6 class='text-[#FFFFFF] mt-6 text-xl font-semibold'>Subscribe Now!</h6>
      <p class='mt-6 leading-9 text-gray-300'>Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service production company specializing.</p>

      <button class="mt-6 border border-transparent tracking-wider duration-300 bg-[#fe5b29] hover:bg-white text-white hover:text-black rounded font-semibold py-3 px-9">
      SUBSCRIBE
                </button>
    </div>

    <div class='w-full md:w-1/6'>
    <div class='space-y-3 mt-6'>
        <h6 class='text-[#FFFFFF] text-xl font-medium'>Information</h6>
        <ul>
          <a href='#'>
            <li class='py-2 text-gray-300 hover:text-[#fe5b29]'>Formed</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300 hover:text-[#fe5b29]'>Careers</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300 hover:text-[#fe5b29]'>Contact Us</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300 hover:text-[#fe5b29]'>Location</li>
          </a>
        </ul>
      </div>
    </div>

    <div class='w-full md:w-1/6'>
    <div class='space-y-3 mt-6'>
        <h6 class='text-[#FFFFFF] text-xl font-medium'>Invesments</h6>
        <ul>
          <a href='#'>
            <li class='py-2 text-gray-300 hover:text-[#fe5b29]'>Feature</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300 hover:text-[#fe5b29]'>Latest</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300 hover:text-[#fe5b29]'>Browse Archive</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300 hover:text-[#fe5b29]'>Video For Web</li>
          </a>
        </ul>
      </div>
    </div>

    <div class='w-full md:w-1/4'>
      <div class='space-y-3 mt-6'>
        <h6 class='text-[#FFFFFF] text-xl font-medium'>Contact Us</h6>
        <div className="mt-20 text-white py-4 space-y-3">
      <div className="flex items-center space-x-2 text-gray-300">
        <FiMapPin />
        <span >123 Main St, Cityville</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-300">
        <FiPhone />
        <span>123-456-7890</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-300">
        <FiMail />
        <span>example@gmail.com</span>
      </div>
    </div>
    </div>
      
      <div class="flex items-center justify-start">
    <div class='md:flex items-center py-6 text-center'>
            <div class='flex justify-end text-white space-x-3 flex-wrap'>
                <a href='#' class='px-2 py-2 group rounded-full border-2 border-[#fe5b29] hover:bg-[#fe5b29]'>
                    <FaFacebookF class='group-hover:text-white text-white text-xl' />
                </a>
                <a href='#' class='px-2 py-2 group rounded-full border-2 border-[#fe5b29] hover:bg-[#fe5b29]'>
                    <AiOutlineTwitter class='group-hover:text-white text-white text-xl' />
                </a>

                <a href='#' class='px-2 py-2 group rounded-full border-2 border-[#fe5b29] hover:bg-[#fe5b29]'>
                    <FaInstagram class='group-hover:text-white text-white text-xl' />
                </a>

                <a href='#' class='px-2 py-2 group rounded-full border-2 border-[#fe5b29] hover:bg-[#fe5b29]'>
                    <AiFillLinkedin class='group-hover:text-white text-white text-xl' />
                </a>
            </div>
        </div>
    </div>
    </div>
  </div> 
</div>




        <div class='tracking-wider text-center mx-auto max-w-[1240px] mt-20'>
            <h1 class='text-gray-200'>Copyright © 2024 All rights reserved | Created and Designed by Sudais Khan .</h1>
        </div>


   </div>

    </>
  )
}

export default Footer