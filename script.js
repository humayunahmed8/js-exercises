var num1 = 5;

var sum = function() {
  var num2 = 6;
  return function() {
    return num1 + num2;
  }
}

var myFunc = sum();

console.log(myFunc());
console.dir(myFunc);





















/* 
init() creates a local variable called 
name and a function called displayName(). 
The displayName() function is an inner function 
that is defined inside init() and is available 
only within the body of the init() function. 
Note that the displayName() function has no local 
variables of its own. However, since inner functions
have access to the variables of outer functions, 
displayName() can access the variable name 
declared in the parent function, init().

console.log() statement within the displayName() 
function successfully displays the value of the 
name variable, which is declared in its parent 
function. This is an example of lexical scoping, 
which describes how a parser resolves variable 
names when functions are nested. 

*/