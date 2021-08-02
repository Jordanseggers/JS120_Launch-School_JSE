let circleMethod = {
  area () {
    return Math.PI * this.radius * this.radius;
  },
};

function Circle (radius) {
  Object.setPrototypeOf (this, circleMethod);
  this.radius = radius;
}

let a = new Circle(3);
let b = new Circle(4);

// console.log(a);
// console.log(a.__proto__);
// console.log(a.constructor());

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false