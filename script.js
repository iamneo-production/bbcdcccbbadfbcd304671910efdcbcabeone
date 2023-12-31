const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let isGameActive = true;

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', restartGame);

function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = [...cells].indexOf(cell);

    if (isCellOccupied(cell) || !isGameActive) return;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    checkWin();
    checkDraw();

    currentPlayer = currentPlayer === 'X' ? '0' : 'X';
    message.textContent = `Player $(currentPlayer)'s Turn`;
}

function isCellOccupied(cell) {
    return cell.classList.contains('X') || cell.classList.contains('0');
}

function checkWin() {
    for (const combination of winningCombinations) {
        const[a, b, c] = combination;

        if (
            cells[a].classList.contain(currentPlayer) && cells[b].classList.contains(currentPlayer) && cells[c].classList.contains(currentPlayer)
        ) {
            message.textContent = `Player ${currentPlayer} wins!`;
            isGameActive = false;
        }
    }
}

function checkDraw() {
    if ([...cells].every((cell) => cell.classList.contains('X') || cell.classList.contains('0'))) {
        message.textContent = 'It\'s a draw!';
        isGameActive = false;
    }
}

function restartGame() {
    cells.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('X', '0');
    });
    currentPlayer = 'X';
    message.textContent = 'Player X\'s Turn';
    isGameActive = true;
}