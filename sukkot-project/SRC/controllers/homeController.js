import MovieModel from "../models/movieModel.js";
import FavoritesModel from "../models/favoritesModel.js";
import HomeView from "../views/homeView.js";

const HomeController = {
  init: async () => {
    const movies = await MovieModel.fetchTrendingMovies("week");
    HomeView.renderMovies(movies); // render the movies
    HomeController.attachEventListeners(); // attch event listeners after rendering
  },

  attachEventListeners: () => {
    // handle category change
    document
      .getElementById("categories")
      .addEventListener("change", async (event) => {
        const period = event.target.value === "popular-today" ? "day" : "week";

        const container = document.querySelector(".popular-movies-container");
        container.classList.add("flash"); // adding visul feedback for category change(flash)

        // get new movies based on selected period(week/day)
        const movies = await MovieModel.fetchTrendingMovies(period);
        HomeView.renderMovies(movies);

        // remove flash effect after 0.5 second
        setTimeout(() => {
          container.classList.remove("flash");
        }, 500);
      });

    // Attach heart icon event listeners
    HomeController.attachFavoriteListeners();
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

export default HomeController;
