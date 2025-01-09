import React, { useContext, useState } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MoviePlayer from './MoviePlayer';

const MovieCard = ({ movie }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="relative bg-gray-100 p-4 rounded-lg hover:shadow-lg">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-md cursor-pointer"
        onClick={() => setIsPlayerOpen(true)}
      />
      <h2 className="mt-2 text-lg font-semibold">{movie.Title}</h2>
      <p className="text-sm text-gray-600">{movie.Year}</p>
      <button
        onClick={() =>
          isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie)
        }
        className={`mt-2 px-4 py-2 rounded-lg ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>

      {isPlayerOpen && (
        <MoviePlayer movie={movie} onClose={() => setIsPlayerOpen(false)} />
      )}
    </div>
  );
};

export default MovieCard;
