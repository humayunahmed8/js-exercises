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
