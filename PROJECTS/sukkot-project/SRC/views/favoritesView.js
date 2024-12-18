import FavoritesModel from "../models/favoritesModel.js";

const FavoritesView = {
  renderMovies: (movies) => {
    const containerEl = document.querySelector(".favorite-movies-container");
    containerEl.innerHTML = ""; // clear previous content

    if (movies.length === 0) {
      containerEl.innerHTML = "<p>No favorite movies found.</p>";
      return;
    }

    const favoritesArr = FavoritesModel.getFavorites(); // get favorites from LS

    movies.forEach((movie) => {
      const isFavorite = favoritesArr.includes(String(movie.id)); // check if movie was favorited

      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");

      // prettier-ignore
      movieCard.innerHTML = `
        <div class="flip-card">
            <div class="movie-card inner">
                <div class="movie-card front">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster" />
                    <h2>${movie.title}</h2>
                </div>
                <div class="movie-card back">
                    <p class="movie-description">${movie.overview}</p>
                    <div class="rating-and-btns-container">
                      <a href="../HTML/singleMoviePage.html?id=${movie.id}" class="watch-btn"><i class="fa-solid fa-film"></i>Watch</a>
                      <div class="rating-favorits-container">
                        <p class="rating"><i class="fa-solid fa-star"></i> ${movie.vote_average}</p>
                        <a href="#" class="favorite-btn" data-movie-id="${movie.id}">
                          <i class="${isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}" data-movie-id="${movie.id}"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>`;
      containerEl.appendChild(movieCard);
    });
  },
};

export default FavoritesView;
