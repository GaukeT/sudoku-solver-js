class Game {
    size = 9;
    board;
    width;
    offset;

    constructor(boardWidth) {
        // board[y-axis]
        this.board = [this.size];

        this.width = boardWidth;
        this.offset = this.width / this.size;
        this.initBoard();
    }

    initBoard() {
        // board[y-axis][x-axis]
        for (let y = 0; y < this.size; y++) {
            let row = [this.size];
            for (let x = 0; x < this.size; x++) {
                row[x] = new Spot(y, x, 0, this.offset);
                // if (DEBUG) row[x] = new Spot(y, x, random(options));
             }
            this.board[y] = row;
        }
    }

    draw() {
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
              this.board[y][x].show();
              if (DEBUG) {
                this.board[y][x].showIndexes();
              }
            }
          }
          this.drawBoldLines();
    }

    drawBoldLines() {
      push();
      strokeWeight(2.5);
      line(0, 3 * this.offset, this.width, 3 * this.offset);
      line(0, 6 * this.offset, this.width, 6 * this.offset);
      line(3 * this.offset, 0, 3 * this.offset, this.width);
      line(6 * this.offset, 0, 6 * this.offset, this.width);
      pop();
    }

    clicked(y, x, increment) {
        if (this.board[y][x]) {
            this.board[y][x].clicked(increment);
        }
    }
}
