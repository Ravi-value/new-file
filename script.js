// Register user
function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  if (username && password) {
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registered! Please login.');
    window.location.href = 'index.html';
  }
}

// Login user
function login() {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  if (user && user.username === username && user.password === password) {
    window.location.href = 'quiz.html';
  } else {
    alert('Invalid credentials!');
  }
}

let currentQuestion = 0;
let selectedTopic = '';
let questions = [];
let correct = 0;

// Sample 50 questions per topic (short for now)
const allQuestions = {
  html: Array.from({ length: 50 }, (_, i) => ({
    question: `HTML Question ${i+1}?`,
    options: ['A', 'B', 'C', 'D'],
    answer: 'A'
  })),
  css: Array.from({ length: 50 }, (_, i) => ({
    question: `CSS Question ${i+1}?`,
    options: ['A', 'B', 'C', 'D'],
    answer: 'A'
  })),
  js: Array.from({ length: 50 }, (_, i) => ({
    question: `JavaScript Question ${i+1}?`,
    options: ['A', 'B', 'C', 'D'],
    answer: 'A'
  })),
};

function startQuiz(topic) {
  selectedTopic = topic;
  questions = allQuestions[topic];
  document.querySelector('.topic-buttons').style.display = 'none';
  document.getElementById('quizBox').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('questionText').innerText = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) correct++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    submitQuiz();
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    submitQuiz();
  }
}

function submitQuiz() {
  const wrong = questions.length - correct;
  localStorage.setItem('quizResult', JSON.stringify({ correct, wrong }));
  window.location.href = 'result.html';
}
