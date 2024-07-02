// Define an object with numerical keys and string values
const counts = {
  45: "Rahim",
  40: "Karim",
  33: "Shawon",
  55: "Shifat",
  90: "Sarowar",
}

// Iterate over the keys of the counts object
for (let count in counts) {
  // Print each key to the console
  console.log(count); // Output: 33, 40, 45, 55, 90
}

// Define another object with string keys that represent numerical values
const ranks = {
  "45.0": "Rahim",
  "40.0": "Karim",
  "33.0": "Shawon",
  "55.0": "Shifat",
  "90.0": "Sarowar",
}

// Iterate over the keys of the ranks object
for (let rank in ranks) {
  // Print each key to the console
  console.log(rank); // Output: 33.0, 40.0, 45.0, 55.0, 90.0
}
