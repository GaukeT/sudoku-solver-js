class Game {
    initLoaded = false;
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
        let nonManually = 0;
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                // undefined board
                if (!this.board[y][x]) {
                    nonManually++;
                    break;
                // initially loaded board
                } else if (this.board[y][x].getVal() !== 0) {
                    if (!this.board[y][x].manuallySet) {
                        nonManually++;
                        break;
                    }
                }
             }
             if (nonManually !== 0) break;
        }
        let removeMan = (nonManually === 0);

        // board[y-axis][x-axis]
        for (let y = 0; y < this.size; y++) {
            let row = [this.size];
            for (let x = 0; x < this.size; x++) {
                if (!this.board[y] || !this.board[y][x]
                      || removeMan || !this.board[y][x].manuallySet) {
                    row[x] = new Spot(y, x, 0, this.offset);
                } else {
                    row[x] = this.board[y][x];
                }
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

    isSolved() {
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.board[y][x].getVal() === 0) return false;
            }
        }
        return true;
    }

    isValidBoard() {
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (!this.board[y][x].isPossible) return false;
            }
        }
        return true;
    }

    clicked(y, x, increment) {
        if (this.board[y][x]) {
            this.board[y][x].clicked(increment);
        }
    }

    getVal(y, x) {
        return this.board[y][x].getVal();
    }

    setVal(y, x, newVal) {
        return this.board[y][x].setVal(newVal);
    }
}
