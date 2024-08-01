import React, { useState } from 'react';
import useQuizData from '@/Custom Hooks/useQuizData';

const QuizCard = () => {
  const { quizData, error, loading } = useQuizData();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedAnswerId, setSelectedAnswerId] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [isCorrect, setIsCorrect] = useState(false);

  const [correctAnswer, setCorrectAnswer] = useState('');

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

      setSelectedAnswerId(null); // Reset selected answer for the next question

    } else {

      setShowScore(true);
    }
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <section className="flex justify-center align-items mt-20">
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-black">{isCorrect ? 'Correct!' : 'Incorrect!'}</h2>
            {!isCorrect && (
              <p className="text-black mt-2">The correct answer is: {correctAnswer}</p>
            )}
            <button
              className="mt-4 bg-blue-500 text-white p-2 rounded"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuizCard;




