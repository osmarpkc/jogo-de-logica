
let currentQuestionIndex = 0;
let answeredQuestions = 0;
let correctAnswers = 0;
const questions = [
  {
    question: "O que é um algoritmo?",
    example: "Ter um algoritmo permite que o computador execute tarefas de forma organizada e eficiente, resolvendo problemas para o usuário.",
    options: [
      "Uma sequência de passos para resolver um problema",
      "Um tipo de computador",
      "Um erro no código",
      "Uma linguagem de programação"
    ],
    answer: 0,
    explanation: "Um algoritmo é uma sequência de instruções ou passos para resolver um problema ou realizar uma tarefa.",
    code: `# Exemplo de algoritmo simples
passos = ["Pegar pão", "Passar manteiga", "Comer"]
for passo in passos:
    print(passo)`
  },
  {
    question: "O que é uma variável?",
    example: "Usar variáveis permite que o programa lembre informações do usuário, como nome, pontuação ou preferências.",
    options: [
      "Um espaço para armazenar valores",
      "Um comando de repetição",
      "Um erro no código",
      "Uma função"
    ],
    answer: 0,
    explanation: "Variáveis são usadas para guardar valores temporários que podem ser usados e alterados durante o programa.",
    code: `# Exemplo de variável
nome = "Maria"
pontuacao = 10`
  },
  {
    question: "Qual destas é uma estrutura de repetição?",
    example: "Estruturas de repetição permitem que o programa execute uma ação várias vezes automaticamente, poupando tempo do usuário.",
    options: [
      "if",
      "for",
      "print",
      "int"
    ],
    answer: 1,
    explanation: "A estrutura 'for' é usada para repetir comandos várias vezes, enquanto 'if' é para decisões.",
    code: `# Exemplo de for
for i in range(5):
    print(i)`
  },
  {
    question: "Para que serve o comando 'if'?",
    example: "O comando 'if' faz o programa tomar decisões, criando respostas diferentes para situações diferentes do usuário.",
    options: [
      "Executar decisões",
      "Repetir comandos",
      "Declarar variáveis",
      "Comentar código"
    ],
    answer: 0,
    explanation: "O comando 'if' permite executar diferentes ações dependendo de uma condição.",
    code: `# Exemplo de if
idade = 18
if idade >= 18:
    print("Maior de idade")`
  },
  {
    question: "O que significa 'debugar' um programa?",
    example: "Ao debugar, o desenvolvedor garante que o programa funcione corretamente para o usuário, sem erros inesperados.",
    options: [
      "Adicionar novos recursos",
      "Corrigir erros",
      "Traduzir para outra linguagem",
      "Executar mais rápido"
    ],
    answer: 1,
    explanation: "Debugar é o processo de encontrar e corrigir erros no código."
  },
  {
    question: "O que é um 'loop infinito'?",
    example: "Um loop infinito pode travar o programa, impedindo o usuário de continuar usando normalmente.",
    options: [
      "Um laço que nunca termina",
      "Um erro de sintaxe",
      "Uma variável global",
      "Um tipo de função"
    ],
    answer: 0,
    explanation: "Um loop infinito é uma repetição que nunca termina, geralmente por erro na condição de parada."
  },
  {
    question: "Qual destas é uma linguagem de programação?",
    example: "Linguagens de programação permitem criar programas e soluções digitais para facilitar a vida do usuário.",
    options: [
      "Python",
      "HTML",
      "CSS",
      "Photoshop"
    ],
    answer: 0,
    explanation: "Python é uma linguagem de programação. HTML e CSS são linguagens de marcação e estilo."
  },
  {
    question: "O que é uma função?",
    example: "Funções deixam o programa mais organizado e facilitam a reutilização de comandos, tornando o software mais confiável para o usuário.",
    options: [
      "Um bloco de código reutilizável",
      "Um erro no código",
      "Uma variável",
      "Um laço de repetição"
    ],
    answer: 0,
    explanation: "Funções agrupam comandos para serem reutilizados, facilitando a organização do código."
  },
  {
    question: "O que é um array (lista)?",
    example: "Listas permitem que o programa armazene vários dados do usuário, como nomes, pontuações ou itens.",
    options: [
      "Uma coleção de valores",
      "Um comando de decisão",
      "Uma função",
      "Um erro"
    ],
    answer: 0,
    explanation: "Arrays (ou listas) armazenam vários valores em uma única variável."
  },
  {
    question: "Qual é o resultado de 2 + 2 * 2?",
    example: "A ordem das operações garante que o programa calcule corretamente, evitando resultados errados para o usuário.",
    options: [
      "6",
      "8",
      "4",
      "12"
    ],
    answer: 0,
    explanation: "A multiplicação tem prioridade: 2 + (2*2) = 2 + 4 = 6."
  },
  {
    question: "Como declarar um comentário em Python?",
    example: "Comentários ajudam outros desenvolvedores a entender o código, facilitando a manutenção do programa para o usuário.",
    options: [
      "# comentário",
      " comentário",
      "<!-- comentário -->",
      " comentário "
    ],
    answer: 0,
    explanation: "Em Python, comentários começam com #."
  },
  {
    question: "O que faz o comando 'print' em Python?",
    example: "O comando print permite que o programa mostre informações e resultados para o usuário.",
    options: [
      "Exibe informações na tela",
      "Cria uma variável",
      "Repete comandos",
      "Comenta o código"
    ],
    answer: 0,
    explanation: "O comando print serve para mostrar informações ao usuário."
  },
  {
    question: "Como criar uma função em Python?",
    example: "Criar funções permite que o programa execute tarefas específicas sempre que necessário, melhorando a experiência do usuário.",
    options: [
      "def minha_funcao():",
      "function minha_funcao()",
      "fun minha_funcao()",
      "create minha_funcao()"
    ],
    answer: 0,
    explanation: "Em Python, funções são criadas com a palavra-chave 'def'."
  },
  {
    question: "O que é um operador lógico?",
    example: "Operadores lógicos permitem que o programa tome decisões mais inteligentes, melhorando a interação com o usuário.",
    options: [
      "Comando que compara valores",
      "Um tipo de variável",
      "Um erro de sintaxe",
      "Uma função"
    ],
    answer: 0,
    explanation: "Operadores lógicos (and, or, not) permitem combinar condições."
  },
  {
    question: "Como acessar o terceiro elemento de uma lista em Python?",
    example: "Acessar elementos de listas permite que o programa utilize dados específicos do usuário de forma eficiente.",
    options: [
      "lista[2]",
      "lista(3)",
      "lista[3]",
      "lista{2}"
    ],
    answer: 0,
    explanation: "Em Python, índices começam em 0, então o terceiro elemento é lista[2]."
  },
  {
    question: "O que é um laço 'while'?",
    example: "Laços while permitem que o programa repita ações até que o usuário atinja um objetivo ou condição.",
    options: [
      "Repetição baseada em condição",
      "Decisão",
      "Função",
      "Comentário"
    ],
    answer: 0,
    explanation: "O laço while repete comandos enquanto a condição for verdadeira."
  },
  {
    question: "Como adicionar um item ao final de uma lista em Python?",
    example: "Adicionar itens a listas permite que o programa registre novas informações do usuário durante o uso.",
    options: [
      "lista.append(5)",
      "lista.add(5)",
      "lista.push(5)",
      "lista.insert(5)"
    ],
    answer: 0,
    explanation: "O método append adiciona um item ao final da lista em Python."
  },
  {
    question: "O que é um dicionário em Python?",
    example: "Dicionários permitem que o programa relacione informações do usuário, como nome e idade, facilitando buscas rápidas.",
    options: [
      "Estrutura que armazena pares chave-valor",
      "Uma lista de números",
      "Um tipo de função",
      "Um erro de sintaxe"
    ],
    answer: 0,
    explanation: "Dicionários armazenam valores associados a chaves únicas."
  },
  {
    question: "Como verificar se um valor está em uma lista?",
    example: "Verificar se um valor está em uma lista permite que o programa personalize respostas para o usuário.",
    options: [
      "if 3 in lista:",
      "if lista.has(3):",
      "if lista.contains(3):",
      "if 3 on lista:"
    ],
    answer: 0,
    explanation: "O operador 'in' verifica se um valor está presente em uma lista."
  },
  {
    question: "O que é recursão?",
    example: "Recursão permite que o programa resolva problemas complexos de forma mais simples e eficiente para o usuário.",
    options: [
      "Função que chama a si mesma",
      "Repetição com for",
      "Comentário",
      "Variável global"
    ],
    answer: 0,
    explanation: "Recursão é quando uma função executa a si mesma para resolver um problema."
  },
  {
    question: "Como interromper um laço antes do fim em Python?",
    example: "Interromper laços permite que o programa reaja rapidamente a ações do usuário, tornando-o mais dinâmico.",
    options: [
      "break",
      "stop",
      "exit",
      "end"
    ],
    answer: 0,
    explanation: "O comando 'break' encerra o laço imediatamente."
  },
  {
    question: "Qual é o resultado de: print(2 ** 3)?",
    example: "O operador ** em Python é usado para potência.",
    options: [
      "8",
      "6",
      "9",
      "5"
    ],
    answer: 0,
    explanation: "2 elevado à 3ª potência é 8."
  },
  {
    question: "Como acessar o terceiro elemento da lista x = [10, 20, 30, 40]?",
    example: "O índice em Python começa em 0.",
    options: [
      "x[2]",
      "x[3]",
      "x(3)",
      "x[1]"
    ],
    answer: 0,
    explanation: "x[2] retorna o terceiro elemento, que é 30."
  },
  {
    question: "Qual destas estruturas é usada para tratar exceções em Python?",
    example: "Exceções são erros que podem ser previstos e tratados.",
    options: [
      "try/except",
      "if/else",
      "for/while",
      "def/class"
    ],
    answer: 0,
    explanation: "try/except é usado para capturar e tratar exceções."
  },
  {
    question: "Qual é o tipo retornado por: type(3.14)?",
    example: "A função type retorna o tipo do objeto.",
    options: [
      "float",
      "int",
      "str",
      "bool"
    ],
    answer: 0,
    explanation: "3.14 é um número de ponto flutuante (float)."
  },
  {
    question: "O que faz a expressão: 'a' in ['a', 'b', 'c']?",
    example: "O operador 'in' verifica se um elemento está em uma sequência.",
    options: [
      "Retorna True",
      "Retorna False",
      "Retorna 'a'",
      "Gera erro"
    ],
    answer: 0,
    explanation: "'a' está presente na lista, então retorna True."
  },
  {
    question: "Qual destas opções representa um dicionário em Python?",
    example: "Dicionários usam pares chave:valor.",
    options: [
      "{'nome': 'Ana', 'idade': 20}",
      "['nome', 'Ana', 'idade', 20]",
      "('nome', 'Ana')",
      "{'nome'; 'Ana'}"
    ],
    answer: 0,
    explanation: "Dicionários usam chaves e valores entre chaves {}."
  },
  {
    question: "Qual é a saída de: print(len('Python'))?",
    example: "A função len retorna o tamanho de uma sequência.",
    options: [
      "6",
      "5",
      "7",
      "None"
    ],
    answer: 0,
    explanation: "A palavra 'Python' tem 6 letras."
  },
  {
    question: "Qual comando é usado para importar um módulo em Python?",
    example: "Módulos permitem reutilizar código.",
    options: [
      "import",
      "include",
      "require",
      "using"
    ],
    answer: 0,
    explanation: "O comando correto é import."
  },
  {
    question: "Qual destas opções avalia para True?",
    example: "O operador lógico 'and' retorna True se ambos forem True.",
    options: [
      "(5 > 3) and (2 < 4)",
      "(5 < 3) and (2 < 4)",
      "(5 > 3) and (2 > 4)",
      "(5 < 3) and (2 > 4)"
    ],
    answer: 0,
    explanation: "Ambas as condições são verdadeiras apenas na primeira opção."
  },
  {
    question: "Como declarar uma função em Python?",
    example: "Funções são definidas usando a palavra-chave def.",
    options: [
      "def minha_funcao():",
      "function minha_funcao()",
      "fun minha_funcao()",
      "define minha_funcao()"
    ],
    answer: 0,
    explanation: "A declaração correta é def minha_funcao():"
  }
 ];

