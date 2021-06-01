let yCol = 0;
let xCol = 0;

function solve() {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (game.board[y][x].val === 0) {
        // try every possibility for this position
        for (let n = 1; n < 10; n++) {
          if (possible(y, x, n))  {
            game.board[y][x].val = n;
            solve();
            game.board[y][x].val = 0;
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
  for (let xi = 0; xi < 9; xi++) {
    if (xi !== x && game.board[y][xi].val === n) return false;
  }

  // find in same column
  for (let yi = 0; yi < 9; yi++) {
    if (yi !== y && game.board[yi][x].val === n) return false;
  }

  // find in same section
  let x0 = floor(x / 3) * 3;
  let y0 = floor(y / 3) * 3;

  for (let yi = 0; yi < 3; yi++) {
    for (let xj = 0; xj < 3; xj++) {
      let calcY = y0+yi;
      let calcX = x0+xj;

      if (calcY !== y && calcX !== x && game.board[calcY][calcX].val === n) return false;
    }
  }
  return true;
}