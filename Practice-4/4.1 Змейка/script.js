const boardSize = 20; // Размер клетки на доске
const boardElement = document.getElementById('game-board');
const gameSpeed = 200; // Скорость игры в миллисекундах

let snake = [{x: 10, y: 10}]; // Начальная позиция змейки
let direction = {x: 0, y: 0}; // Направление движения
let food = {x: 5, y: 5}; // Начальная позиция еды
let gameInterval;

// Функция инициализации игры
function initGame() {
    document.addEventListener('keydown', changeDirection);
    placeFood();
    gameInterval = setInterval(gameLoop, gameSpeed);
}

// Основной игровой цикл
function gameLoop() {
    moveSnake();
    if (isGameOver()) {
        clearInterval(gameInterval);
        alert('Game Over!');
    } else {
        updateBoard();
    }
}

// Функция изменения направления движения змейки
function changeDirection(event) {
    const key = event.key;
    switch (key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = {x: 0, y: -1};
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = {x: 0, y: 1};
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = {x: -1, y: 0};
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = {x: 1, y: 0};
            break;
    }
}

// Функция перемещения змейки
function moveSnake() {
    const newHead = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
    snake.unshift(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
        placeFood();
    } else {
        snake.pop();
    }
}

// Функция проверки окончания игры
function isGameOver() {
    const head = snake[0];
    // Проверка на столкновение со стенками
    if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
        return true;
    }
    // Проверка на столкновение с собой
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

// Функция обновления игрового поля
function updateBoard() {
    boardElement.innerHTML = '';
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.left = `${segment.x * 20}px`;
        snakeElement.style.top = `${segment.y * 20}px`;
        snakeElement.classList.add('snake');
        boardElement.appendChild(snakeElement);
    });

    const foodElement = document.createElement('div');
    foodElement.style.left = `${food.x * 20}px`;
    foodElement.style.top = `${food.y * 20}px`;
    foodElement.classList.add('food');
    boardElement.appendChild(foodElement);
}

// Функция размещения еды на поле
function placeFood() {
    food = {
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize)
    };

    // Убедимся, что еда не появляется на змейке
    while (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
        food = {
            x: Math.floor(Math.random() * boardSize),
            y: Math.floor(Math.random() * boardSize)
        };
    }
}

// Запуск игры
initGame();
