import React from 'react'

const SearchCars = () => {
  return (
    <>
<div className='bg-[#363636] lg:p-16 md:p-28 p-10'>
<div class="max-w-6xl mx-auto">
        {/* <!-- Header --> */}
        <div>
            <h1 class="text-5xl font-bold mb-4 text-white">Search Your Best Cars</h1>
            <p class="text-white">Using 'Content here, content here', making it look like readable.</p>
        </div>
        
        {/* <!-- Select Options --> */}
        <div class="lg:flex flex-row justify-between mt-10 lg:space-x-7 lg:space-y-0 space-y-7">
            <div class="lg:w-1/3 w-full">
                <select class="block w-full cursor-pointer text-lg border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400">
                    <option value="">Any Brand</option>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                </select>
            </div>
            <div class="lg:w-1/3 w-full">
                <select class="block w-full cursor-pointer text-lg border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400">
                    <option value="">Any Type</option>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                </select>
            </div>
            <div class="lg:w-1/3 w-full">
                <select class="block w-full cursor-pointer text-lg border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400">
                    <option value="">Price</option>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                </select>
            </div>
            {/* <!-- Button --> */}
        <div className='lg:justify-end flex justify-center'>
            <button class="bg-[#fe5b29] hover:bg-white text-lg font-semibold hover:text-[#3b3b3b] text-white duration-300 py-3 w-48 rounded focus:outline-none focus:shadow-outline">Search Now</button>
        </div>
        </div>

        
    </div>
    </div>
    </>
  )
}

export default SearchCars
