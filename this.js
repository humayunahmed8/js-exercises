// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// let x = this;
// console.log(x);

function A() {
  return this;
}
A();


const person1 = {
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

const person2 = {
  firstName: "John",
  lastName : "Doe",
};

console.log(person1.fullName.call(person2));

function B(a, b) {
  return a * b; 
}

const x = (a, b) => { return a * b; }
console.log(B(2, 3));