"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Hero = () => {
  

  

  

  return (
    <section className="h-auto border border-black  w-auto">
      <h1 className="text-white text-7xl text-center font-bold mt-8 font-Inter -tracking-tight">
        Historical{" "}
        <span className="pb-4 font-extrabold -tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
          Figures
        </span>
      </h1>
      <p className="text-gray-500 text-center mt-5 text-2xl">
        Learn about History most important figures 
      </p>

      

      <div className="flex flex-col md:flex-row justify-center items-center mt-2 p-4">
        
      </div>
      <div className="flex justify-center items-center mt-10"></div>
    </section>
  );
};

export default Hero;
