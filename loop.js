// For loop with an array
let text = "";
const books = ['book1', 'book2', 'book3'];

for(let i = 0; i < books.length; i++) {
  text += "This is the" + i + "<br>";
}

document.getElementById("loop").innerHTML = text;

// For in Loop with an Object 

let plainText = "";
const bookList = {
  book1: { title: "Book 1", author: "Author 1" },
  book2: { title: "Book 2", author: "Author 2" },
  book3: { title: "Book 3", author: "Author 3" }
};

for(let key in bookList) {
  plainText += "Title: " + bookList[key].title + ", Author: " + bookList[key].author + "<br>";
}

document.getElementById("loopTwo").innerHTML = plainText;


// For Each loop
const numbList = ["5", "7", "4", "17"];
let txt = "";
const iterateNumberList = numbList.forEach((currentValue, currentIndex, array) => {
  txt += currentValue + "<br>";
})

document.getElementById("numbList").innerHTML = txt;

// For In Loop
for(let x in numbList) {
  console.log(numbList[x]);
}

// Retrive only specific object item in for in loop
const person = {fname: "John", lname: "Doe", age: 25};
let ages;
for(let x in person) {
  if(x === 'age') {
    ages = person[x];
  }
}
console.log(ages);


// For of loop
let theText = "";
for(x of numbList) {
  theText += x + "<br>";
}
document.getElementById("numbListTwo").innerHTML = theText;

//While loop
let i = 0;
while(i < 10) {
  console.log(i);
  i++;
}

// while loop with an array
let countStart = 0;
while(numbList[countStart]) {
  console.log(numbList[countStart]);
  countStart++;
}

// while loop with break keyword
let rollCountStart = 0;
while(rollCountStart < 10) {
  if(rollCountStart === 3) {
    console.log(rollCountStart);
    break;
  }
  console.log(rollCountStart);
  rollCountStart++;
}


// Create a Map with for of loop
const char = new Map([ // Here, new for create intance of object. map is an object 
  ["a", 1], 
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
])

for(const x of char) {
  console.log(x);
}