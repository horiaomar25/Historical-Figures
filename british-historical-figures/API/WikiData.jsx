// wikipediaService.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WikiData = () => {
  const [figures, setFigures] = useState([]);

  const fetchData = async () => {
    const name = 'Martin Luther King'; // Set the name you want to query
    const apiKey = process.env.NEXT_PUBLIC_API_KEY; // Set your API key

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/historicalfigures?name=${name}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result); // Log the fetched data

      // Fetch Wikipedia image URL for each figure
      const figuresWithWikipediaImages = await Promise.all(
        result.map(async (figure) => {
          const wikipediaImageUrl = await fetchWikipediaImage(figure.name);
          return { ...figure, wikipediaImageUrl };
        })
      );

      setFigures(figuresWithWikipediaImages); // Set the figures with Wikipedia images into state
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const fetchWikipediaImage = async (name, thumbWidth = 300) => {
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
  
  useEffect(() => {
    fetchData();
  }, []); // Run the fetch when the component mounts

  console.log(figures); // Log the figures state to check if data is there

  return (
    <div>
      <h1>Historical Figures</h1>
      <ul>
        {figures.map((figure, index) => (
          <li key={index} className='border-2 border-black m-8  w-1/5 '>
           
            
       
      
            <ul>
              {figure.wikipediaImageUrl && (
              <div>
                <Image src={figure.wikipediaImageUrl} alt={figure.name} width={500} height={200} />
              </div>  )}
              <h2 className='text-2xl bg-red-800 w-full'>{figure.name}</h2>
            </ul>
            
            <button>Read More</button>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default WikiData;


