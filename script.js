const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let isGameActive = true;

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
    return cell.classList.contains.('X') || cell.classList.contains('0');
}

function checkWin() {
    for (const combination of winningCombinations) {
        const[a, b, c] = combination;

        if 
    }
}
