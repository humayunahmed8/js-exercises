// Date 
const d = new Date();
console.log(d);

// Full Date 
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
const fullDate = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(fullDate);

// Overflow the next year

const overflowDate = new Date(2024, 16, 18);

document.getElementById("clickDate").addEventListener("click", function() {
  document.getElementById("date").innerHTML = overflowDate; // Sun May 18 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)
})

// 01 January 1970 plus 100 000 000 000 milliseconds is

const ml = new Date(100000000000);

console.log(ml);


// Date Methods : Today Date is - April 2, 2024
const birthDate = new Date();
console.log(birthDate.getDate()); //2

// Get the Month 
console.log(birthDate.getMonth()); //3


// Get the customized month name from an array 
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dates = new Date();

let currentMonth = month[dates.getMonth()];

console.log(currentMonth);


// Set method of date object

// setFullYear 
const dateObject = new Date();
dateObject.setFullYear(2023);

console.log(dateObject);

// setMonth
// Note that months count from 0. December is month 11
dateObject.setMonth(9);
console.log(dateObject);




