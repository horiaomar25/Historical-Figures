import React from 'react';
import Image from 'next/image';

const About = () => {
 
  return (
    <section className='h-screen '>
      
      <div className="flex  flex-col md:flex-row justify-center items-center ">
        <div className='flex flex-col '> 
      <Image src={"http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc8%2FMarie_Curie_c._1920s.jpg%2F300px-Marie_Curie_c._1920s.jpg&w=640&q=75"} width={300} height={200} className='rounded-lg mb-4 mt-8 ' alt="Marie Curie"/>
      <Image src={"http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F05%2FMartin_Luther_King%252C_Jr..jpg%2F300px-Martin_Luther_King%252C_Jr..jpg&w=640&q=75"} width={300} height={175} className='rounded-lg ' alt="Martin Luther King"/>
        </div>
        <h2 className='text-4xl text-center p-10 '>Learn about Important Figures in History</h2>
      <div className='flex flex-col '>
      <Image src={"http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5e%2FWilliam_Shakespeare_by_John_Taylor.jpg%2F300px-William_Shakespeare_by_John_Taylor.jpg&w=640&q=75"} width={300} height={200} className='rounded-lg mb-4' alt="William Shakespeare"/>
      <Image src={"http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbc%2FSir_Winston_Churchill_-_19086236948.jpg%2F300px-Sir_Winston_Churchill_-_19086236948.jpg&w=640&q=75"} width={300} height={200} className='rounded-lg ' alt="Ada Lovelace"/>
      </div>
</div>
    </section>
  );
};

export default About;
