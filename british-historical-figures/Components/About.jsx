import React, { useEffect, useRef } from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="h-screen mt-10 border border-black m-6">
        <div className="flex flex-col justify-center items-center">
          <h1>Quiz</h1>
          <p>Test your knowledge with this quiz</p>
          <button className="border border-black w-1/5 rounded-lg p-2 bg-dark-brown">
            Quiz
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
