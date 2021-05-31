const DEBUG = true;
const size = 9;

let board = [size];
let boardWidth = 450;
let offset = boardWidth / size;

let resetButton;
let solveButton;

function setup() {
  createCanvas(boardWidth, boardWidth);

  setupGrid();
  setupResetButton();
  setupSolveButton();
}

function setupGrid() {
  for (let i = 0; i < size; i++) {
    let row = [size];
    for (let j = 0; j < size; j++) {
      row[j] = new Spot(i, j, 0);
    }
    board[i] = row;
  }
}

function draw() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board[i][j].show();
      if (DEBUG) board[i][j].showIndexes();
    }
  }
  drawBoldLines();
}

function drawBoldLines() {
  push();
  strokeWeight(2.5);
  line(0, 3 * offset, boardWidth, 3 * offset);
  line(0, 6 * offset, boardWidth, 6 * offset);
  line(3 * offset, 0, 3 * offset, boardWidth);
  line(6 * offset, 0, 6 * offset, boardWidth);
  pop();
}

function mouseClicked() {
  // check if clicked in grid
  if (mouseX < boardWidth && mouseY < boardWidth) {
    let mX = floor(mouseX / offset);
    let mY = floor(mouseY / offset);
//    print('clicked at: ', mX, '-', mY, ' | ', mouseX, '-', mouseY);
    board[mX][mY].clicked();
  }
  // prevent default
  return false;
}

function setupResetButton() {
  resetButton = createButton('Reset');
  resetButton.position(10, 470);
  resetButton.mousePressed(setupGrid);

  resetButton.style('border', 'none');
  resetButton.style('padding', '6px 10px');
  resetButton.style('border-radius', '6px');
  resetButton.style('transition-duration', '0.4s');
}

function setupSolveButton() {
  resetButton = createButton('Solve');
  resetButton.position(70, 470);
  resetButton.mousePressed(solve);

  resetButton.style('border', 'none');
  resetButton.style('padding', '6px 10px');
  resetButton.style('border-radius', '6px');
  resetButton.style('transition-duration', '0.4s');
}


