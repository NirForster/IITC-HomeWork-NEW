import MovieModel from "../models/movieModel.js";
import FavoritesModel from "../models/favoritesModel.js";
import SearchView from "../views/searchView.js";

const SearchController = {
  // function to initialise - sets an event listener to the search input
  init: () => {
    const searchBtn = document.querySelector(".search-button");
    searchBtn.addEventListener("click", SearchController.handleSearch);
  },

  handleSearch: async () => {
    // get search input value
    const searchInput = document.querySelector(".search-bar").value.trim();

    // check if its an id or name and fetch the movies that match
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

export default SearchController;
