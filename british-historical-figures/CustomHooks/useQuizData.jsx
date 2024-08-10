import { useState, useEffect } from 'react';

const useQuizData = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuizData = async () => {
    try {
      const response = await fetch(
        "https://historical-figures-backend.onrender.com/historical-quiz",
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
   
      setQuizData(result);
    } catch (error) {
      console.log('Error:', error.message); // Log any errors
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizData();
  }, []); // Empty dependency array means this effect runs once when the component mounts
 
  return { quizData, loading, error };
};

export default useQuizData;

