"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const imageArr = [
    "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc8%2FMarie_Curie_c._1920s.jpg%2F300px-Marie_Curie_c._1920s.jpg&w=640&q=75",
    "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F05%2FMartin_Luther_King%252C_Jr..jpg%2F300px-Martin_Luther_King%252C_Jr..jpg&w=640&q=75",

    "https://www.florence-nightingale.co.uk/wp-content/uploads/60-Queen-Victoria-scaled.jpg",
    " https://blogs.ucl.ac.uk/library-rnid/files/2012/10/Helen-Keller-001.jpg",
    "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5e%2FWilliam_Shakespeare_by_John_Taylor.jpg%2F300px-William_Shakespeare_by_John_Taylor.jpg&w=640&q=75",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/440px-Sir_Winston_Churchill_-_19086236948.jpg",
  ];

  const imageRefs = useRef([]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const images = imageRefs.current;

    if (!fadeIn && images.length === imageArr.length) {
      images.forEach((image, index) => {
        setTimeout(() => {
          image.style.transition = "opacity 1s ease-in";
          image.style.opacity = 1;
        }, 500 * (index + 1));
      });

      // After all images have faded in, set fadeIn state to true
      setTimeout(() => {
        setFadeIn(true);
      }, 1000 * images.length);
    } else {
      // After fadeIn state is true, change image after 5 seconds
      const interval = setInterval(() => {
        setFadeIn((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [fadeIn, imageArr.length]);

  return (
    <section className="h-auto border border-black  w-auto">
      <h1 className="text-white text-7xl text-center font-bold mt-8 font-Inter -tracking-tight">
        Historical{" "}
        <span className="pb-4 font-extrabold -tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
          Figures
        </span>
      </h1>
      <p className="text-gray-500 text-center mt-5 text-2xl">
        Learn about History most important figures Hello
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-2 p-4">
        {imageArr.map((src, index) => (
          <Image
            ref={(el) => (imageRefs.current[index] = el)}
            key={index}
            src={src}
            width={200}
            height={200}
            className={`rounded-xl  mr-8 mt-4 border-2 border-black${
              index === 0 ? "mt-8" : ""
            } drop-shadow-xl`}
            alt={`Image ${index}`}
            style={{ opacity: 0 }}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10"></div>
    </section>
  );
};

export default Hero;
