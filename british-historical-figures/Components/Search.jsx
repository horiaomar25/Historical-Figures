import React from 'react'

const Search = ({ search, handleSearch, handleQuery, loading }) => {

 
  return (
    <>
      {/** Hero Section for Search Page */}
      <h2 className='text-8xl -tracking-tight text-white font-semibold  text-center mb-10 mt-10'>Explore</h2>
      <div className='flex justify-center items-center mt-5 px-4 sm:px-0'>
        <div className='relative w-full max-w-lg'>
          <form onSubmit={handleQuery}>
            <input
              type="text"
              placeholder="Search..." // Added placeholder for better UX
              className='w-full bg-gray-400 bg-opacity-20 border border-white rounded-lg p-2 text-white pr-24 sm:pr-32'
              value={search}
              onChange={handleSearch}
            />
            <button
              className="absolute right-0.5 top-1/2 transform -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white hover:shadow-lg " onClick={handleQuery}>
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search