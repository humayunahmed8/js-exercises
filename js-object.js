const person = {
  firstName: "Jhon",
  lastName: "Doe",
  language: "EN"
}

// Object.defineProperty(person, "language", {value: "BN"});

Object.defineProperties(person, {
  age: {
    value: 30,
  },
  nationality: {
    value: "Bangladeshi"
  }
})
console.dir(person);
console.log(person.nationality);

const getTheProperty = Object.getOwnPropertyDescriptor(person, "firstName");
const getTheProperties = Object.getOwnPropertyDescriptors(person);

const ownPropertiesNames = Object.getOwnPropertyNames(person);

console.log(getTheProperty);