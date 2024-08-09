'use client';

import Explore from '@/components/Explore';
import Hero from '@/components/Hero';
import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect } from 'react';

const Home = () => {
  //add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explore />
      {/* temporary div */}
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default Home;
