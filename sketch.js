
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
}

function mouseClicked() {
  square(mouseX, mouseY, 5);

  let mX = mouseX * offset;
  let mY = mouseY * offset;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board[i][j].show();
    }
  }

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
      noFill();
      textSize(32);
      square(this.x, this.y, offset);
      fill(255);
      textAlign(CENTER);
      text(this.val, this.x + offset / 2, this.y + offset * 0.75);
    }
}