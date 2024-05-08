class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  run(speed) {
    console.log(`${this.name} is running and it's speed : ${speed}`)
  }
}

const Car1 = new Car("Audi", 2000);
console.log(Car1.run(100));
// console.log(Car1.year);
// const Car2 = new Car("BMW", 2001);
// console.log(Car2.name);