class Rectangle {
  constructor (length, width) {
    this.length = length;
    this.width = width;
  }
  
  getArea() {
    return this.length * this.width;
  }
}

let orangeRec = new Rectangle(2, 4);
Rectangle.prototype.check = 'Hey';
console.log(Rectangle.prototype);
console.log(Rectangle);
console.log(orangeRec);