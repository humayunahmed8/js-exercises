class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const person1 = new Person("Sakib", 2000);
const person2 = new Person("Tamim", 1999);

console.log(`My name is ${person1.name}, I am ${person1.age()} old`);
console.log(`My name is ${person2.name}, I am ${person2.age()} old`);