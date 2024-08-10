

const QuizModal = ({ isCorrect, handleNextQuestion, correctAnswer}) => {
    return(
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
    )
}

export default QuizModal;