import MovieModel from "../models/movieModel.js";
import FavoritesModel from "../models/favoritesModel.js";
import HomeView from "../views/HomeView.js";

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

        // adding visul feedback for category change(flash)
        const container = document.querySelector(".popular-movies-container");
        container.classList.add("flash");

        // get new movies based on selected period(week/day)
        const movies = await MovieModel.fetchTrendingMovies(period);
        HomeView.renderMovies(movies);

        // remove flash effect after 0.5 second
        setTimeout(() => {
          container.classList.remove("flash");
        }, 500);
      });

    // Attach heart icon listeners
    HomeController.attachFavoriteListeners();
  },

  attachFavoriteListeners: () => {
    // click event listeners for heart icons
    document.querySelectorAll(".favorite-btn i").forEach((heartIcon) => {
      heartIcon.addEventListener("click", (event) => {
        event.preventDefault();
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

export default HomeController;
