// Interpolation & Variable Substitutions

let myName = `Humayun`;
let showMyName = `${myName}`;
console.log(showMyName);

let myFriendName = `Jhon`;
let showMyFriendName = `${myFriendName}`;
console.log(showMyFriendName);

// Expression Substitution
let price = 50;
let vat = 50;
let vatAmount = `${(price * vat) / 100}`; // Calculate the VAT amount using template string
let subtotal = `${price + parseFloat(vatAmount)}`; // Calculate the subtotal using template string

console.log(`Subtotal: ${subtotal}`);


// HTML Templates
let header = `Template String`;
const tags = ['one', 'two', 'three'];

let html = `<h2>${header}</h2><ul>`;
for(let i = 0; i < tags.length; i++) {
  html += `<li>${tags[i]}</li>`;
  console.log();
}
html+= `</ul>`;

document.getElementById("printHTML").innerHTML = html;


// JavaScript Numbers (Exponent Notation)
let exponentNumber = 123e5;
let exponentNumberTwo = 123e-5;
console.log(exponentNumber); //12300000
console.log(exponentNumberTwo); //0.00123
