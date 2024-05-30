import React, { useState } from 'react';
import Image from 'next/image';
import useHistoricalFigures from './Custom Hooks/useHistoricalFigures'; // Adjust the path as necessary

const WikiData = ({ searchQuery, onSelectFigure }) => {
  const figures = useHistoricalFigures(searchQuery);

  return (
    <div>
      <div className="flex flex-wrap">
        {figures.map((figure, index) => (
          <div key={index} className="m-8 w-1/5 flex flex-col" onClick={() => onSelectFigure(figure)}>
            {figure.wikipediaImageUrl && (
              <>
                <div className="mb-4">
                  <Image src={figure.wikipediaImageUrl} alt={figure.name} width={200} height={300} className='rounded-lg' />
                  <p className='text-white text-center border border-white p-2'>{figure.name}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WikiData;
