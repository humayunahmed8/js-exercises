// "use strict";
// Javascript Function 
// console.log(myFunction(5, 2));

// function myFunction(a, b) {
//   return a * b;
// }



// const x = function(a, b) {
//   return a * b;
// }
// console.log(x(5, 2));

// const myFunctions = new Function("a", "b", "return a * b");

// let y = myFunctions(4, 3);

// console.log(y);


// function myFunction(a, b, c, d) {
//   return arguments;
// }
// console.dir(myFunction);


function myFunction(a, b) {
  return a * b;
}

// const x = {
//   firstName: "Humayun",
//   lastName: "Ahmed",
//   fullName: function() {
//     console.log(this.firstName + " " + this.lastName);
//   }
// }
// console.log(x.fullName());

// console.log(myFunction(5, 5));
// const myFunction = (a, b) => a * b;

// const x = function(x, y) {
//   return x * y;
// }
// let a = 5;
// let b = 10;
// const result = x(a, b);
// console.log(result);



const x = function(x) {
  x.one = 5;
  return x.one * x.five;
}

const numbers = {
  one: 1,
  five: 5
}
console.log(x(numbers));

console.log(numbers.one);





function test() {
  return this;
}

console.dir(test());


const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.apply(person2)); 
console.log(person.fullName.call(person1, "Oslo", "Norway")); 
console.log(person.fullName.apply(person1, ["Oslo", "Norway"])); 