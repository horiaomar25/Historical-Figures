"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        
            {!isOpen && <button onClick={toggleMenu} className='m-8'><img src='/menus.png' className='w-10'/></button>}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50">
               
                    <header className={`w-1/2 md:w-1/5 bg-black z-50 h-screen border border-white transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <Image src={"/cross.png"} width={30} height={30} alt="cross-icon" className='float-right m-4' onClick={toggleMenu}/>
                        <nav>
                            <ul className='text-white flex flex-col items-center justify-center p-4'>
                                <li className='mt-8'>Home</li>
                                <li className='mt-4'>Search</li>
                            </ul>
                        </nav>
                    </header>
                </div>
            )}
        </>
    );
};

export default Navigation;
