class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  getWheels() {
    return this.wheelCount;
  }
  
  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
    this.wheelCount = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model);
    this.wheelCount = 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
    this.wheelCount = 6;
  }
}

let c = new Car("ford", "focus");
let m = new Motorcycle("green", "thing");
console.log(m.getWheels());
console.log(c.info());