let finished = false;
let questionOrder = []; 

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startGame() {
  finished = false;
  questionOrder = Array.from({length: questions.length}, (_, i) => i);
  shuffle(questionOrder);
  currentQuestionIndex = 0;
  answeredQuestions = 0;
  correctAnswers = 0;
  window.answerStreak = 0;
  clearInterval(window.questionTimer);
  document.getElementById('endgame').classList.add('hidden');
  document.getElementById('feedback-container').classList.add('hidden');
  document.getElementById('quiz-card').classList.remove('hidden');
  updateProgress();
  showQuestion();
}

function createBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  
  let direction = 1;
  let pos = 0;
  for (let row = 0; row < 4; row++) {
    let cols = [];
    for (let col = 0; col < 10; col++) {
      const i = direction === 1 ? col : 9 - col;
      const square = document.createElement('div');
      square.className = 'square';
      if (pos === 0) square.classList.add('start');
      if (pos === boardSize - 1) square.classList.add('finish');
      if (answeredSquares[pos]) square.classList.add('answered');
      square.id = 'square-' + pos;
      square.textContent = pos === 0 ? 'Início' : (pos === boardSize - 1 ? 'Fim' : pos + 1);
      cols[i] = square;
      pos++;
    }
    cols.forEach(sq => board.appendChild(sq));
    direction *= -1;
  }
  updatePawn();
}

