'use client';

import React from 'react';

const HeadingComponent = () => {
  return (
    <section className='bg-[#00000099] min-h-[500px] lg:min-h-[80vh] flex justify-center items-center px-4 md:px-10'>
      <div className='flex flex-col justify-center items-center gap-6 text-white text-center'>
        <p className='text-xl md:text-2xl font-normal'>Performance in motion</p>

        <header className='flex flex-col gap-2'>
          <h1 className='text-3xl md:text-4xl font-semibold'>Soft Trims and NVH Solutions</h1>
          <h2 className='text-3xl md:text-4xl font-light'>for seamless rides</h2>
        </header>
      </div>
    </section>
  );
};

export default HeadingComponent;
