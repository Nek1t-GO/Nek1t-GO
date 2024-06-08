let boardSize;
let board;
let currentPlayer;
let scoreX = 0;
let scoreO = 0;

// Функция для начала или перезапуска игры
function startGame() {
    // Получаем размер доски из элемента ввода
    boardSize = parseInt(document.getElementById('board-size').value);
    // Инициализируем доску как двумерный массив, заполненный пустыми строками
    board = Array(boardSize).fill().map(() => Array(boardSize).fill(''));
    // Устанавливаем начального игрока на 'X'
    currentPlayer = 'X';
    // Отрисовываем начальную доску
    renderBoard();
}

// Функция для отрисовки игровой доски
function renderBoard() {
    const gameBoard = document.getElementById('game-board');
    // Очищаем элемент игровой доски
    gameBoard.innerHTML = '';
    // Устанавливаем шаблон сетки для колонок и рядов на основе размера доски
    gameBoard.style.gridTemplateColumns = `repeat(${boardSize}, 60px)`;
    gameBoard.style.gridTemplateRows = `repeat(${boardSize}, 60px)`;

    // Проходим через каждую ячейку доски
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            // Создаем div элемент для каждой ячейки
            const cell = document.createElement('div');
            cell.classList.add('cell');
            // Устанавливаем data-атрибуты для ряда и колонки
            cell.dataset.row = row;
            cell.dataset.col = col;
            // Добавляем обработчик события для хода при клике на ячейку
            cell.addEventListener('click', handleMove);
            // Добавляем ячейку на игровую доску
            gameBoard.appendChild(cell);
        }
    }
}

// Функция для обработки хода
function handleMove(event) {
    // Получаем ряд и колонку из data-атрибутов ячейки
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    // Если ячейка не пуста, выходим из функции
    if (board[row][col] !== '') return;

    // Обновляем доску и ячейку с ходом текущего игрока
    board[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;

    // Проверяем, выиграл ли текущий игрок
    if (checkWin(row, col)) {
        alert(`${currentPlayer} выиграл!`);
        // Обновляем счет и отображаем его
        if (currentPlayer === 'X') {
            scoreX++;
            document.getElementById('score-x').textContent = scoreX;
        } else {
            scoreO++;
            document.getElementById('score-o').textContent = scoreO;
        }
        // Перезапускаем игру
        startGame();
    } else if (board.flat().every(cell => cell !== '')) {
        // Если все ячейки заполнены и никто не выиграл, это ничья
        alert('Ничья!');
        // Перезапускаем игру
        startGame();
    } else {
        // Меняем текущего игрока
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Функция для проверки, выиграл ли текущий игрок
function checkWin(row, col) {
    row = parseInt(row);
    col = parseInt(col);
    // Проверяем, есть ли в ряду все ячейки с символом текущего игрока
    if (board[row].every(cell => cell === currentPlayer)) return true;
    // Проверяем, есть ли в колонке все ячейки с символом текущего игрока
    if (board.every(row => row[col] === currentPlayer)) return true;
    // Проверяем, есть ли в главной диагонали все ячейки с символом текущего игрока
    if (row === col && board.every((row, i) => row[i] === currentPlayer)) return true;
    // Проверяем, есть ли в побочной диагонали все ячейки с символом текущего игрока
    if (row + col === boardSize - 1 && board.every((row, i) => row[boardSize - 1 - i] === currentPlayer)) return true;
    return false;
}

// Начало игры
startGame();
