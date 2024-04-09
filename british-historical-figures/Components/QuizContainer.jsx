/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Quiz from './Quiz'

const QuizContainer = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='border border-white w-1/2 h-96'>
       <Quiz/>
      </div>
    </section>
  )
}

export default QuizContainer