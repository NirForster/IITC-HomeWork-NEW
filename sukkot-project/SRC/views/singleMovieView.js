// singleMovieView.js
const SingleMovieView = {
  renderMovie: (movie) => {
    document.querySelector(
      ".movie-poster img"
    ).src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    document.querySelector(".movie-info h2").textContent = movie.title;
    document.querySelector(
      ".movie-info p:nth-of-type(1)"
    ).innerHTML = `<strong>Release Year:</strong> ${movie.release_date.slice(
      0,
      4
    )}`;
    document.querySelector(
      ".movie-info p:nth-of-type(2)"
    ).innerHTML = `<strong>Genre:</strong> ${movie.genres
      .map((g) => g.name)
      .join(", ")}`;
    document.querySelector(
      ".movie-info p:nth-of-type(3)"
    ).innerHTML = `<strong>Rating:</strong> ⭐ ${movie.vote_average}/10`;
    document.querySelector(
      ".movie-info p:nth-of-type(4)"
    ).innerHTML = `<strong>Synopsis:</strong> ${movie.overview}`;
    const castList = document.querySelector(".movie-info ul");
    castList.innerHTML = ""; // Clear previous cast

    movie.credits.cast.slice(0, 5).forEach((actor) => {
      const li = document.createElement("li");
      li.textContent = actor.name;
      castList.appendChild(li);
    });
  },
};

export default SingleMovieView;
