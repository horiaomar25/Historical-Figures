import React from 'react';
import NoImage from '../public/no-image.png'; // Ensure the path is correct or use a URL
import Image from 'next/image';

const FigureCard = ({ figures }) => {
  if (!figures || figures.length === 0) {
    return <div>No figures found</div>;
  }

  return (
    <div className="figure-cards-container">
      {figures.map((figure, index) => {
       

        return (
          <div key={index} className="figure-card">
            <Image 
              src={figure.wikipediaImageUrl || NoImage} 
              alt={figure.name} 
              className="figure-image" 
              width={200}
              height={200}
            />
            <h3 className="figure-name">{figure.name}</h3>
            <p className="figure-title">{figure.title}</p>
            
          </div>
        );
      })}
    </div>
  );
};

export default FigureCard;







