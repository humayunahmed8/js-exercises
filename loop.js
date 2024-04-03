// For loop with an array
let text = "";
const books = ['book1', 'book2', 'book3'];

for(let i = 0; i < books.length; i++) {
  text += "This is the" + i + "<br>";
}

document.getElementById("loop").innerHTML = text;

