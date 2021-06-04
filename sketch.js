const DEBUG = false;

let resetButton;
let solveButton;

let boardWidth = 450;
let game;

function setup() {
  var cnv = createCanvas(boardWidth, boardWidth);
  cnv.parent('cnv-div');

  setupResetButton();
  setupSolveButton();

  game = new Game(boardWidth);
}

function draw() {
  game.draw();
}

function mouseClicked(e) {
  // check if clicked in grid
  if (game && mouseX < boardWidth && mouseY < boardWidth) {
    let mY = floor(mouseY / game.offset);
    let mX = floor(mouseX / game.offset);

    if (mY >= 0 && mX >= 0) {
      game.clicked(mY, mX, !e.ctrlKey);
    }
  }
  // prevent default
  return false;
}

function styleButton(button) {
  button.style('border', 'none');
  button.style('padding', '6px 10px');
  button.style('border-radius', '6px');
  button.style('transition-duration', '0.4s');
}

function setupResetButton() {
  resetButton = createButton('Reset');
  resetButton.position(10, 550);
  resetButton.mousePressed(resetBoard);
  styleButton(resetButton);
}

function resetBoard() {
  game.initBoard();
}

function setupSolveButton() {
  solveButton = createButton('Solve');
  solveButton.position(80, 550);
  solveButton.mousePressed(solveSudoku);
  styleButton(solveButton);
}

async function solveSudoku() {
  if (game.isValidBoard()) {
    solve();
  } else {
    alert('Invalid input. Sudoku is not solvable!');
  }
}