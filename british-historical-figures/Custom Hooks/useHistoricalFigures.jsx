import { useState, useEffect } from 'react';
import NoImage from '../public/no-image.png';

/** This file is a custom React hook named useHistoricalFigures that 
 * fetches hsitorical figures based on a search query. It uses the wiki API
 * to fetch images for the historical figures.
 */

// Custom hook to fetch historical figures based on search query
const useHistoricalFigures = (searchQuery) => {
  // State to store fetched figures
   
  /**State variable figures is initialized as an empty array 
   * and a function setFigures is used to update the state variable. */ 
  const [figures, setFigures] = useState([]);
  
  let defaultImageUrl = NoImage;




/** The useEffect is created to perform a side effect whenever the searchQuery changes */
  useEffect(() => {
    /** This fetchData function is created to check if searchQuery is empty. If not it
     * takes the searchQuery and fetches the historical figures from the API. If there is an error, 
     * the response was not successful.
     */
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
      /** The fetched data is then parsed into a json.  */
        const result = await response.json();

      /** The figures are then mapped to fetch the wikipedia image for each figure. */
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

  const fetchWikipediaImage = async (name, thumbWidth = 200, thumbHeight = 200) => {
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
      return defaultImageUrl;
    }
  };

  return figures;

 
};

export default useHistoricalFigures;
