function isArray(myArray) {
  console.log(myArray.constructor.toString().indexOf("Array") > -1)
}
isArray([1,2,3]);

// function isArray(myArray) {
//   return myArray.constructor === Array;
// }
// console.log(isArray(["Banana", "Orange", "Apple", "Mango"]))


const y = String(100 + 23);
console.log(typeof y);