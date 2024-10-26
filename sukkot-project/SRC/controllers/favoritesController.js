import FavoritesModel from "../models/favoritesModel.js";
import FavoritesView from "../views/favoritesView.js";
import MovieModel from "../models/movieModel.js";

const FavoritesController = {
  init: async () => {
    const favorites = FavoritesModel.getFavorites();
    const favoriteMovies = await Promise.all(
      favorites.map((id) => MovieModel.fetchMovieById(id))
    );

    const validMovies = favoriteMovies.filter((movie) => movie !== null);
    FavoritesView.renderMovies(validMovies);
    FavoritesController.attachEventListeners();
  },

  attachEventListeners: () => {
    document.querySelectorAll(".favorite-btn i").forEach((heartIcon) => {
      heartIcon.addEventListener("click", (event) => {
        event.preventDefault();
        const movieId = event.target.getAttribute("data-movie-id");

        // toggle the favorite status
        const updatedFavorites = FavoritesModel.toggleFavorite(movieId);

        // Update the heart icon class
        if (updatedFavorites.includes(movieId)) {
          event.target.classList.remove("fa-regular");
          event.target.classList.add("fa-solid");
        } else {
          event.target.classList.remove("fa-solid");
          event.target.classList.add("fa-regular");
        }
      });
    });
  },
};

export default FavoritesController;
