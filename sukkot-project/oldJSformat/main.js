import { ACCESS_TOKEN_AUTH } from "../Assets/API_KEYS.js";

let favoritesArr = JSON.parse(localStorage.getItem("favorites")) || []; // Retrieve favorites from localStorage or set to an empty array

let url = "https://api.themoviedb.org/3/trending/movie/week"; // Default to this week
const selectEl = document.getElementById("categories");

// Fetch this week's popular movies when the page loads
window.addEventListener("load", () => {
  fetchPopularMovies(url);
});

// Fetch movies based on user selection (change event)
selectEl.addEventListener("change", () => {
  if (selectEl.value === "popular-today") {
    url = "https://api.themoviedb.org/3/trending/movie/day";
  } else {
    url = "https://api.themoviedb.org/3/trending/movie/week";
  }

  fetchPopularMovies(url);
});

// Function to fetch and render movies
function fetchPopularMovies(url) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      renderMovieHomePage(json.results);
    })
    .catch((err) => {
      console.error(err);
      popularMoviesContainerEl.innerHTML =
        "<p>Failed to fetch movies. Please try again later.</p>";
    });
}

// Function to render movie cards
function renderMovieHomePage(movies) {
  const popularMoviesContainerEl = document.querySelector(
    ".popular-movies-container"
  );
  popularMoviesContainerEl.innerHTML = ""; // Clear the container

  movies.forEach((movie) => {
    const movieCardEl = document.createElement("div");
    movieCardEl.classList.add("movie-card");

    const isFavorite = favoritesArr.includes(String(movie.id)); // Check if movie is in favorites
    console.log(isFavorite);

    // prettier-ignore
    movieCardEl.innerHTML = `
    <div class="flip-card">
        <div class="movie-card inner">
            <div class="movie-card front">
                <img src="https://image.tmdb.org/t/p/w500${
                  movie.poster_path
                }" alt="${movie.title} poster" />
                <h2>${movie.title}</h2>
            </div>
            <div class="movie-card back">
                <p class="movie-description">${movie.overview}</p>
                <div class="rating-favorits-container">
                  <p class="rating"><i class="fa-solid fa-star"></i> ${
                    movie.vote_average
                  }</p>
                  <a href="#" class="favorite-btn" data-movie-id="${movie.id}">
                    <i class="fa-regular fa-heart" data-is-favorite="${isFavorite}"></i>
                  </a>
                </div>
            </div>
        </div>
    </div>`;

    popularMoviesContainerEl.appendChild(movieCardEl);
  });
  // Add event listeners after rendering the movies
  attachFavoriteBtnListeners();
}

// even handlers for each favorite button
function attachFavoriteBtnListeners() {
  const favoriteBtnEl = document.querySelectorAll(".favorite-btn");

  favoriteBtnEl.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor behavior
      const movieId = event.currentTarget.getAttribute("data-movie-id");
      toggleFavorite(movieId);
    });
  });
}

// Function to toggle in and out favoriteArr and toggle heart icon
function toggleFavorite(movieId) {
  if (favoritesArr.includes(movieId)) {
    favoritesArr = favoritesArr.filter((id) => id !== movieId); //filter from array
    // heartIconEl.classList.add("fa-regular");
    // heartIconEl.classList.remove("fa-solid");
  } else {
    favoritesArr.push(movieId);
    // heartIconEl.classList.remove("fa-regular");
    // heartIconEl.classList.add("fa-solid");
  }

  // Save updated favorites to localStorage
  localStorage.setItem("favorites", JSON.stringify(favoritesArr));

  console.log(favoritesArr); //debugging
}
