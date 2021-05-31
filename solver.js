function solve() {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (board[x][y].val === 0) {
        // try every possibility for this position
        for (let n = 1; n < 10; n++) {
          if (possible(x, y, n)) {
            board[x][y].val = n;
            solve();
            board[x][y].val = 0;
          }
        }
        // if no options available you're on a dead end.
        return;
      }
    }
  }
}

function possible(y, x, n) {
    // find in same row
    for (let i = 0; i < 9; i++) {
      if (board[y][i].val === n) return false;
    }

    // find in same column
    for (let i = 0; i < 9; i++) {
      if (board[i][x].val === n) return false;
    }

    // find in same section
    let x0 = (x / 3) * 3;
    let y0 = (y / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[x0+j][y0+i].val === n) return false;
      }
    }
    return true;
}