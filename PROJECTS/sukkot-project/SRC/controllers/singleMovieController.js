import MovieModel from "../models/movieModel.js";
import SingleMovieView from "../views/singleMovieView.js";

// event listener for when the HTML document has completely loaded
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");

  if (movieId) {
    // fetch movie data using the ID from the URL
    MovieModel.fetchMovieById(movieId)
      // render the movie details on the page
      .then((movieData) => SingleMovieView.renderMovie(movieData))
      // handle err
      .catch((error) => console.error("Error fetching movie:", error));
  }
});
