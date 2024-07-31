import React from 'react'
import Image from 'next/image'

const QuizCard = () => {
  return (
    <section className="flex justify-center align-items mt-20 "> 
    <div className="card bg-black w-1/2 h-full border border-white border-opacity-7 shadow-xl">
  <figure className="px-10 pt-10">
    
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-white">Shoes!</h2>
    <p className='text-white'>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-white w-full">Buy Now</button>
      <button className="btn btn-primary bg-white w-full">Buy Now</button>
      <button className="btn btn-primary bg-white w-full">Buy Now</button>
      <button className="btn btn-primary bg-white w-full">Buy Now</button>
    </div>
  </div>
</div>
</section>
  )
}

export default QuizCard