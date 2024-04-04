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