"use client"
import React, { useState, useEffect } from 'react';
import Navigation from './MobileNav';
import Link from 'next/link'; // Import Link from Next.js

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
    
    <header className='flex justify-between items-center w-auto'> 
      <h1 className=" text-4xl font-bold m-8 text-white ">Historical <span className="text-blue-500">Figures</span></h1>
      {isMobile && <Navigation />}
      <nav className= 'p-8 m-4 w-1/2 text-white '>
        <ul className='text-white font-bold w-auto flex justify-between items-center '>
          <Link href="/"><li className='hover: bg-blue-500 w-full'>Home</li></Link>
          <Link href="/search"><li>Explore</li></Link> {/* Use Link component with href */}
          <Link href="/quiz"><li>Quiz</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default NewNav;
