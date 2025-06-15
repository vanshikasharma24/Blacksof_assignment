'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/Images/Logo.png';
import Linkedin from '@/assets/Images/Linkedin.png';
import Translate from '@/assets/Images/Translate.png';
import { Button } from '../../Atoms';

const HeaderComponent = () => {
  return (
    <header className='bg-[#F9FBFF]'>
      <nav className='flex flex-wrap items-center justify-between px-6 md:px-20 lg:px-32 py-4'>
        <section>
          <Image src={Logo} alt='logo' width={146} height={41} priority />
        </section>

        <section className='flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 mt-4 md:mt-0'>
          <Button className='bg-[#5CD6FF] py-2 px-6 md:py-[10px] md:px-[30px] rounded-full border border-[#00BFFF] text-sm md:text-base'>
            Contact Us
          </Button>
          <Image src={Linkedin} alt='linkedin' width={32} height={22} />
          <Image src={Translate} alt='language' width={32} height={22} />
        </section>
      </nav>
    </header>
  );
};

export default HeaderComponent;
