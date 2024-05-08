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


// Creating closures in loops
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus =
       makeHelpCallback(item.help);
  }
}

setupHelp();





















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