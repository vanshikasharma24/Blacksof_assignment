'use client';

import React, { useState } from 'react';
import PassengerVehicles from '../PassengerVehicles';
import CommercialVehicles from '../CommercialVehicles';
import { AnimatePresence, motion } from 'framer-motion';

const VehicleTypes = () => {
  const [isPassenger, setIsPassenger] = useState(true);

  const handleToggle = () => {
    setIsPassenger((prev) => !prev);
  };

  return (
    <section
      onClick={handleToggle}
      className='min-h-[800px] md:min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-20 py-12 md:py-20 bg-black overflow-hidden cursor-pointer'
    >
      {/* Static Header */}
      <header className='flex flex-col justify-center items-center space-y-2 mb-10'>
        <p className='text-white text-center font-light text-2xl md:text-4xl'>
          Evolving the drive with <span className='font-semibold'>360-degree</span>
        </p>
        <p className='text-white text-center font-light text-2xl md:text-4xl'>nonwoven solutions</p>
      </header>

      {/* Animated Swapping Section */}
      <div className='relative w-full flex-1'>
        <AnimatePresence mode='wait'>
          {isPassenger ? (
            <motion.div
              key='passenger'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className='absolute w-full'
            >
              <PassengerVehicles />
            </motion.div>
          ) : (
            <motion.div
              key='commercial'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className='absolute w-full'
            >
              <CommercialVehicles />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VehicleTypes;
