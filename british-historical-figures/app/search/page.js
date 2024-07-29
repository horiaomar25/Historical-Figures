"use client";
import React, { useState } from 'react';
import FigureCard from '@/Components/FigureCard';
import Image from 'next/image';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFigure, setSelectedFigure] = useState(null);

  const handleSelectFigure = (figure) => {
    setSelectedFigure(figure);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Trigger search (this will automatically trigger the useEffect in WikiData component)
    console.log('Search initiated for:', searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const capitalizeFirstLetter = (value) => {
    if (typeof value === 'string' && value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      return value;
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen ">
      
      <FigureCard searchQuery={searchQuery} onSelectFigure={handleSelectFigure} />

      {selectedFigure && (
        <div className='border border-white flex justify-center items-center flex-col'>
          <Image src={selectedFigure.wikipediaImageUrl} alt={selectedFigure.name} width={300} height={200} />
          <h2 className='text-white text-2xl font-bold'>{selectedFigure.name}</h2>
          <div className='border border-white w-full p-4'>
            <p className='text-white'>Title: {selectedFigure.title}</p>
            <ul className='text-white'>
              {Object.entries(selectedFigure.info).map(([key, value], idx) => (
                <li key={idx}>
                  <strong>{capitalizeFirstLetter(key)}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;


