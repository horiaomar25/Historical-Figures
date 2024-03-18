import React, { useState } from 'react';
import Image from 'next/image'


const Navigation = () => {
    // set State to toggle menu
    const[isOpen, setIsOpen] = useState(false);

    // function to toggle menu
    const toggleMenu =  () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
    { !isOpen && <button onClick={toggleMenu} className='m-8 '><img src='/menu.png' className='w-10'/></button>}
    {isOpen && (
    <header className='w-1/2 border border-white h-screen md:w-1/5 '>     
    <Image src={"/cross.png"} width={30} height={30} alt="cross-icon" className='float-right m-4' onClick={toggleMenu}/>
        <nav>
       
            <ul className='text-white flex flex-col items-center justify-center p-4 '>
                <li className='mt-8'>Home</li>
                <li className='mt-4'>Search</li>
            </ul>

        </nav>

    </header>
    )}
    </>
  )
}

export default Navigation