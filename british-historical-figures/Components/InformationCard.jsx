import React from 'react';
import Image from 'next/image';
import NoImage from '../public/no-image.png';

const InformationCard = ({ figure, onClose }) => {
  const getValueOrDefault = (value, defaultValue = 'Not Known') => value ? value : defaultValue;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" data-testid="information-card">
      <div className="bg-gray-800 p-5 rounded-lg relative md:w-2/3 lg:w-1/2 max-h-full overflow-auto">
        <button
          className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-700 rounded-full p-1"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className='text-white mb-4 text-2xl'>{figure.name}</h2>
        <div className="flex justify-center mb-4">
          <Image
            src={figure.wikipediaImageUrl || NoImage}
            alt={figure.name}
            className="rounded-lg"
            width={200}
            height={200}
          />
        </div>
        <div className='text-white text-center'>
          <p><strong>Title:</strong> {getValueOrDefault(figure.title)}</p>
          <p><strong>Born:</strong> {getValueOrDefault(figure.info.born)}</p>
          <p><strong>Died:</strong> {getValueOrDefault(figure.info.died)}</p>
          <p><strong>Cause of Death:</strong> {getValueOrDefault(figure.info.cause_of_death)}</p>
          <p><strong>Years of Service:</strong> {getValueOrDefault(figure.info.years)}</p>
          <p><strong>Awards:</strong> {getValueOrDefault(figure.info.awards)}</p>
          <p><strong>Resting Place:</strong> {getValueOrDefault(figure.info.resting_place)}</p>
          <p>
            <strong>More Information:</strong> 
            <a
              href={figure.wikipediaPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-2"
            >
              Wikipedia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;


