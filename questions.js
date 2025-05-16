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


const allQuestions = [
  {
    "question": "What does HTML stand for? (1)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (2)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (3)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (4)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (5)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (6)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (7)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (8)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (9)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (10)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (11)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (12)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (13)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (14)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (15)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (16)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (17)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (18)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (19)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (20)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (21)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (22)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (23)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (24)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (25)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (26)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (27)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (28)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (29)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (30)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (31)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (32)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (33)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (34)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (35)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (36)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (37)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (38)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (39)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (40)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (41)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (42)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (43)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (44)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (45)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (46)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (47)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (48)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  },
  {
    "question": "What does HTML stand for? (49)",
    "options": [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    "answer": 0
  },
  {
    "question": "Who is making the Web standards? (50)",
    "options": [
      "Mozilla",
      "Microsoft",
      "Google",
      "W3C"
    ],
    "answer": 3
  }
];

const cssQuestions = [
  {
    "question": "What does CSS stand for? (1)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (2)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (3)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (4)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (5)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (6)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (7)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (8)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (9)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (10)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (11)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (12)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (13)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (14)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (15)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (16)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (17)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (18)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (19)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (20)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (21)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (22)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (23)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (24)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (25)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (26)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (27)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (28)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (29)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (30)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (31)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (32)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (33)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (34)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (35)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (36)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (37)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (38)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (39)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (40)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (41)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (42)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (43)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (44)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (45)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (46)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (47)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (48)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  },
  {
    "question": "What does CSS stand for? (49)",
    "options": [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets"
    ],
    "answer": 1
  },
  {
    "question": "Which HTML tag is used to link external CSS? (50)",
    "options": [
      "<script>",
      "<css>",
      "<style>",
      "<link>"
    ],
    "answer": 3
  }
];

const jsQuestions = [
  {
    "question": "Which company developed JavaScript? (1)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (2)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (3)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (4)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (5)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (6)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (7)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (8)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (9)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (10)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (11)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (12)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (13)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (14)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (15)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (16)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (17)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (18)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (19)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (20)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (21)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (22)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (23)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (24)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (25)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (26)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (27)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (28)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (29)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (30)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (31)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (32)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (33)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (34)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (35)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (36)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (37)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (38)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (39)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (40)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (41)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (42)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (43)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (44)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (45)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (46)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (47)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (48)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  },
  {
    "question": "Which company developed JavaScript? (49)",
    "options": [
      "Microsoft",
      "Netscape",
      "Google",
      "Oracle"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct syntax for referring to an external script? (50)",
    "options": [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    "answer": 1
  }
];
