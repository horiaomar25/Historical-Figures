"use client";
import React, { useState } from 'react';
import WikiData from '@/Components/Wiki';
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
      <div className='relative w-1/2'>
        <input
          type="text"
          className="w-full border border-black h-10 rounded-lg pr-12 pl-4" // Added padding-left for consistency
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <button 
          onClick={handleSearch} 
          className='absolute right-0 top-0 h-full px-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white rounded-r-lg'
        >
          Search
        </button>
      </div>
      <WikiData searchQuery={searchQuery} onSelectFigure={handleSelectFigure} />

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



