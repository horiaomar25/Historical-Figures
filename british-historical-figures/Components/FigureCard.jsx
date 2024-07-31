import React from 'react';
import NoImage from '../public/no-image.png'; // Ensure the path is correct or use a URL
import arrow from '../public/arrow.png'; // Ensure the path is correct or use a URL
import Image from 'next/image';

const FigureCard = ({ figures }) => {
  if (!figures || figures.length === 0) {
    return <div>No figures found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
      {figures.map((figure, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="w-48 h-48 relative rounded-lg ">
              <Image
                src={figure.wikipediaImageUrl || NoImage}
                alt={figure.name}
                className="rounded-lg object-cover"
                layout="fill"
              />
            </div>
       
            <h3 className="text-white mt-6 p-2 rounded-lg ">
              {figure.name}
            </h3>
           
            
          </div>
        );
      })}
    </div>
  );
};

export default FigureCard;









