// Object Constructor Function
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function() {
    return this.firstName + " " + this.lastName + " " + this.age;
  }
}

const personOne = new Person("Jhon", "Doe", 35, "Black");
personOne.nationality = "Bangladesh";


const personTwo = new Person("Janny", "Doe", 30, "Black");

console.log(personOne.name());


