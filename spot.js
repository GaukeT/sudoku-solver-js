class Spot {
    y = -1;
    x = -1;
    val = 0;
    offset;
    isChanged = false;
    isPossible = true;
    manuallySet = false;

    indexY = -1;
    indexX = -1;

    constructor(y, x, val, offset) {
      this.offset = offset;
      this.y = y * this.offset;
      this.x = x * this.offset;
      this.val = val;

      this.indexY = y;
      this.indexX = x;
    }

    show() {
      fill(255);
      square(this.x, this.y, this.offset);

      textSize(32);
      textAlign(CENTER);
      fill(0);

      if (this.val !== 0) {
        if (this.isChanged) {
          this.isPossible = possible(this.indexY, this.indexX, this.val);
//          print('Position y:', this.indexY, ' x:', this.indexX, ' val:', this.val, ' isOption:', this.isPossible);
        }

        if(!this.isPossible) {
          fill(250,0,0);
        } else if (this.manuallySet){
          fill(0);
        } else {
          fill(150);
        }

        text(this.val, this.x + this.offset * 0.5, this.y + this.offset * 0.75);
      } else if (this.isChanged) {
        this.isPossible = true;
      }

      this.isChanged = false;
    }

    showIndexes() {
      fill(0);
      textSize(9);
      textAlign(CENTER);
      text('y:' +  this.indexY + ' | x:' + this.indexX, this.x + this.offset * 0.5, this.y + this.offset * 0.95);
    }

    clicked(increment) {
      if (increment) {
        if (this.val === 9) this.val = 0;
        else this.val++;
      } else {
        if (this.val === 0) this.val = 9;
        else this.val--;
      }

      this.isChanged = true;
      this.manuallySet = this.val !== 0;
    }

    getVal() {
        return this.val;
    }

    setVal(newVal) {
        // TODO: validation newVal between 0 and 9;
        if (this.val !== newVal) {
            this.isChanged = true;
            this.val = newVal;
        }
    }
}
