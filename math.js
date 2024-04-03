/* math object মুলত নাম্বারের গাণিতীক কাজ গুলো করে থাকে 
 * অন্যান্য object এর মত math object এর কোন constructor নেই 
 * math object হচ্ছে static 
 * math object Define না করে math object এর ৮ টি mathematical constants এক্সেস করা যাবে 
 * 
 * math object ৮ টি mathematical constants গুলো হচ্ছে - 
 * 
*/


// Define an array containing the Math constants
const mathConstants = [
  {name: "Math.E", value: Math.E}, // returns Euler's number
  {name: "Math.PI", value: Math.PI}, // returns PI
  {name: "Math.SQRT2", value: Math.SQRT2}, // returns the square root of 2
  {name: "Math.SQRT1_2", value: Math.SQRT1_2}, // returns the square root of 1/2
  {name: "Math.LN2", value: Math.LN2}, // returns the natural logarithm of 2
  {name: "Math.LN10", value: Math.LN10}, // returns the natural logarithm of 10
  {name: "Math.LOG2E", value: Math.LOG2E}, // returns base 2 logarithm of E
  {name: "Math.LOG10E", value: Math.LOG10E} // returns base 10 logarithm of E
];


// Function to generate HTML content
function generateHTML() {
  let htmlContent = "";
  mathConstants.map((coonstant) => {
    htmlContent += `<p><b>${coonstant.name}</b> ${coonstant.value}</p>`
  })
  document.getElementById("showMath").innerHTML = htmlContent;
}

generateHTML();


/*
 * There are 4 common methods to round a number to an integer
 * Math.round(x), Math.ceil(x), Math.floor(x), Math.trunc(x)
 *
*/

const numberToInteger = [
  {name: "Math.round 4.6", value: Math.round(4.6)}, 
  {name: "Math.round 4.5", value: Math.round(4.5)},
  {name: "Math.round 4.4", value: Math.round(4.4)},

  {name: "Math.ceil 4.9", value: Math.ceil(4.9)}, // rounded up
  {name: "Math.ceil 4.1", value: Math.ceil(4.1)},
  {name: "Math.ceil 4.0", value: Math.ceil(4.0)},
  {name: "Math.ceil 3.9", value: Math.ceil(3.9)},

  {name: "Math.floor 3.9", value: Math.floor(3.9)}, // rounded down
  {name: "Math.floor 3.1", value: Math.floor(3.1)},
  {name: "Math.floor -4.2", value: Math.floor(-4.2)},

  {name: "Math.trunc -4.2", value: Math.trunc(-4.2)}, // Returns only integer part

  {name: "Math.sign 0", value: Math.sign(0)}, // Returns for positive value : 1, negative value : -1, 0 if number is 0
  {name: "Math.sign 1", value: Math.sign(1)},
  {name: "Math.sign -4", value: Math.sign(-4)},

  {name: "Math.pow 8/2", value: Math.pow(8, 2)}, // 8 power 2, that means 8*8 = 64
  
  {name: "Math.sqrt 64", value: Math.sqrt(64)}, // square root, that means 64 = 8*8
  
  {name: "Math.abs -4.2", value: Math.abs(-4.2)}, // it will provide absolute positive value from the negative value
  
  {name: "Math.min(0, 150, 30, 20, -8, -200);", value: Math.min(0, 150, 30, 20, -8, -200)}, // Find minimum value
  {name: "Math.max(0, 150, 30, 20, -8, -200);", value: Math.max(0, 150, 30, 20, -8, -200)}, // Find maximum value

  {name: "Math.random();", value: Math.random()}, // Provide random number
  {name: "Math.random() (0-9)", value: Math.floor(Math.random() * 10)}, 
  {name: "Math.random() (0-100)", value: Math.floor(Math.random() * 101)}, 
  {name: "Math.random() (1-10)", value: Math.floor(Math.random() * 10) + 1}, 
]

function numberToIntegerRoundFigure() {
  let htmlContent = "";
  numberToInteger.map((value) => {
    htmlContent += `<p><b>${value.name}</b> : ${value.value}</p>`
  })
  document.getElementById("numberToIntegerRoundFigure").innerHTML = htmlContent;
}

numberToIntegerRoundFigure();



// Show random number when click
function showRandom() {
  document.getElementById("random").addEventListener("click", function() {
    document.getElementById("showRandomNumber").innerHTML = numberToInteger[Math.floor(Math.random() * numberToInteger.length)].value;
  })
}

showRandom();