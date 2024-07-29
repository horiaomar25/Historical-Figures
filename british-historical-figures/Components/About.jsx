"use client"
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-white text-7xl text-center font-bold font-Inter ">
          Try this{" "}
          <span className="pb-4 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
            Quiz
          </span>
        </h3>
        <p className="font-Inter text-white mt-4">
          Test your knowledge with this quiz
        </p>
        <button className="border border-black w-1/2 rounded-lg p-2 "></button>
      </div>

     
      
    </section>
  );
};

export default About;
