import React from 'react';
import WikiData from '@/API/WikiData';

const About = () => {
  // Array of historical figures to fetch data for
  const historicalFigures = ["Martin Luther King Jr", "Marie Curie", "William Shakespeare", "Ada Lovelace"];

  return (
    <div className='h-screen '>
      <h2 className='text-4xl '>Learn about Important Figures in History</h2>
      {/* Iterate over the historicalFigures array and render WikiData component */}
      {historicalFigures.map((figure, index) => (
        <div key={index} >
          <WikiData searchQuery={figure} />
        </div>
      ))}
    </div>
  );
};

export default About;
