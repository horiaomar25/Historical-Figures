"use client"
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const NewNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener to handle resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='flex justify-between items-center'> 
      <h1 className="text-black text-4xl font-bold m-8 ">Historical Figures</h1>
      {isMobile && <Navigation />}
      <nav className='border border-red p-4 m-4 w-1/2 '>
        <ul className='text-black font-bold w-auto flex justify-between items-center m-2'>
          <li>Home</li>
          <li>Explore</li>
          <li className='mx-2'>Quiz</li>
        </ul>
      </nav>
    </header>
  );
};

export default NewNav;
