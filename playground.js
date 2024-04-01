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
