"use client"
import React, { useState } from 'react';
import useQuizData from '@/Custom Hooks/useQuizData';
import QuizModal from './QuizModal';

const QuizCard = () => {
  // data from quiz is stored. Alongside error and loading state
  const { quizData, error, loading } = useQuizData();
// state of the current question being shown  - user can press next
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//state of clicking button to be highlighted when selected
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
// state holding modal to tell user if answer is incorrect/correct.
  const [showModal, setShowModal] = useState(false);
// state that find the correct answer in data.
  const [isCorrect, setIsCorrect] = useState(false);
// storing the correct answer to display if the user select the wrong answer
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // This function passed on the answerId of the answer been clicked. It will then specifically select that button for the styling changes to be added to 
  // so the user can know what they have clicked on. 
  const handleSelection = (answerId) => {
    setSelectedAnswerId(answerId);
  };

  // takes the selected answer and goes through the states
  const handleAnswerClick = () => {
    // selectedAnswer stores the current question and goes through the answer array and find the answer we have clicked alongside its id. 
    const selectedAnswer = currentQuestion.answers.find(answer => answer.id === selectedAnswerId);
    
    // this store the correct answer. It finds the answer and check if correct key holds true/false. In the case of true, the answer is correct. 
    const correctAnswerObject = currentQuestion.answers.find(answer => answer.correct);
    
    // function check if the selected answer is correct (true/false).
    setIsCorrect(selectedAnswer.correct);
    
    // opens the modal when answer has been submitted.
    setShowModal(true);
    
    // function holds the correct answer if the user answers incorrectly, the correct answer will be displayed in the modal/
    setCorrectAnswer(correctAnswerObject ? correctAnswerObject.answer : 'No correct answer found');
  };

  // handles the state for the next question 
  const handleNextQuestion = () => {
    setShowModal(false);
   // moves the index to change to the next question
    const nextQuestionIndex = currentQuestionIndex + 1;
   // This means as long as the data does not exceed the length/end of the array, it will continue
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
   // Resets the selection of answers
      setSelectedAnswerId(null); // Reset selected answer for the next question

    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerId(null);
    setShowModal(false);
    setIsCorrect(false);
    setCorrectAnswer('');
    setIsQuizFinished(false);
  };

  if (loading) {
    return <h2 className="text-white text-center flex justify-center items-center mt-20">Loading...</h2>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <section className="flex justify-center align-items mt-20">
      {isQuizFinished ? (
        <div className="bg-black p-8 rounded shadow-lg flex flex-col justify-center items-center border border-white border-opacity-10 w-1/2 h-1/2">
          <h2 className="text-white text-center">Finished Quiz</h2>
          <button
            className="mt-4 bg-blue-500 text-white p-2 rounded w-1/2"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="card bg-black w-1/2 h-full border border-white border-opacity-7 shadow-xl mb-4">
          <div className="card-body items-center text-center">
            <h2 className="text-white">{currentQuestion.question}</h2>
            <div className="card-actions flex flex-col space-y-2 mt-4">
              {currentQuestion.answers.map((answer) => (
                <button
                  key={answer.id}
                  className={`border border-gray-300 text-white w-80 p-3 rounded-lg ${
                    selectedAnswerId === answer.id ? 'bg-blue-500' : ''
                  }`}
                  onClick={() => handleSelection(answer.id)}
                >
                  {answer.answer}
                </button>
              ))}
              <button
                className='bg-blue-500 bg-opacity-15 text-white p-2 rounded-lg w-80'
                onClick={handleAnswerClick}
                disabled={selectedAnswerId === null}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && !isQuizFinished && (
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-black p-8 rounded shadow-lg flex flex-col justify-center items-center border border-white border-opacity-10 w-1/2 h-1/2">
            <h2 className="text-white">{isCorrect ? 'Correct!' : 'Incorrect!'}</h2>
            {!isCorrect && (
              <p className="text-white mt-2">The correct answer is: {correctAnswer}</p>
            )}
            <button
              className="mt-4 bg-blue-500 text-white p-2 rounded w-1/2"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          </div>
        </section>
      )}
    </section>
  );
};

export default QuizCard;




