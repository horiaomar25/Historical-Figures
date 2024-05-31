import React, { useState, useEffect } from "react";
import Image from "next/image";
import useHistoricalFigures from "./Custom Hooks/useHistoricalFigures"; // Adjust the path as necessary

const WikiData = ({ onSelectFigure }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const figures = useHistoricalFigures(triggerSearch ? searchQuery : "");

  // Effect to reset triggerSearch after fetching figures
  useEffect(() => {
    if (triggerSearch) {
      setTriggerSearch(false);
    }
  }, [figures]);

  // Helper function to chunk the array into smaller arrays of specified size
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkedFigures = chunkArray(figures, 3);

  const handleSearch = () => {
    setTriggerSearch(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center m-8">
      <div className="mb-4 flex w-full max-w-lg">
        <input
          type="text"
          className="input input-bordered w-full bg-white"
          placeholder="Search historical figures..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white rounded-r-lg p-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="flex flex-col items-center w-full">
        {chunkedFigures.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="flex justify-center w-full gap-8 mb-8">
            {chunk.map((figure, index) => (
              <div
                key={index}
                className="flex flex-col w-96"
                onClick={() => onSelectFigure(figure)}
              >
                {figure.wikipediaImageUrl && (
                  <div className="card shadow-xl bg-white">
                    <figure className="px-10 pt-10" style={{ height: '300px', overflow: 'hidden' }}>
                      <Image
                        src={figure.wikipediaImageUrl}
                        alt={figure.name}
                        width={200}
                        height={300}
                        className="rounded-lg object-cover"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-black">{figure.name}</h2>
                      <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => onSelectFigure(figure)}>Learn More</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WikiData;
