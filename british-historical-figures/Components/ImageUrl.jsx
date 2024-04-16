import React from 'react'
import ImageSlider from './ImageSlider';

const ImageUrl = () => {
    
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Your array of image URLs
  const imageArr = [
    "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc8%2FMarie_Curie_c._1920s.jpg%2F300px-Marie_Curie_c._1920s.jpg&w=640&q=75",
    "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F05%2FMartin_Luther_King%252C_Jr..jpg%2F300px-Martin_Luther_King%252C_Jr..jpg&w=640&q=75",
    'https://example.com/image3.jpg',
    "https://www.florence-nightingale.co.uk/wp-content/uploads/60-Queen-Victoria-scaled.jpg",
    "https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2018-07/Keller_Helen%20square.jpg?itok=mSV8IAcB",
    "http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5e%2FWilliam_Shakespeare_by_John_Taylor.jpg%2F300px-William_Shakespeare_by_John_Taylor.jpg&w=640&q=75",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/440px-Sir_Winston_Churchill_-_19086236948.jpg"
  ];

  useEffect(() => {
    // Set interval to switch images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArr.length);
    }, 5000);
    
    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, [imageArr.length]);

  return (
    <ImageSlider imageUrl={imageArr[currentImageIndex]} />
  );

      
}

export default ImageUrl