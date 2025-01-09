import React, { useEffect, useState } from "react";
import axios from "axios";

const TMDB_API_KEY = "6d2daee1753f2e60970fada67efb1f47"; // Replace with your TMDb API key
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState({ movies: false, series: false });

  useEffect(() => {
    fetchMovies();
    fetchSeries();
  }, []);

  const fetchMovies = async () => {
    setLoading((prev) => ({ ...prev, movies: true }));
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading((prev) => ({ ...prev, movies: false }));
  };

  const fetchSeries = async () => {
    setLoading((prev) => ({ ...prev, series: true }));
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}`
      );
      setSeries(response.data.results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
    setLoading((prev) => ({ ...prev, series: false }));
  };

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Home</h1> */}

      {/* Movies Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Now Playing (Movies)</h2>
        {loading.movies ? (
          <p>Loading movies...</p>
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
                <p className="text-sm text-gray-600">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Series Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Currently Airing (Series)</h2>
        {loading.series ? (
          <p>Loading series...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {series.map((tv) => (
              <div
                key={tv.id}
                className="border p-4 rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                  alt={tv.name}
                  className="w-full h-64 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold mb-2">{tv.name}</h3>
                <p className="text-sm text-gray-600">
                  First Air Date: {tv.first_air_date}
                </p>
                <p className="text-sm text-gray-600">Rating: {tv.vote_average}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
