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

let checkIsNaN = 100 / "Apple";
console.log(isNaN(checkIsNaN)); //true

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

// Floating point arithmetic is not always 100% accurate : let x = 0.2 + 0.1;
// To solve the problem above, it helps to multiply and divide : let x = (0.2 * 10 + 0.1 * 10) / 10;

// if the string is numeric, the result will be a number : let x = 100 / "10"; //10

// NaN is a number: typeof NaN returns number

// Division by 0 (zero) also generates Infinity : let y = -2 / 0;

// By default, JavaScript displays numbers as base 10 decimals.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

// Numbers can also be defined as objects with the keyword new : let y = new Number(123);


// The Number() Method
let Num1 =  Number("10");
console.log(typeof Num1);
