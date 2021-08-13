class Vehical {
  constructor(year) {
    this.year = year;
  }
}

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Truck extends Vehical{
  constructor(year) {
    super(year)
    Object.assign(this, towMixin);
  }
}

class Car extends Vehical{}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);