function updatePawn() {
  document.querySelectorAll('.pawn').forEach(p => p.remove());
  if (playerPos < boardSize) {
    const square = document.getElementById('square-' + playerPos);
    const pawn = document.createElement('div');
    pawn.className = 'pawn';
    pawn.innerHTML = `
      <svg width="38" height="38" viewBox="0 0 38 38">
        <ellipse cx="19" cy="19" rx="16" ry="16" fill="#6ab04c" stroke="#267c2b" stroke-width="3"/>
        <ellipse cx="19" cy="13" rx="10" ry="8" fill="#b7e7a0"/>
        <ellipse cx="19" cy="11" rx="5" ry="4" fill="#267c2b"/>
        <circle cx="16" cy="10" r="1.2" fill="#fff"/>
        <circle cx="22" cy="10" r="1.2" fill="#fff"/>
        <ellipse cx="19" cy="25" rx="7" ry="3" fill="#267c2b"/>
        <rect x="17.5" y="27" width="3" height="6" rx="1.5" fill="#267c2b"/>
        <ellipse cx="19" cy="33" rx="2" ry="1" fill="#b7e7a0"/>
      </svg>
    `;
    square.appendChild(pawn);
  }
}

function rollDice() {
  if (finished) return;
  document.getElementById('feedback-container').classList.add('hidden');
  
  if (currentQuestionIndex < questions.length) {
    playerPos = currentQuestionIndex;
    updatePawn();
    showQuestion();
  }
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endGame();
    return;
  }
  const qIndex = questionOrder[currentQuestionIndex];
  const q = questions[qIndex];
  document.getElementById('question-number').textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('question-example').textContent = q.example;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  document.getElementById('feedback-container').classList.add('hidden');

  
  const optionObjs = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.answer, origIdx: idx }));
  for (let i = optionObjs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionObjs[i], optionObjs[j]] = [optionObjs[j], optionObjs[i]];
  }

  
  optionObjs.forEach((optObj, idx) => {
    const btn = document.createElement('button');
    btn.textContent = optObj.text;
    btn.onclick = () => {
      Array.from(document.querySelectorAll('#answers button')).forEach(b => b.disabled = true);
      
      checkAnswer(optObj.isCorrect, q, idx);
    };
    btn.tabIndex = 0;
    answersDiv.appendChild(btn);
  });

  
  const firstBtn = answersDiv.querySelector('button');
  if (firstBtn) firstBtn.focus();
  updateProgress();
  addAriaToAnswerButtons();
  startQuestionTimer();
  updateLiveScore();
}

