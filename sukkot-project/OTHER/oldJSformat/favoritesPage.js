import { API_KEY } from "../Assets/API_KEYS.js";

let favoritesArr = JSON.parse(localStorage.getItem("favorites")) || []; // Retrieve favorites from localStorage or set to an empty array
console.log(favoritesArr);

const EndpointSearchByID = "https://api.themoviedb.org/3/movie";

// Fetch each movie by ID individually
async function fetchMoviesByFavorites(favoritesArr) {
  const moviePromises = favoritesArr.map(async (id) => {
    const url = `${EndpointSearchByID}/${id}?api_key=${API_KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch movie with ID: ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching data for movie ID ${id}:`, error);
      return null; // In case of an error, return null so it can be filtered out
    }
  });

  // Wait for all the movie fetches to complete
  const movies = await Promise.all(moviePromises);

  // Filter out any null results (in case some fetches failed)
  return movies.filter((movie) => movie !== null);
}

async function displayFavoriteMovies() {
  const favoriteMovies = await fetchMoviesByFavorites(favoritesArr);

  if (favoriteMovies.length > 0) {
    renderMovies(favoriteMovies);
  } else {
    console.log("No favorite movies to display");
    document.querySelector(".favorite-movies-container").innerHTML =
      "<p>No favorite movies found.</p>";
  }
}

// Call this function on page load or when you want to display the favorite movies
displayFavoriteMovies();

// Function to render movie cards
function renderMovies(movies) {
  const favoriteMoviesContainerEl = document.querySelector(
    ".favorite-movies-container"
  );
  favoriteMoviesContainerEl.innerHTML = ""; // Clear the container

  movies.forEach((movie) => {
    const movieCardEl = document.createElement("div");
    movieCardEl.classList.add("movie-card");

    const isFavorite = favoritesArr.includes(String(movie.id)); // Check if movie is in favorites
    console.log(isFavorite);

    movieCardEl.innerHTML = `
      <div class="flip-card">
          <div class="movie-card inner">
              <div class="movie-card front">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster" />
                  <h2>${movie.title}</h2>
              </div>
              <div class="movie-card back">
                  <p class="movie-description">${movie.overview}</p>
                  <div class="rating-favorits-container">
                    <p class="rating"><i class="fa-solid fa-star"></i> ${movie.vote_average}</p>
                    <a href="#" class="favorite-btn" data-movie-id="${movie.id}">
                      <i class="fa-regular fa-heart" data-is-favorite="${isFavorite}"></i>
                    </a>
                  </div>
              </div>
          </div>
      </div>`;

    favoriteMoviesContainerEl.appendChild(movieCardEl);
  });
  // Add event listeners after rendering the movies
  attachFavoriteBtnListeners();
}

// Event handlers for each favorite button
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
    favoritesArr = favoritesArr.filter((id) => id !== movieId); // Remove from favorites
  } else {
    favoritesArr.push(movieId); // Add to favorites
  }

  // Save updated favorites to localStorage
  localStorage.setItem("favorites", JSON.stringify(favoritesArr));

  console.log(favoritesArr); // Debugging
}
