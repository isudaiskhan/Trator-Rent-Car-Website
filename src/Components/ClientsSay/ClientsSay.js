import React,{useState,useRef} from 'react'
import image1 from '../Assets/client-img1.png'
import image2 from '../Assets/client-img2.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';




const ClientsSay = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    arrows: false, // Remove default navigation buttons
    pauseOnHover: false, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }
  
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const [grabCursor, setGrabCursor] = useState(false);

  const handleMouseDown = () => {
    setGrabCursor(true);
  };

  const handleMouseUp = () => {
    setGrabCursor(false);
  };



  return (
    <>

       <div className='w-full max-w-3xl mx-auto mt-24'>

      <h1 className='md:text-4xl text-3xl mb-10 text-center text-[#3b3b3b] font-bold ps-8'>WHAT SAYS CUSTOMERS</h1>

      <div className='text-end'>
      <button className="ml-4 rounded-full mr-4 shadow-md shadow-gray-500" onClick={goToPrev}>
        <FiChevronLeft className="text-5xl hover:text-[#240a5e]" />
      </button>

      <button className="mr-7 rounded-full shadow-md shadow-gray-500" onClick={goToNext}>
        <FiChevronRight className="text-5xl hover:text-[#240a5e]" />
      </button>
     </div>
     
      <div
      className={`w-full px-4 ${grabCursor ? 'cursor-grab' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      <Slider {...settings} ref={sliderRef}>      


      {/* Card 1 */}
          <div className='w-full my-4 px-4 relative group shadow-md shadow-gray-400 border'>
          
          <div className='relative'>
          <img src={image1} className='mx-auto' />    
   </div>

        <div className='py-5 p-8'>
          <h1 className='mt-2 text-2xl text-center font-bold text-gray-900'>Vintage</h1>
          <div className="mt-3 text-gray-800 text-center tracking-wide">      
      It is a long established fact that a reader will be distracted by the readable The point of using Lorem 
     </div>     
     </div>
      </div>







{/* Card 2 */}
<div className='w-full my-4 px-4 relative group shadow-md shadow-gray-400 border'>
          
          <div className='relative'>
          <img src={image2} className='mx-auto' />    
   </div>

        <div className='py-5 p-8'>
          <h1 className='mt-2 text-2xl text-center font-bold text-gray-900'>Steering Wheels</h1>
          <div className="mt-3 text-gray-800 text-center tracking-wide">      
      It is a long established fact that a reader will be distracted by the readable The point of using Lorem 
     </div>     
     </div>
      </div>




      </Slider>

        </div>
       </div>      

    </>
  )
}

export default ClientsSay