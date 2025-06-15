'use client';
import React from 'react';
import { HeadingComponent, VehicleTypes, ContactComponent, FooterComponent, HeaderComponent } from '../../Organism';


const HomePageTemplate = () => {
  return (
    <div>
      <HeaderComponent />
      <HeadingComponent />
      <VehicleTypes />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePageTemplate;
