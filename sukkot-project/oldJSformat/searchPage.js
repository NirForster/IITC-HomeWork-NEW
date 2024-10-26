import { API_KEY } from "../Assets/API_KEYS.js";

const EndpointSearchByName = "https://api.themoviedb.org/3/search/movie";
const EndpointSearchByID = "https://api.themoviedb.org/3/movie";

// elem variables
const searchInputEl = document.querySelector(".search-bar");
const searchBtnEl = document.querySelector(".search-button");

// search button handler
searchBtnEl.addEventListener("click", async () => {
  const query = searchInputEl.value.trim(); //takes input from user without spaces

  if (query) {
    // Check if the query is a number (Movie ID) or text (Movie name)
    if (!isNaN(query)) {
      const searchResultById = await fetchMovieById(query);
      displayResults([searchResultById]);
    } else {
      const searchResults = await fetchMoviesByName(query);
      displayResults(searchResults);
    }
  }
});

// fetch data by movie name
async function fetchMoviesByName(query) {
  const url = `${EndpointSearchByName}?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data by name:", error);
  }
}

// Fetch data by movie ID
async function fetchMovieById(id) {
  const url = `${EndpointSearchByID}/${id}?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Movie not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data by ID:", error);
  }
}

// render results
function displayResults(movies) {
  const resultsMessageEl = document.querySelector(".results-message");
  resultsMessageEl.innerText = `${movies.length} results found`;

  const popularMoviesContainerEl = document.querySelector(
    ".popular-movies-container"
  );
  popularMoviesContainerEl.innerHTML = ""; // Clear any previous results

  if (movies && movies.length > 0) {
    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
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
                    <i id="${movie.id}" class="fa-regular fa-heart"></i>
                  </a>
                </div>
            </div>
        </div>
    </div>`;

      popularMoviesContainerEl.appendChild(movieCard);
    });
    // Add event listeners after rendering the movies
    // attachFavoriteBtnListeners();
  }
}

// toggleFavorite();
