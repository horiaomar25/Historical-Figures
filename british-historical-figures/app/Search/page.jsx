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
                <h1 className="text-white text-4xl text-center font-bold border border-white mb-10">Historical Figures</h1>
                <div className='flex w-1/2 justify-center items-center'>
                    <input
                        type="text"
                        className="w-1/2 border border-black h-10 rounded-lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSearch} className='border border-black h-10 rounded-lg p-2 bg-dark-brown'>Search</button>
                </div>
            </div>

            {/* Render WikiData component only when showResults is true */}
            {showResults && <WikiData searchQuery={searchQuery} />}
        </>
    );
}

export default Search;

