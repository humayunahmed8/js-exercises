// JS Comparison 

if(5 > 4) {
  console.log("Right"); // Right
} else {
  console.log("Wrong");
}


if(5 == 4) {
  console.log("Right"); 
} else {
  console.log("Wrong"); // Wrong
}

if(4 == 4) {
  console.log("Right"); // Right
} else {
  console.log("Wrong"); 
}

if(false == false) {
  console.log("Right"); // Right
} else {
  console.log("Wrong"); 
}

if('hello' == 'hello') {
  console.log("Right");  // Right
} else {
  console.log("Wrong"); 
}


if('hello' === 'hello') {
  console.log("Right");  // Right
} else {
  console.log("Wrong"); 
}

if(5 != 4) {
  console.log("Right"); // Right
}else {
  console.log("Wrong");
}

if(5 != "4") {
  console.log("Right"); // Right
}else {
  console.log("Wrong");
}

if(5 !== "4") {
  console.log("Right"); // Right
}else {
  console.log("Wrong"); 
}

if(10 >= 4) {
  console.log("Right"); // Right
}else {
  console.log("Wrong");
}

if(3 >= 4) {
  console.log("Right"); 
}else {
  console.log("Wrong"); // Wrong
}

// Ternary Operator 
const age = 17;
const checkAge = age >= 18 ? "You're 18+" : "You are under 18";
console.log(checkAge); // You are under 18



// Optional Chaining Operator
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error)
const bio = {
  fullName : "Ahmed",
  age : 26,
  hobby : "Coding"
}

console.log(bio?.name);