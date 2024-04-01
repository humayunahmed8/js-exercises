// Find current value of an array
const numbers = [1,2,9,8,10,50];

const numbersValue = numbers.find(function(currentValue, currentIndex, arr){
  return currentValue > 8;
})

console.log(numbersValue); // 9


// Find index number of an array 
const numbersIndex = numbers.findIndex(x => x > 8);
console.log(numbersIndex); // 2


// Find last index number of an array 
const numbersLastIndex = numbers.findLast(x => x > 8);
console.log(numbersLastIndex); // 50


// Array Includes
const checkValue = numbers.includes(51);
console.log(checkValue); // false