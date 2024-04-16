import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';

const ImageSlider = ({ imageUrl }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(imageUrl)

  // Function to handle changing to the next image
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
  };

  useEffect(() => {
    // Set interval to switch images every 5 seconds
    const interval = setInterval(nextImage, 5000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={imageUrl[currentImageIndex]}
      alt={`Image ${currentImageIndex}`}
      objectFit="cover"
      style={{
        opacity: 1,
        transition: 'opacity 1s ease-in-out',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
};

export default ImageSlider;
