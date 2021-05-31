function solve() {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (board[y][x].val === 0) {
        // try every possibility for this position
        for (let n = 1; n < 10; n++) {
          if (possible(y, x, n)) {
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

//    print('try to set value: ', n);
//    print('section y:' + y  + ' | x:' + x  + ' - value: ' + board[y][x].val);
//    print('calc... y0:'+ y0 + ' | x0:'+ x0 + ' - value: ' + board[y0][x0].val);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
//        print('checking values: y:' + (y0+i) + ' | x:' + (x0+j));
        if (board[y0+i][x0+j].val === n) return false;
      }
    }
    return true;
}