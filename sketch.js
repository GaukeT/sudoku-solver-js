let size = 9;
let board = [size];

let boardWidth = 450;
let offset = boardWidth / size;

function setup() {

  createCanvas(boardWidth, boardWidth);

  setupGrid();
}

function setupGrid() {
  for (let i = 0; i < size; i++) {
    board[i] = [size];
    for (let j = 0; j < size; j++) {
      board[i][j] = new Cell(i, j, 0);
    }
  }
}

function draw() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board[i][j].show();
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
  let mX = floor(mouseX / offset);
  let mY = floor(mouseY / offset);
//  print('clicked at: ', mX, '-', mY, ' | ', mouseX, '-', mouseY);
  board[mX][mY].clicked();
  // prevent default
  return false;
}

class Cell{
    x = -1;
    y = -1;
    val = 0;

    constructor(x, y, val) {
      this.x = x * offset;
      this.y = y * offset;
      this.val = val;
    }

    show() {
//      noFill();
      textSize(32);
      square(this.x, this.y, offset);

      textAlign(CENTER);
      if (this.val !== 0) {
        text(this.val, this.x + offset / 2, this.y + offset * 0.75);
      }
    }

    clicked() {
      if (this.val === 9) this.val = 0;
      else this.val++;
    }
}