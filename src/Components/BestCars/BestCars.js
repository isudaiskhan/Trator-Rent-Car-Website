import React from 'react'
import image1 from '../Assets/img-1.png'
import image2 from '../Assets/img-2.png'
import image3 from '../Assets/img-3.png'
import image4 from '../Assets/img-4.png'
import image5 from '../Assets/img-5.png'
import image6 from '../Assets/img-6.png'



const BestCars = () => {
  return (
    <>


<div className='py-16 mt-24'>

<div>
            <h1 className='text-5xl text-center text-[#3b3b3b] font-bold'>OUR BEST OFFERS</h1>
        </div>

<div class="mx-auto sm:p-10 mt-3">

         {/* First box */}
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:ps-0 md:pe-0 sm:ps-12 sm:pe-12 ps-6 pe-6 gap-8 max-w-[1240px] mx-auto">
            <div class="bg-white p-16 shadow-md shadow-gray-400 hover:border-gray-800 border flex flex-col items-center justify-center relative">
                <img src={image1} alt="Placeholder Image" class="rounded" />
                <div className='text-center mt-6'>
                    <h2 className='text-2xl text-[#2f2e2d] font-semibold'>AUDI R8 PLUS</h2>
                    <h3 className='text-xl mt-2 text-[#fe5b29] font-semibold'>Start per day $4500</h3>
                </div>
                <div className='flex justify-center mt-7'>
                <button class="absolute bottom-6 border border-transparent tracking-wider bg-[#fe5b29] hover:bg-[#3b3b3b] text-white duration-300 font-semibold py-2 px-8">
                Book Now
                </button>
                </div>
            </div>


             {/* second box */}
             <div class="bg-white p-16 shadow-md shadow-gray-400 hover:border-gray-800 border flex flex-col items-center justify-center relative">
                <img src={image2} alt="Placeholder Image" class="rounded" />
                <div className='text-center mt-6'>
                    <h2 className='text-2xl text-[#2f2e2d] font-semibold'>BENTLEY</h2>
                    <h3 className='text-xl mt-2 text-[#fe5b29] font-semibold'>Start per day $4500</h3>
                </div>
                <div className='flex justify-center mt-7'>
                <button class="absolute bottom-6 border border-transparent tracking-wider bg-[#fe5b29] hover:bg-[#3b3b3b] text-white duration-300 font-semibold py-2 px-8">
                Book Now
                </button>
                </div>
            </div>


             {/* Third box */}
             <div class="bg-white p-16 shadow-md shadow-gray-400 hover:border-gray-800 border flex flex-col items-center justify-center relative">
                <img src={image3} alt="Placeholder Image" class="rounded" />
                <div className='text-center mt-6'>
                    <h2 className='text-2xl text-[#2f2e2d] font-semibold'>HONDA CIVIC</h2>
                    <h3 className='text-xl mt-2 text-[#fe5b29] font-semibold'>Start per day $4500</h3>
                </div>
                <div className='flex justify-center mt-7'>
                <button class="absolute bottom-6 border border-transparent tracking-wider bg-[#fe5b29] hover:bg-[#3b3b3b] text-white duration-300 font-semibold py-2 px-8">
                Book Now
                </button>
                </div>
            </div>


             {/* Fourth box */}
             <div class="bg-white p-16 shadow-md shadow-gray-400 hover:border-gray-800 border flex flex-col items-center justify-center relative">
                <img src={image4} alt="Placeholder Image" class="rounded" />
                <div className='text-center mt-6'>
                    <h2 className='text-2xl text-[#2f2e2d] font-semibold'>LAMBORGHINI</h2>
                    <h3 className='text-xl mt-2 text-[#fe5b29] font-semibold'>Start per day $4500</h3>
                </div>
                <div className='flex justify-center mt-7'>
                <button class="absolute bottom-6 border border-transparent tracking-wider bg-[#fe5b29] hover:bg-[#3b3b3b] text-white duration-300 font-semibold py-2 px-8">
                Book Now
                </button>
                </div>
            </div>


            {/* Fifth box */}
            <div class="bg-white p-16 shadow-md shadow-gray-400 hover:border-gray-800 border flex flex-col items-center justify-center relative">
                <img src={image5} alt="Placeholder Image" class="rounded" />
                <div className='text-center mt-6'>
                    <h2 className='text-2xl text-[#2f2e2d] font-semibold'>LAMBORGHINI</h2>
                    <h3 className='text-xl mt-2 text-[#fe5b29] font-semibold'>Start per day $4500</h3>
                </div>
                <div className='flex justify-center mt-7'>
                <button class="absolute bottom-6 border border-transparent tracking-wider bg-[#fe5b29] hover:bg-[#3b3b3b] text-white duration-300 font-semibold py-2 px-8">
                Book Now
                </button>
                </div>
            </div>


             {/* Sixth box */}
             <div class="bg-white p-16 shadow-md shadow-gray-400 hover:border-gray-800 border flex flex-col items-center justify-center relative">
                <img src={image6} alt="Placeholder Image" class="rounded" />
                <div className='text-center mt-6'>
                    <h2 className='text-2xl text-[#2f2e2d] font-semibold'>FERRARI</h2>
                    <h3 className='text-xl mt-2 text-[#fe5b29] font-semibold'>Start per day $4500</h3>
                </div>
                <div className='flex justify-center mt-7'>
                <button class="absolute bottom-6 border border-transparent tracking-wider bg-[#fe5b29] hover:bg-[#3b3b3b] text-white duration-300 font-semibold py-2 px-8">
                Book Now
                </button>
                </div>
            </div>
        </div>


    </div>
</div>
      
    </>
  )
}

export default BestCars