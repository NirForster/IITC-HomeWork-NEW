const questionsEL = document.querySelectorAll(".question");
const answersEl = document.querySelectorAll(".answers");
const plusIconsEl = document.querySelectorAll(".plus-icon");

questionsEL.forEach((question, index) => {
  question.addEventListener("click", () => {
    const answer = answersEl[index];
    const icons = plusIconsEl[index];

    answer.classList.toggle("active"); // Toggle the active class

    // Change icon based on active state
    if (answer.classList.contains("active")) {
      icons.src = "./assets/images/icon-minus.svg"; // Set to minus icon
    } else {
      icons.src = "./assets/images/icon-plus.svg"; // Set to plus icon
    }

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
