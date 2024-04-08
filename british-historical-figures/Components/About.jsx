import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="h-auto mt-10  m-6 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        <h1>Quiz</h1>
        <p>Test your knowledge with this quiz</p>
        <button className="border border-black w-1/2 rounded-lg p-2 ">
          <Link href="/quiz"> Quiz</Link>
        </button>
      </div>
    </section>
  );
};

export default About;

