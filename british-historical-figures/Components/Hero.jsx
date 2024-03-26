import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const imageRefs = useRef([]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!fadeIn) {
      const images = imageRefs.current;
      images.forEach((image, index) => {
        image.style.opacity = 0;
        const timer = setTimeout(() => {
          image.style.transition = "opacity 1s ease-in";
          image.style.opacity = 1;
        }, 1000 * (index + 1));
        return () => clearTimeout(timer);
      });
      setFadeIn(true);
    }
  }, [fadeIn]);

  return (
    <section className="h-screen">
      <div className="flex  flex-col md:flex-row justify-center items-center p-4">
        <div className="flex flex-col ">
          <Image
            ref={(el) => (imageRefs.current[0] = el)}
            src={
              "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc8%2FMarie_Curie_c._1920s.jpg%2F300px-Marie_Curie_c._1920s.jpg&w=640&q=75"
            }
            width={300}
            height={200}
            className="rounded-full mb-4 mt-8 drop-shadow-xl "
            alt="Marie Curie"
          />
          <Image
            ref={(el) => (imageRefs.current[5] = el)}
            src={
              "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F05%2FMartin_Luther_King%252C_Jr..jpg%2F300px-Martin_Luther_King%252C_Jr..jpg&w=640&q=75"
            }
            width={300}
            height={175}
            className="rounded-full drop-shadow-xl "
            alt="Martin Luther King"
          />
        </div>

        <div className=" flex flex-col items-center justify-center">
          <Image
            ref={(el) => (imageRefs.current[1] = el)}
            src={
              "https://www.florence-nightingale.co.uk/wp-content/uploads/60-Queen-Victoria-scaled.jpg"
            }
            width={300}
            height={200}
            alt="Queen Victoria"
            className="rounded-full drop-shadow-xl"
          />

          <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-extrabold drop-shadow-xl text-center">
              Historical Figures
            </h1>
            <h2 className="text-4xl text-center p-10 ">
              Learn about Important Figures in History
            </h2>
            <Link href="/search" ><button className="border-2 border-black w-52 rounded-xl bg-blue-700 p-2">
              Explore
            </button></Link>
          </div>

          <Image
            ref={(el) => (imageRefs.current[4] = el)}
            src={
              "https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2018-07/Keller_Helen%20square.jpg?itok=mSV8IAcB"
            }
            width={300}
            height={200}
            alt="Helen Keller"
            className="rounded-full drop-shadow-xl "
          />
        </div>

        <div className="flex flex-col ">
          <Image
            ref={(el) => (imageRefs.current[2] = el)}
            src={
              "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5e%2FWilliam_Shakespeare_by_John_Taylor.jpg%2F300px-William_Shakespeare_by_John_Taylor.jpg&w=640&q=75"
            }
            width={300}
            height={200}
            className="rounded-full mb-4 drop-shadow-xl"
            alt="William Shakespeare"
          />
          <Image
            ref={(el) => (imageRefs.current[3] = el)}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/440px-Sir_Winston_Churchill_-_19086236948.jpg"
            }
            width={300}
            height={200}
            className="rounded-full drop-shadow-xl "
            alt="Winston Churchill"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

