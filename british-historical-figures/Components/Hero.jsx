import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      imageRefs.current.forEach((ref, index) => {
        if (ref.offsetTop < scrollPosition) {
          ref.style.opacity = 1;
          ref.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            className="rounded-lg mb-4 mt-8 drop-shadow-xl "
            alt="Marie Curie"
            style={{
              opacity: 0,
              transform: "translateY(50px)",
              transition: "opacity 0.5s, transform 0.5s",
            }}
          />
          <Image
            ref={(el) => (imageRefs.current[1] = el)}
            src={
              "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F05%2FMartin_Luther_King%252C_Jr..jpg%2F300px-Martin_Luther_King%252C_Jr..jpg&w=640&q=75"
            }
            width={300}
            height={175}
            className="rounded-lg drop-shadow-xl "
            alt="Martin Luther King"
            style={{
              opacity: 0,
              transform: "translateY(50px)",
              transition: "opacity 0.5s, transform 0.5s",
            }}
          />
        </div>

    

        <div className=" flex flex-col items-center justify-center">
           {/* Image on the top/middle of the website. Inside of flex column div*/}
        <Image
            ref={(el) => (imageRefs.current[2] = el)}
            src={
              "https://www.florence-nightingale.co.uk/wp-content/uploads/60-Queen-Victoria-scaled.jpg"
            }
            width={300}
            height={200}
            alt="Queen Victoria"
            className="rounded-lg drop-shadow-xl"
          />

           {/* This is the text and button to go to search. I want to add padding this so there is space between text and pictures
                I need to figure out what this will look like in mobile view. 
           
           */}
          <div className="flex flex-col items-center justify-center p-10">
          <h1 className="text-4xl font-extrabold drop-shadow-xl text-center">
            Historical Figures
          </h1>

          <h2 className="text-4xl text-center p-10 ">
            Learn about Important Figures in History
          </h2>
          <button className="border-2 border-black w-32 rounded-xl bg-red-100">
            Explore
          </button>
           </div>

           {/* Image on the bottom/middle of the website. Inside of flex column div*/}
            <Image
            ref={(el) => (imageRefs.current[2] = el)}
            src={
              "https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2018-07/Keller_Helen%20square.jpg?itok=mSV8IAcB"
            }
            width={300}
            height={200}
            alt="Helen Keller"
            className="rounded-lg drop-shadow-xl "
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
            className="rounded-lg mb-4 drop-shadow-xl"
            alt="William Shakespeare"
            style={{
              opacity: 0,
              transform: "translateY(50px)",
              transition: "opacity 0.5s, transform 0.5s",
            }}
          />
          <Image
            ref={(el) => (imageRefs.current[3] = el)}
            src={
              "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbc%2FSir_Winston_Churchill_-_19086236948.jpg%2F300px-Sir_Winston_Churchill_-_19086236948.jpg&w=640&q=75"
            }
            width={300}
            height={200}
            className="rounded-lg drop-shadow-xl "
            alt="Ada Lovelace"
            style={{
              opacity: 0,
              transform: "translateY(50px)",
              transition: "opacity 0.5s, transform 0.5s",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
