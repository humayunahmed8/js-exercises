const person = {
  firstName: "Ahmed",
  lastName: "Rahim",
  language: "EN"
}

// Adding or changing an object property
Object.defineProperty(person, "language", {value: "BN"});

console.log(person.language);

const personTwo = {};

// Adding Multiple Object Properties 
Object.defineProperties(personTwo, {
    firstName: {
      value: "Ahmed",
    },
    lastName: {
      value: "Rahim",
    },
    language: {
      value: "Test"
    }
  }
)

console.log(personTwo.language); // Test 