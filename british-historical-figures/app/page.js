"use client";
import Image from "next/image";
import WikiData from "@/API/WikiData";

export default function Home() {
  return(
    <>
    <div className="flex flex-col justify-center items-center m-8">
    <h1 className="text-white text-4xl text-center font-bold border border-white mb-10">Historical Figures</h1> 
    <input type="text" className="w-1/2 border border-black h-10 rounded-lg"/>
    </div>
   
    </>
  ) 
}
