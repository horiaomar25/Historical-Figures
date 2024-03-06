import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php'); // The route defined in your proxy file
       

        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const data = await response.json();
       
        setCategories(data.categories);
       
        
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  return {
    categories
  }
    
  
};

export default FetchCategories;

