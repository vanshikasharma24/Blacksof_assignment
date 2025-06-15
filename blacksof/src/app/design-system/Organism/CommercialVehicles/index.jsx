'use client';

import React from 'react';
import Image from 'next/image';
import truck from '@/assets/Images/truck.gif';

const CommercialVehicles = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
      <div className='text-white text-left max-w-xl'>
        <h2 className='font-bold text-2xl md:text-3xl mb-2 text-center lg:text-left'>Commercial vehicles</h2>
        <p className='font-normal text-base md:text-lg text-center lg:text-left'>
          Advancing Nonwoven engineering for heavy-duty vehicles.
        </p>
      </div>
      <div className='w-full max-w-4xl lg:max-w-7xl'>
        <Image
          src={truck}
          alt='Commercial vehicle truck'
          width={1180}
          height={663}
          className='w-full h-auto object-contain'
          priority
        />
      </div>
    </div>
  );
};

export default CommercialVehicles;
