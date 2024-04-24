// Create Object with Object Literal : {}
const person = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 30 
}

console.log(person);



// Create new Object()
let newObj = new Object();
newObj.firstName = "Jhon";
newObj.lastName = "Doe";
newObj.age = 30;

console.log(newObj);


// Create an object using Object.create()

const parent = {
  greet: function() {
    return `Hello, My name is ${this.name}`;
  }
}

const child = Object.create(parent);

child.name = "Jhon";

console.log(child.greet());

