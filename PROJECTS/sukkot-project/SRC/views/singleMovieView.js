// SingleMovieView: Takes a movie object and updates the page dynamically
const SingleMovieView = {
  renderMovie: (movie) => {
    // movie poster
    const posterImg = document.querySelector(".movie-poster img");
    posterImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    // movie title
    const titleElement = document.querySelector(".movie-info h2");
    titleElement.textContent = movie.title;

    // release year (first 4 characters of release date)
    const releaseYearElement = document.querySelector(
      ".movie-info p:nth-of-type(1)"
    );
    releaseYearElement.innerHTML = `<strong>Release Year:</strong> ${movie.release_date.slice(0, 4)}`; // prettier-ignore

    // movie genres comma-separated list
    const genreElement = document.querySelector(".movie-info p:nth-of-type(2)");
    const genreNames = movie.genres.map((g) => g.name).join(", ");
    genreElement.innerHTML = `<strong>Genre:</strong> ${genreNames}`;

    // movie rating
    const ratingElement = document.querySelector(
      ".movie-info p:nth-of-type(3)"
    );
    ratingElement.innerHTML = `<strong>Rating:</strong> ⭐ ${movie.vote_average}/10`;

    // movie synopsis
    const synopsisElement = document.querySelector(
      ".movie-info p:nth-of-type(4)"
    );
    synopsisElement.innerHTML = `<strong>Synopsis:</strong> ${movie.overview}`;

    // cast list
    const castList = document.querySelector(".movie-info ul");
    castList.innerHTML = "";

    // add top 5 actors to cast list
    movie.credits.cast.slice(0, 5).forEach((actor) => {
      const li = document.createElement("li");
      li.textContent = actor.name;
      castList.appendChild(li);
    });
  },
};

export default SingleMovieView;
