let boardSize;
let board;
let currentPlayer;
let scoreX = 0;
let scoreO = 0;

function startGame() {
    boardSize = parseInt(document.getElementById('board-size').value);
    board = Array(boardSize).fill().map(() => Array(boardSize).fill(''));
    currentPlayer = 'X';
    renderBoard();
}

function renderBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    gameBoard.style.gridTemplateColumns = `repeat(${boardSize}, 60px)`;
    gameBoard.style.gridTemplateRows = `repeat(${boardSize}, 60px)`;

    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', handleMove);
            gameBoard.appendChild(cell);
        }
    }
}

function handleMove(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (board[row][col] !== '') return;

    board[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWin(row, col)) {
        alert(`${currentPlayer} wins!`);
        if (currentPlayer === 'X') {
            scoreX++;
            document.getElementById('score-x').textContent = scoreX;
        } else {
            scoreO++;
            document.getElementById('score-o').textContent = scoreO;
        }
        startGame();
    } else if (board.flat().every(cell => cell !== '')) {
        alert('It\'s a tie!');
        startGame();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin(row, col) {
    row = parseInt(row);
    col = parseInt(col);
    // Check row
    if (board[row].every(cell => cell === currentPlayer)) return true;
    // Check column
    if (board.every(row => row[col] === currentPlayer)) return true;
    // Check main diagonal
    if (row === col && board.every((row, i) => row[i] === currentPlayer)) return true;
    // Check anti-diagonal
    if (row + col === boardSize - 1 && board.every((row, i) => row[boardSize - 1 - i] === currentPlayer)) return true;
    return false;
}

// Initial game start
startGame();
