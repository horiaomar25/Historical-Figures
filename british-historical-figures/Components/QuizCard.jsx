"use client";
import React, { useState } from 'react';
import useQuizData from '../CustomHooks/useQuizData';
import QuizModal from './QuizModal';

const QuizCard = () => {
  const { quizData, error, loading } = useQuizData();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleSelection = (answerId) => {
    setSelectedAnswerId(answerId);
  };

  const handleAnswerClick = () => {
    const selectedAnswer = currentQuestion.answers.find(answer => answer.id === selectedAnswerId);
    const correctAnswerObject = currentQuestion.answers.find(answer => answer.correct);
    setIsCorrect(selectedAnswer.correct);
    setShowModal(true);
    setCorrectAnswer(correctAnswerObject ? correctAnswerObject.answer : 'No correct answer found');
  };

  const handleNextQuestion = () => {
    setShowModal(false);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswerId(null);
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
    <section className="flex justify-center items-center mt-20 px-4">
      {isQuizFinished ? (
        <div className="bg-black p-8 rounded shadow-lg flex flex-col justify-center items-center border border-white border-opacity-10 w-full max-w-md">
          <h2 className="text-white text-center">Finished Quiz</h2>
          <button
            className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="card bg-black w-full max-w-md border border-white border-opacity-7 shadow-xl mb-4">
          <div className="card-body items-center text-center">
            <h2 className="text-white">{currentQuestion.question}</h2>
            <div className="card-actions flex flex-col space-y-2 mt-4">
              {currentQuestion.answers.map((answer) => (
                <button
                  key={answer.id}
                  className={`border border-gray-300 text-white w-full p-3 rounded-lg ${
                    selectedAnswerId === answer.id ? 'bg-blue-500' : ''
                  }`}
                  onClick={() => handleSelection(answer.id)}
                >
                  {answer.answer}
                </button>
              ))}
              <button
                className='bg-blue-500 bg-opacity-15 text-white p-2 rounded-lg w-full'
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
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 px-4">
          <div className="bg-black p-8 rounded shadow-lg flex flex-col justify-center items-center border border-white border-opacity-10 w-full max-w-md">
            <h2 className="text-white">{isCorrect ? 'Correct!' : 'Incorrect!'}</h2>
            {!isCorrect && (
              <p className="text-white mt-2">The correct answer is: {correctAnswer}</p>
            )}
            <button
              className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
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

