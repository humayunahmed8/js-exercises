// Find current value of an array
const numbers = [1,2,9,8,10,50];

const numbersValue = numbers.find(function(currentValue, currentIndex, arr){
  return currentValue > 8;
})

console.log(numbersValue); // 9


// Find index number of an array 
const numbersIndex = numbers.findIndex(x => x > 8);
console.log(numbersIndex); // 2


// Find last value of an array 
const numbersLastValue = numbers.findLast(x => x > 8);
console.log(numbersLastValue); // 50

// Find last index of an array 
const numbersLastIndex = numbers.findLastIndex(x => x > 8);
console.log(numbersLastIndex); // 5


// Array Includes
const checkValue = numbers.includes(51);
console.log(checkValue); // false


// Array indexOf
const fruits = ["test", "test", "Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 2;

console.log(position);


// JavaScript Array Iteration : forEach() Method

let txt = "";
const result = [40, 45, 33, 65, 55];
result.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;
function myFunction(currentValue, currentIndex, arr) {
  txt += currentIndex + " - " + currentValue + " - " + arr + "<br>";
}

// JavaScript Array Iteration : entries() Method
const items = ['one', 'two', 'three'];
const f = items.entries();
for(let x of f) {
  // console.log(x)
  document.getElementById("demoTwo").innerHTML += x + "<br>";
}

// JavaScript Array Iteration : with() Method
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(3, "March");

document.getElementById("demoThree").innerHTML = myMonths;


// JavaScript Array Spread (...)
const num1 = ["Jan", "Feb", "Mar"];
const num2 = ["Apr", "May", "Jun"];
const total = [...num1, ...num2]
document.getElementById("demoFour").innerHTML = total;


// Javascript Array reduce() Method

const booksCount = [1, 2, 3];

const sumBooks = booksCount.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
})

console.log(sumBooks); // prevValue = undefined; undefined + 1 + 2 + 3 = 6