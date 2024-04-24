// Create Object with Object Literal : {}
const person = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 30,
}

console.log(person);



// Object are mutable. that means we can change the value of object properties
person.firstName = "Alice";
console.log(person.firstName)
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
child.meow = function() {
  return 'Meow!'; 
};

console.log(child.greet());
console.log(child.meow());



// Accessing JavaScript Properties
console.log(person.firstName);
console.log(person["firstName"]);

const fName = "firstName";
console.log(person[fName]);

// Iterate an Object with for/in Loop
let text = "";
for(let i in person) {
  // text = text + person[i];
  text += person[i] + ""; 
}

console.log(text);


// Adding or deleting new properties 
person.age = 25;
console.log(person); //{ firstName: 'Alice', lastName: 'Doe', age: 25 }

delete person["age"];
console.log(person);  //{ firstName: 'Alice', lastName: 'Doe', age: 25 }


// Nested Object 
const myObj = {
  name:"Ryan",
  age: 22,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
}

// Access a property from the nested object 
console.log(myObj.cars.car1);
console.log(myObj.cars.car2);
console.log(myObj["cars"].car3);
console.log(myObj["cars"]["car3"]);

// Nested Arrays and Objects
const myObject = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

// Iterate Nested Arrays and Object with Nested Loop
for(let x in myObject.cars) {
  // console.log(myObj.cars[x].name);
  for (let y in myObject.cars[x].models) {
    console.log(myObject.cars[x].models[y])
  }
}