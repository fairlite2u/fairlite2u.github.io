const board = document.querySelector('.board');
const reset = document.getElementById('reset');
// assign x's and o's
const player1 = "X";
const player2 = "O";
// set starting player
let player = player1;

// function to place x or 0 in box depending on who's turn it is
function addPiece(e) {
  console.log(e.target);
  e.target.innerHTML = player;
  // if/else to switch players each turn
  if (player == player1) player = player2;
  else player = player1;
}
// function to reset the board to blank when game is over
function resetBoard() {
  console.dir(board);
  // moves from space to space row by row clearing the x or o
  for (let i = 0; i < board.rows.length; i++) {
    let row = board.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      row.cells[j].innerHTML = '';
    }
  }
}

// event listeners that triggers specified function on click
board.addEventListener('click', addPiece);
reset.addEventListener('click', resetBoard);




