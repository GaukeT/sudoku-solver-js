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

function setupResetButton() {
  resetButton = createButton('Reset');
  resetButton.position(10, 540);
  resetButton.mousePressed(resetBoard);

  resetButton.style('border', 'none');
  resetButton.style('padding', '6px 10px');
  resetButton.style('border-radius', '6px');
  resetButton.style('transition-duration', '0.4s');
}

function resetBoard() {
    game.initBoard();
}

function setupSolveButton() {
  resetButton = createButton('Solve');
  resetButton.position(80, 540);
  resetButton.mousePressed(solveSudoku);

  resetButton.style('border', 'none');
  resetButton.style('padding', '6px 10px');
  resetButton.style('border-radius', '6px');
  resetButton.style('transition-duration', '0.4s');
}

function solveSudoku() {
    game.solve();
}