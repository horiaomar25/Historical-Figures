import { useState, useEffect } from 'react';
import NoImage from '../public/no-image.png';

// Custom hook to fetch historical figures based on search query
const useHistoricalFigures = (searchQuery) => {
  // State to store fetched figures
  const [figures, setFigures] = useState([]);
  
  let defaultImageUrl = NoImage;

  // useEffect to perform a side effect whenever the searchQuery changes
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

        // Map figures to fetch the Wikipedia image and page URL for each figure
        const figuresWithWikipediaImages = await Promise.all(
          result.map(async (figure) => {
            const { wikipediaImageUrl, wikipediaPageUrl } = await fetchWikipediaImageAndPageUrl(figure.name);
            return { ...figure, wikipediaImageUrl, wikipediaPageUrl };
          })
        );

        setFigures(figuresWithWikipediaImages);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [searchQuery]);

  const fetchWikipediaImageAndPageUrl = async (name, thumbWidth = 200, thumbHeight = 200) => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages|info&inprop=url&pithumbsize=${thumbWidth}&titles=${name}&origin=*`
      );
      const data = await response.json();
      const pages = data.query.pages;
      const pageIds = Object.keys(pages);
      const page = pages[pageIds[0]];
      const imageUrl = page.thumbnail?.source || defaultImageUrl;
      const pageUrl = page.fullurl;
      return { wikipediaImageUrl: imageUrl, wikipediaPageUrl: pageUrl };
    } catch (error) {
      console.error('Error fetching Wikipedia image and page URL:', error);
      return { wikipediaImageUrl: defaultImageUrl, wikipediaPageUrl: null };
    }
  };

  console.log(figures);
  return figures;
};

export default useHistoricalFigures;
