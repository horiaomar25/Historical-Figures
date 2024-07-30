"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  // State to open and close mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

  {/** Mobile Navigation */}
          {menuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
              
              <ul className="menu menu-sm dropdown-content bg-black rounded-box mt-3 p-2 shadow h-full w-full flex flex-col justify-center items-center">
                <button onClick={closeMenu} className="absolute top-4 right-4 text-white text-5xl font-bold">
                &times;
              </button>
              <li className='text-white text-8xl font-semibold' onClick={closeMenu}>
                  <Link href="/" className='text-2xl'>Home</Link>
                </li>
                <li className='text-white font-semibold mt-8' onClick={closeMenu}>
                  <Link href="/search" className='text-2xl' >Search</Link>
                </li>
                <li className='text-white text-4xl font-semibold mt-8' onClick={closeMenu}>
                  <Link href="/quiz" className='text-2xl'>Quiz</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/** Desktop Navigation */}
        <a className="btn btn-ghost text-4xl text-white">H<span className='text-blue-600'>F</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='text-white text-xl font-semibold hover:text-blue-600'><Link href="/">Home</Link></li>
          <li className='text-white text-xl font-semibold hover:text-blue-600'><Link href="/search">Search</Link></li>
          <li className='text-white text-xl font-semibold hover:text-blue-600'><Link href="/quiz">Quiz</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default Navigation;
