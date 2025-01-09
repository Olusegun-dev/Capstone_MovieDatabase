import React, { useState, useEffect } from "react";
import axios from "axios";

const TMDB_API_KEY = "6d2daee1753f2e60970fada67efb1f47"; // Replace with your TMDb API key
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const Browse = () => {
  const [selectedCategory, setSelectedCategory] = useState("movies");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, [selectedCategory]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const endpoint =
        selectedCategory === "movies"
          ? `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
          : `${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}`;
      const response = await axios.get(endpoint);
      setItems(response.data.results);
    } catch (error) {
      console.error("Error fetching data from TMDb:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Browse</h1>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "movies" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelectedCategory("movies")}
        >
          Movies
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "series" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelectedCategory("series")}
        >
          Series
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">
                {item.title || item.name}
              </h3>
              <p className="text-sm text-gray-600">
                Release Date: {item.release_date || item.first_air_date}
              </p>
              <p className="text-sm text-gray-600">Rating: {item.vote_average}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Browse;
