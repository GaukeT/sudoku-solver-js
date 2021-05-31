class Spot {
    x = -1;
    y = -1;
    val = 0;

    constructor(x, y, val) {
      this.x = x * offset;
      this.y = y * offset;
      this.val = val;
    }

    show() {
      square(this.x, this.y, offset);

      textSize(32);
      textAlign(CENTER);
      if (this.val !== 0) {
        text(this.val, this.x + offset * 0.5, this.y + offset * 0.75);
      }
    }

    showIndexes() {
      textSize(9);
      textAlign(CENTER);
      text('y:' +  this.y / offset + ' | x:' + this.x / offset, this.x + offset * 0.5, this.y + offset * 0.95);
    }

    clicked() {
      if (this.val === 9) this.val = 0;
      else this.val++;
    }
}
