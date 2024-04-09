import React from 'react';
import Image from 'next/image';


const CorrectAnswer = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className={`w-1/2 border border-black h-auto bg-blue`}> {/* Using custom class for white drop shadow */}
        <div className="flex justify-center items-center mt-4">
          <Image 
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/440px-Sir_Winston_Churchill_-_19086236948.jpg"} 
            width={200} 
            height={200} 
            alt="Sir Winston Churchill, a prominent figure in British history."
          />
        </div>
        <p className='text-black p-4 text-center'>Winston Churchill was a towering figure in British history, known for his leadership during World War II as Prime Minister of the United Kingdom. His stirring speeches and unwavering resolve inspired the nation during its darkest hours.</p>
      </div>
    </section>
  );
};

export default CorrectAnswer;
