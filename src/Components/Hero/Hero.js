import React, { useRef, useState } from 'react';
import bgimage from '../Assets/Hero-bg.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const slidesContent = [
    {
      title: "Car Rent",
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority',
      buttonText: 'Read More',
      secondbutton: ' Contact Us',

    },
    {
      title: "Car Rent",
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority',
      buttonText: 'Read More',
      secondbutton: ' Contact Us',
    },
    {
      title: "Car Rent",
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority',
      buttonText: 'Read More',
      secondbutton: ' Contact Us',
    },
  ];

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  return (
    <>
    <div className="sm:ps-14 ps-4 pe-4 relative overflow-hidden py-28">
     <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgimage})`,
          width: '100%',
          height: '100%',
        }}
      ></div>
      <div className="absolute inset-0"></div>
      <div className="relative z-10 w-full sm:max-w-lg">
        <Slider {...settings} ref={sliderRef} beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}>
          {slidesContent.map((slide, index) => (
            <div key={index} className="w-full my-6 relative group">
              <div className="py-5 sm:ps-10 sm:pe-10 ps-3">
                <h1 className="text-6xl mb-8 text-[#2c2c2c] font-bold" style={{ lineHeight: '4.7rem' }}>
                  {slide.title}
                  <br /> 
                  <span className='text-[#fe5b29]'>For You</span>
                </h1>
                <div className="tracking-wider sm:pe-0 pe-6 text-gray-600">{slide.description}</div>

              </div>
              <div className='flex flex-wrap mt-3'>
              <div className="sm:ps-10 ps-3">
                <button type="submit" className={`text-lg tracking-wider bg-[#fe5b29] hover:bg-[#3b3b3b] text-white duration-300 mt-5 py-3 px-4 w-44 rounded ${slide.buttonColor}`}>
                  {slide.buttonText}
                </button>
              </div>

              <div className="sm:ps-4 ps-3">
                <button type="submit" className={`text-lg tracking-wider bg-[#3b3b3b] hover:bg-[#fe5b29] text-white duration-300 mt-5 py-3 px-4 w-44 rounded ${slide.buttonColor}`}>
                  {slide.secondbutton}
                </button>
              </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex space-x-5 sm:ps-12 ps-5 text-lg mt-8">
          {slidesContent.map((_, index) => (
            <h1
              key={index}
              className={`cursor-pointer ${currentSlide === index ? 'text-[#fe5b29] underline decoration-2 underline-offset-8' : 'text-gray-600'}`}
              onClick={() => goToSlide(index)}
            >
              0{index + 1}
            </h1>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;