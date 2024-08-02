"use client";
import React, { useState } from 'react';
import FigureCard from '@/Components/FigureCard';
import useHistoricalFigures from '@/Custom Hooks/useHistoricalFigures';
import Search from '@/Components/Search';


const Page = () => {

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const {figures, loading} = useHistoricalFigures(query);

  const handleSearch = (e) => {
    setSearch(e.target.value); // updates the search from the input
  };

  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(search); // updates the query from the search
    setSearch(''); // resets the search
  }




  return (
    <>

      <Search
        search={search}
        handleSearch={handleSearch}
        handleQuery={handleQuery}
        loading={loading} />

      <FigureCard figures={figures} />


    </>
  );
}

export default Page;
