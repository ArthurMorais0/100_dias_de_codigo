const cells = document.querySelectorAll('.cell');
const resultDisplay = document.getElementById('result');
const restartBtn = document.getElementById('restartBtn');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Função para verificar se há vencedor
function checkWinner() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Retorna o jogador vencedor ('X' ou 'O')
    }
  }
  return board.includes('') ? null : 'Empate'; // Se não houver mais espaços vazios, é empate
}

// Função de clique nas células
function handleClick(event) {
  const cellIndex = event.target.getAttribute('data-index');

  // Se a célula já estiver preenchida ou o jogo já tiver acabado, não faça nada
  if (!board[cellIndex] && gameActive) {
    board[cellIndex] = currentPlayer; // Atualiza o tabuleiro com o jogador atual ('X' ou 'O')
    event.target.textContent = currentPlayer; // Mostra o símbolo na célula clicada

    const winner = checkWinner(); // Verifica se há vencedor
    if (winner) {
      resultDisplay.textContent = winner === 'Empate' ? 'Empate!' : `Jogador ${winner} venceu!`;
      gameActive = false; // Finaliza o jogo se houver vencedor ou empate
    } else {
      // Alterna o jogador (de 'X' para 'O' e vice-versa)
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Função para reiniciar o jogo
function restartGame() {
  board = ['', '', '', '', '', '', '', '', '']; // Reseta o tabuleiro
  currentPlayer = 'X'; // Redefine o jogador para 'X'
  gameActive = true; // Reativa o jogo
  resultDisplay.textContent = ''; // Limpa a mensagem de resultado
  cells.forEach(cell => {
    cell.textContent = ''; // Limpa o conteúdo das células
  });
}

// Adiciona evento de clique para cada célula
cells.forEach(cell => cell.addEventListener('click', handleClick));
// Adiciona evento de clique para o botão de reiniciar
restartBtn.addEventListener('click', restartGame);
