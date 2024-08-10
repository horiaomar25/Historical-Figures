"use client"
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center" aria-labelledby="about-heading">
      <div className="flex flex-col justify-center items-center">
        <h3 id="about-heading" className="text-white text-7xl text-center font-bold font-Inter">
          Try this{" "}
          <span className="pb-4 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
            Quiz
          </span>
        </h3>
        <p className="font-Inter text-white mt-4">
          Test your knowledge with this quiz
        </p>
        <Link href="/quiz">

          <button className="p-2 w-32 rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 hover:shadow-white-shadow mt-5 text-white">
            Go to quiz
          </button>

        </Link>
      </div>
    </section>
  );
};

export default About;
