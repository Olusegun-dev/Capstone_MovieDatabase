import React, { useEffect, useState } from "react";
import axios from "axios";

const TMDB_API_KEY = "6d2daee1753f2e60970fada67efb1f47";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}`
      );
      setSeries(response.data.results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Series</h1>
      {loading ? (
        <p>Loading...</p>
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
              <p className="text-sm text-gray-600">First Air Date: {tv.first_air_date}</p>
              <p className="text-sm text-gray-600">Rating: {tv.vote_average}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Series;
