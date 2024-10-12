const submitBtnEl = document.querySelector(".submit-button");
const numbersBtnEl = document.querySelectorAll(".number-buttons");
const ratingContainerEl = document.querySelector(".rating-state-container");
const thankYouContainerEl = document.querySelector(
  ".thank-you-state-container"
);
const selectedRatingEl = document.getElementById("selected-rating"); //(spanElem)

// store the selected rating
let selectedRating = null;

// get chosen rating
numbersBtnEl.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.textContent;

    // show which button was selected
    numbersBtnEl.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Handle submit button
submitBtnEl.addEventListener("click", () => {
  if (selectedRating) {
    ratingContainerEl.classList.add("hidden");
    thankYouContainerEl.classList.remove("hidden");
    selectedRatingEl.textContent = selectedRating;
  } else {
    alert("Please select a rating before submitting.");
  }
});
