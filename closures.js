// Global Scope

let a = 5;

function globalScope() {
  return a;
}

console.log(globalScope());


// Local Scope
function localScope() {
  let b = 5;
  return b * a;
}

// console.log(b); // it will create ref. error

console.log(localScope());


// Counter Dilemma

let counter = 0;

function add() {
  // counter = counter + 1
  counter += 1;
}

add();
add();
add();


console.log(counter);