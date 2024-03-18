import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WikiData = ({ searchQuery }) => {
  const [figures, setFigures] = useState([]);

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

  return (
    <div>
      <div className="flex flex-wrap">
        {figures.map((figure, index) => (
          <div key={index} className="m-8 w-1/5 flex flex-col" >
            {figure.wikipediaImageUrl && (
              <div className="mb-4">
                <Image src={figure.wikipediaImageUrl} alt={figure.name} width={300} height={200} className='rounded-lg' />
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WikiData;




