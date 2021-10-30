/* 
1- Define an array containing the 3 persons defined below.
2- Return an array of the person names.
3- Filter the persons to return an array with the person younger than 28 years old.
*/

let person1 = {
	name: "Alice",
	age: 25,
};

let person2 = {
	name: "Bob",
	age: 30,
};

let person3 = {
	name: "John",
	age: 20,
};

let persons = [person1, person2, person3];
let personNames = persons.map((person) => person.name); // array of strings
let personsYoungerThan28YearsOld = persons.filter((youngerThan28) => youngerThan28.age < 28); // array of objects

/* ---------------------------------- TESTS --------------------------------- */

console.log(
	"Question 1: array defined with 3 persons -> ",
	persons[0] === person1 && persons[1] === person2 && persons[2] === person3 ? "Passed :)" : "Not yet :("
);

console.log(
	"Question 2: array containing the person names -> ",
	personNames[0] === "Alice" && personNames[1] === "Bob" && personNames[2] === "John" ? "Passed :)" : "Not yet :("
);

console.log(
	"Question 3: array containing the persons younger than 28 years old -> ",
	personsYoungerThan28YearsOld[0] === person1 && personsYoungerThan28YearsOld[1] === person3
		? "Passed :)"
		: "Not yet :("
);
