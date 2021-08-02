class Greeting {
  greet(message) {
    console.log(message);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye () {
    this.greet('Goodbye');
  }
}

let introduction = new Hello;
introduction.hi();

let leave = new Goodbye;
leave.bye();