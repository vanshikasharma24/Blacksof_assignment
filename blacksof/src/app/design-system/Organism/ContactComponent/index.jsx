'use client';

import React from 'react';
import { contactInfo, formFields } from '@/utils/contactData';
import Image from 'next/image';

const ContactComponent = () => {
  return (
    <section className='bg-[#0067B1] flex justify-center items-center min-h-screen text-white py-16 px-4 md:px-24'>
      <div className='w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-25 gap-y-10'>
        <div>
          <h2 className='text-5xl font-semibold mb-4'>{contactInfo.heading}</h2>
          <div className='h-[2px] w-10 bg-white mb-6' />
          <p className='mb-6 text-2xl'>{contactInfo.description}</p>

          {contactInfo.details.map(({ label, value }, index) => (
            <div className='mb-4 text-[20px]' key={index}>
              <p className='font-semibold'>{label} :</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
        <form className='grid grid-cols-1 gap-6'>
          {formFields.map(({ name, type, placeholder }) =>
            type === 'textarea' ? (
              <textarea
                key={name}
                name={name}
                rows={4}
                placeholder={placeholder}
                className='bg-transparent border-b border-white text-white placeholder-white py-2 resize-none outline-none text-[20px]'
              />
            ) : (
              <input
                key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className='bg-transparent border-b text-[20px] border-white text-white placeholder-white py-2 outline-none'
              />
            )
          )}

          <button
            type='submit'
            className='bg-white text-[#0067B1] font-medium px-8 py-2 rounded-[100px] w-max hover:bg-opacity-90 transition border-1 border-[#00BFFF]'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
