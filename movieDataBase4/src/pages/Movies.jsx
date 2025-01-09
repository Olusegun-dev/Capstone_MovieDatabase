import React, { useEffect, useState } from "react";
import axios from "axios";

const TMDB_API_KEY = "6d2daee1753f2e60970fada67efb1f47";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
              <p className="text-sm text-gray-600">Release Date: {movie.release_date}</p>
              <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
