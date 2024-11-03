import FavoritesModel from "../models/favoritesModel.js";
import FavoritesView from "../views/favoritesView.js";
import MovieModel from "../models/movieModel.js";

const FavoritesController = {
  // function to initialise - sets favorites, rendering and attching event listeners.
  init: async () => {
    // gets list of favorite movie IDs
    const favorites = FavoritesModel.getFavorites();
    // promise for waiting to fetch each movie data (by id) before continuing
    const favoriteMovies = await Promise.all(
      favorites.map((id) => MovieModel.fetchMovieById(id))
    );

    // renderMovies attaches elements to movie data fetched
    FavoritesView.renderMovies(favoriteMovies);
    FavoritesController.attachFavoriteListeners();
  },

  attachFavoriteListeners: () => {
    document.querySelectorAll(".favorite-btn i").forEach((heartIcon) => {
      heartIcon.addEventListener("click", (event) => {
        event.preventDefault(); //bc its <a> elem so prvnt defu
        const movieId = event.target.getAttribute("data-movie-id"); //get the data attribute(id)

        // returns the updated favorites array
        const updatedFavorites = FavoritesModel.toggleFavorite(movieId);

        // update the heart icon's class
        if (updatedFavorites.includes(movieId)) {
          // if movie(id) in the list:
          event.target.classList.remove("fa-regular");
          event.target.classList.add("fa-solid");
        } else {
          // if movie(id) isnt on the list:
          event.target.classList.remove("fa-solid");
          event.target.classList.add("fa-regular");
        }
      });
    });
  },
};

export default FavoritesController;
