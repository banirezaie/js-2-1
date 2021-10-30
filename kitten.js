//TODO Console.log the values of each property of "kitten"

let kitten = {
	ageMonths: 3,
	isFemale: true,
	furColour: "brown",
};

//! bad practice
console.log(kitten.ageMonths, kitten[("isFemale", "furColour")]); // 3 brown

//! good practice
console.log(kitten.ageMonths, kitten["isFemale"], kitten["furColour"]); // 3 true brown brown
