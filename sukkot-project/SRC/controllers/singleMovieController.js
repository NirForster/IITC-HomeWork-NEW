import MovieModel from "../models/movieModel.js";
import SingleMovieView from "../views/singleMovieView.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");

  if (movieId) {
    MovieModel.fetchMovieById(movieId)
      .then((movieData) => SingleMovieView.renderMovie(movieData))
      .catch((error) => console.error("Error fetching movie:", error));
  }
});
