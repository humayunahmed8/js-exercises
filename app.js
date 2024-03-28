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

// console.log(`VAT Amount: ${vatAmount}`);
console.log(`Subtotal: ${subtotal}`);
