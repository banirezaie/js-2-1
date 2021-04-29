const person = {
  firstName: "Jake",
  lastName: "Gyllenhaal",
  age: 40,
  born: "california",
}

// they are diftert ways to console log objects

console.log(person.firstName)
console.log(person["firstName"])
// console.log(person[firstName]) // but this code error about firstName and it's undifind and it should be in to the string
console.log(person["first" + "Name"])
