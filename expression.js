const person = {
  firstName: "Jake",
  lastName: "Gyllenhaal",
  age: 40,
  born: "california",
};

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person[firstName]);
console.log(person["first" + "Name"]);
