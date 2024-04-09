"use client"
import React, { useState } from 'react';
import WikiData from '@/API/WikiData';


const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false); // State to control when to show results

    const handleSearch = () => {
        // Set showResults to true when the search button is clicked
        setShowResults(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Call handleSearch when Enter key is pressed
            handleSearch();
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center m-8">
  <h3 className="text-white text-7xl text-center font-bold mt-8 mb-8">Historical <span className="pb-4 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">Figures</span></h3>
  <div className='relative w-1/2'>
    <input
      type="text"
      className="w-full border border-black h-10 rounded-lg pr-12" // Adjusted padding to make space for the button
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyPress={handleKeyPress}
    />
    <button 
      onClick={handleSearch} 
      className='absolute right-0 top-0 h-full px-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white rounded-r-lg' // Positioned the button absolutely
    >
      Search
    </button>
  </div>
</div>
            {/* Render WikiData component only when showResults is true */}
            {showResults && <WikiData searchQuery={searchQuery} />}
        </>
    );
}

export default Search;

