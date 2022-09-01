const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");

const quizContainers = document.querySelectorAll(".question-container");

const correctAnswers = ["90°", "right angled", "yes", "no", "yes", "isosceles"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  console.log(formResults.values());

  for (let value of formResults.values()) {
    console.log(index + 1);
    console.log(value);
    if (value === correctAnswers[index]) {
      score = score + 1;
      quizContainers[index].style.backgroundColor = "#C5EFCB";
    } else {
      quizContainers[index].style.backgroundColor = "#FBDCE2";
    }
    index = index + 1;
  }
  console.log(score);
  output.innerHTML = "You Scored " + "<b>" + score + " / 6" + "</b>";
}

submitAnswerBtn.addEventListener("click", calculateScore);
