/*
    Console.log the values of each property of "kitten"
*/

let kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
  6: "it's 6",
  true: "it's true"
}

// console.log(kitten.ageMonths, kitten.isFemale, kitten.furColour);


// console.log(kitten.furColour);
// console.log(kitten.isFemale);
// console.log(kitten.ageMonths);

// console.log(kitten.ageMonths, kitten["furColour"], kitten.isFemale)


// if is "boolean" or "number" we can write like that
// console.log(kitten[6], kitten[true])


// bad practice
// console.log(kitten.isFemale, kitten["furColour", "isFemale"])