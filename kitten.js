/*
    Console.log the values of each property of "kitten"
*/

let kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
  true: "it's true",
  5: "it's a number",
}

//bad practice
console.log(kitten.ageMonths, kitten[("isFemale", "furColour")])
//good practice
console.log(kitten.ageMonths, kitten["isFemale"], kitten["fur"+"Colour"], kitten["furColour"])