function showFeedback(correct, q, selectedIdx) {
  answeredQuestions = Math.max(answeredQuestions, currentQuestionIndex + 1);
  updateProgress();
  const feedbackDiv = document.getElementById("feedback-container");
  feedbackDiv.classList.remove("hidden");
  feedbackDiv.innerHTML = "";

  
  const title = document.createElement("div");
  title.className = "feedback-title";
  title.innerText = correct ? "Correto!" : "Incorreto";
  feedbackDiv.appendChild(title);

  
  const explanation = document.createElement("div");
  explanation.className = "feedback-explanation";
  explanation.innerText = q.explanation;
  feedbackDiv.appendChild(explanation);

  
  if (q.code) {
    const codeBlock = document.createElement("pre");
    codeBlock.className = "python-code";
    codeBlock.innerText = q.code;
    feedbackDiv.appendChild(codeBlock);
  }

  
  const answerBtns = document.querySelectorAll("#answers button");
  
  let correctBtnIdx = null;
  const qIndex = questionOrder[currentQuestionIndex];
  const qObj = questions[qIndex];
  const optionObjs = Array.from(document.querySelectorAll('#answers button')).map((btn, idx) => btn.textContent.trim());
  
  for (let i = 0; i < optionObjs.length; i++) {
    if (optionObjs[i] === qObj.options[qObj.answer]) {
      correctBtnIdx = i;
      break;
    }
  }
  answerBtns.forEach((btn, idx) => {
    btn.classList.remove("correct-answer", "wrong-answer");
    btn.disabled = true;
    btn.setAttribute('aria-disabled', 'true');
    if (correct) {
      if (idx === selectedIdx) btn.classList.add("correct-answer");
    } else {
      if (idx === correctBtnIdx) btn.classList.add("correct-answer");
      if (idx === selectedIdx) btn.classList.add("wrong-answer");
    }
  });

  
  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Próxima";
  nextBtn.onclick = nextQuestion;
  nextBtn.setAttribute('aria-label', 'Próxima pergunta');
  feedbackDiv.appendChild(nextBtn);

  
  clearInterval(window.questionTimer);

  
  showAchievements();

  
  updateLiveScore();
}

