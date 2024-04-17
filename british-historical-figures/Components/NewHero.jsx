import React from 'react'
import Image from 'next/image'

const NewHero = () => {
  return (
    <section className="grid grid-cols-2 w-1/2 border border-white m-6">
      {/* First Image */}
      <div className="flex justify-center">
        <Image
          src={"http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc8%2FMarie_Curie_c._1920s.jpg%2F300px-Marie_Curie_c._1920s.jpg&w=640&q=75"}
          width={500}
          height={200}
          objectFit="cover"
          alt="Marie Curie"
          className='boreder rounded-lg'
        />
      </div>

      {/* Second Image */}
      <div className="flex justify-center">
        <Image
          src={"http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F05%2FMartin_Luther_King%252C_Jr..jpg%2F300px-Martin_Luther_King%252C_Jr..jpg&w=640&q=75"}
          width={500}
          height={200}
          objectFit="cover"
          alt="Martin Luther King"
          className='boreder rounded-lg'
        />
      </div>

      {/* Third Image */}
      <div className="flex justify-center">
        <Image
          src={"https://www.florence-nightingale.co.uk/wp-content/uploads/60-Queen-Victoria-scaled.jpg"}
          width={500}
          height={500}
          objectFit="cover"
          alt="Queen Victoria"
          className='boreder rounded-lg'
        />
      </div>

      {/* Fourth Image */}
      <div className="flex justify-center">
        <Image
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/440px-Sir_Winston_Churchill_-_19086236948.jpg"}
          width={500}
          height={500}
          objectFit="cover"
          alt="Winston Churchill"
          className='boreder rounded-lg'
        />
      </div>
    </section>
  )
}

export default NewHero

