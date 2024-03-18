import React from 'react'
import Image from 'next/image'


const Navigation = () => {
  return (
    <header className='w-1/5 border border-white h-screen'>
        <nav>
            <Image src={"/cross.png"} width={30} height={30} alt="cross-icon" className='float-right m-4'/>
            <ul className='text-white text-center p-4 m-4'>
                
                <li>Home</li>
                <li className='mt-4'>Search</li>
            </ul>

        </nav>

    </header>
  )
}

export default Navigation