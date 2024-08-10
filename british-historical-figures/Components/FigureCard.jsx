import React, { useState } from 'react';
import NoImage from '../public/no-image.png'; 
import InformationCard from './InformationCard';
import Image from 'next/image';

const FigureCard = ({ figures}) => {
  const [selectedFigure, setSelectedFigure] = useState(null);

  

 
  return (
    <>
      {selectedFigure && (
        <InformationCard 
          figure={selectedFigure} 
          onClose={() => setSelectedFigure(null)} 
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
        {figures.map((figure, index) => (
          <div key={index} className="flex flex-col items-center" data-testid="figure-card">
            <div className="w-48 h-48 relative rounded-lg">
              <Image
                src={figure.wikipediaImageUrl || NoImage}
                alt={figure.name}
                className="rounded-lg object-cover"
                layout="fill"
              />
            </div>
            <div className='flex flex-row items-center mt-4'> 
              <h3 className="text-white rounded-lg">
                {figure.name}
              </h3>
              <button 
                className='text-white ml-2'
                onClick={() => setSelectedFigure(figure)}
                aria-label={`Open information for ${figure.name}`} 
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 bg-white rounded-2xl hover:bg-blue-500"
                  viewBox="0 0 32 32"
                >
                  <g data-name="13-Arrow Up">
                    <path d="M25 0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7zm5 25a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5z" />
                    <path d="M24 7H14v2h7.59L7.29 23.29 8.7 24.7 23 10.41V18h2V8a1 1 0 0 0-1-1z" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FigureCard;









