// Create an object
const person = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 30,
  language: "",
  // fullName: function() {
  //   return this.firstName + " " + this.lastName;
  // }
  get fullName() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  },
  set lang(lang) {
    this.language = lang;
  }
}

person.lang = "BN";

console.log(person.language);
console.log(person.fullName);