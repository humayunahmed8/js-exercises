const person = {
  firstName: "Ahmed",
  lastName: "Rahim",
  language: "EN"
}

// Adding or changing an object property
Object.defineProperty(person, "language", {value: "BN"});

console.log(person.language);