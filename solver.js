let yCol = 0;
let xCol = 0;
let solvedState = false;

async function solve() {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (game.getVal(y, x) === 0) {
        // try every possibility for this position
        for (let n = 1; n < 10; n++) {
          if (possible(y, x, n))  {
            game.setVal(y, x, n);
            solve();
            if (!solvedState) game.setVal(y, x, 0);
          }
        }
        // if no options available you're on a dead end.
        return;
      }
    }
  }

  // solved state
  solvedState = true;
  return;
}

function possible(y, x, n) {
  // find in same row
  for (let xi = 0; xi < 9; xi++) {
    if (xi !== x && game.getVal(y, xi) === n) return false;
  }

  // find in same column
  for (let yi = 0; yi < 9; yi++) {
    if (yi !== y && game.getVal(yi, x) === n) return false;
  }

  // find in same section
  let x0 = floor(x / 3) * 3;
  let y0 = floor(y / 3) * 3;

  for (let yi = 0; yi < 3; yi++) {
    for (let xj = 0; xj < 3; xj++) {
      let calcY = y0+yi;
      let calcX = x0+xj;

      if (calcY !== y && calcX !== x && game.getVal(calcY, calcX) === n) return false;
    }
  }
  return true;
}