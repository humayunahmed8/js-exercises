class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static present(car) {
    return 'I have a car';
  }
}

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// let Car1 = new Car("Ford");

console.log(Car.present());