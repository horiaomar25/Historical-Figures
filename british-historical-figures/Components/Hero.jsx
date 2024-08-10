/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import hero from "../public/hero.gif";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="circlePosition w-[300px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[900px]"></div>
      <section className="flex flex-col justify-center items-center relative">
        <h1 className="text-white text-7xl text-center font-bold mt-8  -tracking-tight">
          Historical{" "}
          <span className="pb-4 font-extrabold -tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500">
            Figures
          </span>
        </h1>
        <p className="text-white text-center mt-5 text-2xl">
          Learn about History's most important figures
        </p>
      <Link href="/search"> <button className=" p-2 w-32 rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 hover:shadow-white-shadow mt-5 text-white">
  Explore
</button></Link> 




        <div className="relative m-5">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent blur-[8px] animate-bob"></div>
          <div className="relative animate-bob ">
            <Image
              src={hero}
              priority={true}
              width={400}
              alt="picture of several historical figures"
              className="rounded-md border-white border relative mt-6 border-opacity-20"
            />
            
          </div>
        </div>
      </section>

  
    </>
  );
};

export default Hero;



