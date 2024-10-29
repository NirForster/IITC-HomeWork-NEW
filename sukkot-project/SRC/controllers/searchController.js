import MovieModel from "../models/movieModel.js";
import FavoritesModel from "../models/favoritesModel.js";
import SearchView from "../views/searchView.js";

const SearchController = {
  // search btn handler
  init: () => {
    const searchBtn = document.querySelector(".search-button");
    searchBtn.addEventListener("click", SearchController.handleSearch);
  },
  // get search input value checck if its an id or name and fetch the movies that match
  handleSearch: async () => {
    const searchInput = document.querySelector(".search-bar").value.trim();

    if (searchInput) {
      let movies;
      if (!isNaN(searchInput)) {
        const movie = await MovieModel.fetchMovieById(searchInput);
        movies = movie ? [movie] : [];
      } else {
        movies = await MovieModel.fetchMoviesByName(searchInput);
      }

      SearchView.renderResults(movies); // render results
      SearchController.attachFavoriteListeners(); // attch event listeners after rendering
    }
  },

  attachFavoriteListeners: () => {
    // click event listeners for heart icons
    document.querySelectorAll(".favorite-btn i").forEach((heartIcon) => {
      heartIcon.addEventListener("click", (event) => {
        event.preventDefault(); // prevent default behavior from <a>
        const movieId = event.target.getAttribute("data-movie-id");

        // toggle the favorite status
        const updatedFavorites = FavoritesModel.toggleFavorite(movieId);

        // update heart icon class based on favorite status
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

export default SearchController;
