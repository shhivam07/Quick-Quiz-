const quizData = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Multi Language"
    ],
    correct: 1
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    answers: ["React", "Angular", "Python", "Vue"],
    correct: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "/* */", "<!-- -->", "#"],
    correct: 0
  }
];

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;

  answerBtns.forEach((btn, index) => {
    btn.textContent = currentQuiz.answers[index];
    btn.onclick = () => checkAnswer(index);
    btn.disabled = false;
    btn.style.background = "#f1f1f1";
  });

  nextBtn.classList.add("hidden");
}

function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestion].correct;

  if (selectedIndex === correctIndex) {
    score++;
    answerBtns[selectedIndex].style.background = "lightgreen";
  } else {
    answerBtns[selectedIndex].style.background = "salmon";
    answerBtns[correctIndex].style.background = "lightgreen";
  }

  answerBtns.forEach(btn => btn.disabled = true);
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${quizData.length}`;
}

// Start quiz
loadQuestion();

