import React from 'react'
import image1 from '../Assets/icon-1.png'
import image2 from '../Assets/icon-2.png'
import image3 from '../Assets/icon-3.png'


const ChooseUs = () => {
  return (
    <>
    
        <div className='bg-[#363636] p-10 mt-5'>
        <div className="container md:max-w-6xl sm:max-w-xl mx-auto">
        <div className='mt-3'>
            <h1 class="text-4xl font-bold sm:ms-7 mb-4 text-white">WHY CHOOSE US</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="sm:p-8 p-2 rounded-lg">
          <div className="flex items-center">
            <img src={image1} />       
          </div>
          <h1 className="text-xl font-bold mt-5 text-white">SAFETY & SECURITY</h1>
          <p className="mt-3 text-white">variations of passages of Lorem Ipsum available, but the majority have.</p>
        </div>


        <div className="sm:p-8 p-2 rounded-lg">
          <div className="flex items-center">
          <img src={image2} />       
         </div>
          <h1 className="text-xl mt-5 font-bold text-white">Online Booking</h1>
          <p className="mt-3 text-white">variations of passages of Lorem Ipsum available, but the majority have.</p>
        </div>



        <div className="sm:p-8 p-2 rounded-lg">
          <div className="flex items-center">
          <img src={image3} />  
          </div>
          <h1 className="text-xl mt-5 font-bold text-white">Best Drivers</h1>
          <p className="mt-3 text-white">variations of passages of Lorem Ipsum available, but the majority have.</p>
        </div>
      </div>
    </div>
    </div>


    </>
  )
}

export default ChooseUs