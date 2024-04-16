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

      {/* This part will be about the quiz build a blank quiz square */}
      <div className=" w-full  md:w-11/12 flex justify-center items-center flex-col md:flex-row md:justify-between ">
        {/* Card in the about section holding the quiz*/}
        <div className="w-1/2 h-96 bg-gray-500 border border-black rounded-xl bg-opacity-50 backdrop-filter-blur border-opacity-25">
          <p className="text-white font-Inter text-xl text-center mt-4">
            Question...
          </p>

          <div className="border border-white w-auto p-5 m-8 rounded-2xl"></div>

          <div className="border border-white w-auto p-5 m-8 rounded-2xl"></div>

          <div className="border border-white w-auto p-5 m-8 rounded-2xl bg-green-500"></div>

          <div className="border border-white w-auto p-5 m-8 rounded-2xl"></div>
        </div>

       
        <div className="text-center flex justify-center mt-6 item-center border border-white w-full md:w-1/2"> 
       <p className="text-white font-Inter text-center">Hello my name is </p>
       </div> 
      </div>
      
    </section>
  );
};

export default About;
