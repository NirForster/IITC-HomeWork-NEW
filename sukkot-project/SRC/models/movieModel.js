import { API_KEY } from "../../Assets/API_KEYS.js";

const SearchMovieByNameEndpoint = "https://api.themoviedb.org/3/search/movie";
const SearchMovieByIDEndpoint = "https://api.themoviedb.org/3/movie";
const TrendingMoviesEndpoint = "https://api.themoviedb.org/3/trending/movie/";

const MovieModel = {
  fetchMoviesByName: async (query) => {
    const url = `${SearchMovieByNameEndpoint}?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  },

  fetchMovieById: async (id) => {
    const url = `${SearchMovieByIDEndpoint}/${id}?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.ok ? response.json() : null;
  },

  fetchTrendingMovies: async (period = "week") => {
    const url = `${TrendingMoviesEndpoint}${period}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  },
};

export default MovieModel;
