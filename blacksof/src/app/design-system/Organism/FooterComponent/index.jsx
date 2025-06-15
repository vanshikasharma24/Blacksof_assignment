'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/Images/Logo.png';

const FooterComponent = () => {
  return (
    <footer className='bg-white text-black px-6 md:py-38 md:px-20 py-10'>
      <div className='max-w-6xl mx-auto flex flex-col space-y-19'>
        <div>
          <Image src={Logo} alt='Supreme Group Logo' width={226} height={63} className='object-contain' />
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8'>
          <div className='text-sm text-black/70 space-y-6 font-medium'>
            <h3 className='font-bold uppercase text-[16px]'>Applications</h3>
            <p>Apparel</p>
            <p>Automotive</p>
            <p>Filtration</p>
            <p>Customised Solutions</p>
          </div>

          <div className='text-sm  text-black/70 space-y-6 font-medium'>
            <h3 className='font-bold uppercase text-[16px]'>Company</h3>
            <p>Innovation</p>
            <p>Global Competency</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div className='text-sm  text-black/70 space-y-6 font-medium '>
            <h3 className='font-bold uppercase text-[16px]'>More</h3>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>

          <div className='text-sm  text-black/70 space-y-6 font-medium'>
            <h3 className='font-bold uppercase text-[16px]'>Follow Us</h3>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Medium</p>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row justify-between items-center text-sm pt-4  text-black/70'>
          <p>©2023. All Rights Reserved.</p>
          <p className='text-center md:text-right mt-2 md:mt-0'>
            Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
