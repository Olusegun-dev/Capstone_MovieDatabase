import React from 'react';

const MoviePlayer = ({ movie, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 w-4/5 md:w-1/2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 rounded-full px-2 py-1"
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
        <video controls className="w-full rounded-lg">
          <source
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MoviePlayer;