function endGame() {
    finished = true;
    document.getElementById('quiz-card').classList.add('hidden');
    document.getElementById('feedback-container').classList.add('hidden');
    document.getElementById('endgame').classList.remove('hidden');
    
    const percent = Math.round((correctAnswers / questions.length) * 100);
    document.getElementById('final-message').innerHTML =
      `<div style='font-size:1.3rem; font-weight:bold; color:#267c2b;'>Você concluiu o questionário!</div>`+
      `<div style='margin:14px 0 10px 0;'>Acertos: <b>${correctAnswers}</b> de <b>${questions.length}</b> (${percent}%)</div>`+
      `<div id='achievement-container' style='margin-bottom:10px;'></div>`+

    updateProgress();
    showAchievements();
    showShareButton();
    

} 

function restartGame() {
  window.location.reload();
}

function updateProgress() {
  const percent = Math.round((answeredQuestions / questions.length) * 100);
  document.getElementById('progress-bar').style.width = percent + '%';
  document.getElementById('progress-text').textContent = `${answeredQuestions}/${questions.length}`;
}

function checkAnswer(isCorrect, q, selectedIdx) {
  if (finished) return;
  answeredQuestions = Math.max(answeredQuestions, currentQuestionIndex + 1);
  if (isCorrect) {
    correctAnswers++;
    window.answerStreak = (window.answerStreak || 0) + 1;
  } else {
    window.answerStreak = 0;
  }
  showFeedback(isCorrect, q, selectedIdx);
}


function nextQuestion() {
  if (finished) return;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}


// Adds ARIA attributes to answer buttons for accessibility
function addAriaToAnswerButtons() {
  const answerButtons = document.querySelectorAll('#answers button');
  answerButtons.forEach((btn, idx) => {
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('aria-label', `Alternativa ${idx + 1}: ${btn.textContent}`);
    btn.addEventListener('focus', () => btn.setAttribute('aria-pressed', 'true'));
    btn.addEventListener('blur', () => btn.setAttribute('aria-pressed', 'false'));
  });
}

// Placeholder for achievements logic
function showAchievements() {
  // Optionally update an achievements container
  const container = document.getElementById('achievement-container');
  if (container) {
    // Example: show a simple achievement if all correct
    if (typeof correctAnswers !== 'undefined' && typeof questions !== 'undefined' && correctAnswers === questions.length) {
      container.innerHTML = '<span style="color:gold;font-weight:bold;">Parabéns! Você acertou todas as perguntas!</span>';
    } else {
      container.innerHTML = '';
    }
  }
}

// Updates a live region with the current score for accessibility
function updateLiveScore() {
  let liveRegion = document.getElementById('live-score');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'live-score';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-9999px';
    document.body.appendChild(liveRegion);
  }
  liveRegion.textContent = `Pontuação: ${correctAnswers} de ${questions.length}`;
}

// Starts a timer for the current question (placeholder, 30s default)
function startQuestionTimer() {
  if (window.questionTimer) clearInterval(window.questionTimer);
  let timeLeft = 30; // seconds
  const timerDiv = document.getElementById('timer');
  if (timerDiv) timerDiv.textContent = `Tempo: ${timeLeft}s`;
  window.questionTimer = setInterval(() => {
    timeLeft--;
    if (timerDiv) timerDiv.textContent = `Tempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(window.questionTimer);
      // Optionally auto-move to next question or show feedback
    }
  }, 1000);
}

window.onload = startGame;
