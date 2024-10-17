const questionsEL = document.querySelectorAll(".question");
console.log(questionsEL);
const answersEl = document.querySelectorAll(".answers");
console.log(answersEl);
const plusIconsEl = document.querySelectorAll(".plus-icon");
console.log(plusIconsEl);

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
