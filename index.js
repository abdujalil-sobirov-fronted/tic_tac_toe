document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.ditty-box');
  let currentPlayer = 'X';

  boxes.forEach(box => {
    box.addEventListener('click', function () {
      if (box.innerText === '') {
        box.innerText = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';

        if (checkWinner()) {
          alert(`Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
          resetGame();
        } else if (isDraw()) {
          alert("It's a draw! No one wins.");
          resetGame();
        }
      }
    });
  });

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
        return true;
      }
    }

    return false;
  }

  function isDraw() {
    return Array.from(boxes).every(box => box.innerText !== '');
  }

  function resetGame() {
    boxes.forEach(box => {
      box.innerText = '';
    });
    currentPlayer = 'X';
  }
});