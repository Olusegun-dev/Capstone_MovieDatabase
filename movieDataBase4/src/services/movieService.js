import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6d2daee1753f2e60970fada67efb1f47';

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${query}`);
    return response.data.Search;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
