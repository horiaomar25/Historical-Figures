import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WikiData = ({ searchQuery }) => {
  const [figures, setFigures] = useState([]);
  const [selectedFigure, setSelectedFigure] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) return;

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/historicalfigures?name=${searchQuery}`,
          {
            method: 'GET',
            headers: {
              'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        const figuresWithWikipediaImages = await Promise.all(
          result.map(async (figure) => {
            const wikipediaImageUrl = await fetchWikipediaImage(figure.name);
            return { ...figure, wikipediaImageUrl };
          })
        );

        setFigures(figuresWithWikipediaImages);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [searchQuery]);

  const fetchWikipediaImage = async (name, thumbWidth = 300, thumbHeight = 200) => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&pithumbsize=${thumbWidth}&titles=${name}&origin=*`
      );
      const data = await response.json();
      const pages = data.query.pages;
      const pageIds = Object.keys(pages);
      const imageUrl = pages[pageIds[0]].thumbnail?.source;
      return imageUrl;
    } catch (error) {
      console.error('Error fetching Wikipedia image:', error);
      return null;
    }
  };

  const handleClick = (figure) => {
    setSelectedFigure(figure);
  };

  const capitalizeFirstLetter = (value) => {
    if (typeof value === 'string' && value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      return value;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {figures.map((figure, index) => (
          <div key={index} className="m-8 w-1/5 flex flex-col" onClick={() => handleClick(figure)}>
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
};

export default WikiData;
