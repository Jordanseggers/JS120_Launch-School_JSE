const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}


Object.assign(Car.prototype, Speed);
Object.assign(Truck.prototype, Speed);

let pinkCar = new Car();
let blueTruck = new Truck();

pinkCar.goFast();
blueTruck.goFast();
