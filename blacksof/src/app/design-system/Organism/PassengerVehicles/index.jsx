'use client';
import React, { useState } from 'react';
import { showcaseIcons } from '@/utils/parts';
import Image from 'next/image';

const PassengerVehicles = () => {
  const [mainImage, setMainImage] = useState(showcaseIcons[0].image);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (image, index) => {
    setMainImage(image);
    setActiveIndex(index);
  };

  return (

      <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
        {/* Left Content */}
        <div className='flex flex-col text-white text-left mb-6 lg:mb-0 max-w-lg'>
          <p className='font-bold text-2xl md:text-3xl lg:text-left text-center'>Passenger vehicles</p>
          <p className='font-normal text-base md:text-lg text-center lg:text-left'>
            Revving up Nonwoven innovation from interior to exterior.
          </p>
        </div>

        {/* Right Content */}
        <div className='flex flex-col gap-6 w-full max-w-4xl lg:max-w-7xl'>
          <Image src={mainImage} alt='Passenger vehicle section' className='w-full' width={1180} height={663} />

          <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
            {showcaseIcons.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(item.image, index);
                  }}
                  className={`flex flex-col justify-center items-center gap-1 text-sm cursor-pointer transition-all duration-200 
              ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={69}
                      height={69}
                      className={`${isActive ? '' : 'brightness-50 hover:brightness-100'} max-w-[42px] md:max-w-[69px] transition duration-200`}
                    />
                  ) : (
                    <div className='w-[69px] h-[69px]' />
                  )}
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};

export default PassengerVehicles;
