let yCol = 0;
let xCol = 0;

function solve() {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x].val === 0) {
        // try every possibility for this position
        for (let n = 1; n < 10; n++) {
          if (possible(y, x, n))  {
            board[y][x].val = n;
            solve();
            board[y][x].val = 0;
          }
        }
        // if no options available you're on a dead end.
        return;
      }
    }
  }

  // solved state
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
  let x0 = floor(x / 3) * 3;
  let y0 = floor(y / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[y0+i][x0+j].val === n) return false;
    }
  }
  return true;
}