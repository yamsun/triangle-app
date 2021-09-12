const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const output = document.querySelector('#output');

const quizContainers = document.querySelectorAll('.question-container');

const correctAnswers = ["90°", "right angled", "yes", "no", "yes", "isosceles" ];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
            quizContainers[index].style.backgroundColor = "#C5EFCB";
        }
        else{
            quizContainers[index].style.backgroundColor = "#FBDCE2";
        }
        index = index + 1;
    }
    console.log(score);
    output.innerText = "Your score is " + score + " / 6";
    
}

submitAnswerBtn.addEventListener("click", calculateScore)