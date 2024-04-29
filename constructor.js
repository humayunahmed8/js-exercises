// Object Constructor Function
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  // this.name = function() {
  //   return this.firstName + " " + this.lastName + " " + this.age;
  // }
}

Person.prototype.nationality = function() {
  return this.firstName + " " + this.lastName + " " + this.age;
}

const personOne = new Person("Jhon", "Doe", 35, "Black");

// personOne.nationality = "Bangladesh";

// Person.nationality = "Bangladeshi";


const personTwo = new Person("Janny", "Doe", 30, "Black");

// const DOB = new Date();

// console.dir(DOB);
// console.log(DOB.getFullYear());

console.dir(personOne);

console.log(personOne.nationality())
console.log(personTwo.nationality())








