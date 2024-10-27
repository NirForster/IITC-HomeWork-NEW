import { API_KEY } from "../../Assets/API_KEYS.js";

const BASE_URL = "https://api.themoviedb.org/3";

const MovieModel = {
  // Fetch movies by name
  fetchMoviesByName: async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch movies by name.");
    }

    const data = await response.json();
    return data.results;
  },

  // Fetch a single movie by ID
  fetchMovieById: async (id) => {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch movie by ID.");
    }

    return response.json();
  },

  // Fetch trending movies (default period is 'week')
  fetchTrendingMovies: async (period = "week") => {
    const url = `${BASE_URL}/trending/movie/${period}?api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch trending movies.");
    }

    const data = await response.json();
    return data.results;
  },
};

export default MovieModel;
