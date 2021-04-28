/*
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportation available to go there.

1- Filter the travelDestinations array to return all destination names reachable within 500 kms.
2- Find a destination name reachable by ferry.
3- Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

const destination1 = {
	destinationName: "Edinburgh",
	distanceKms: 80,
	transportation: ["car", "bus", "train"],
};

const destination2 = {
	destinationName: "London",
	distanceKms: 650,
	transportation: ["car", "bus", "train"],
};

const destination3 = {
	destinationName: "Paris",
	distanceKms: 900,
	transportation: ["train", "plane"],
};

const destination4 = {
	destinationName: "Dublin",
	distanceKms: 350,
	transportation: ["plane", "ferry"],
};

const travelDestinations = [destination1, destination2, destination3, destination4];

const destinationNamesWithin500Kms = travelDestinations
	.filter((destination) => destination.distanceKms < 500)
	.map((destination) => destination.destinationName);

const destinationNameReachableByFerry = travelDestinations
	.filter((destination) => destination.transportation.includes("ferry"))
	.map((destination) => destination.destinationName);

const destinationNamesMoreThan300KmsAwayByTrain = travelDestinations
	.filter((destination) => destination.distanceKms > 300 && destination.transportation.includes("train"))
	.map((destination) => destination.destinationName);

/* ---------------------------------- Tests --------------------------------- */
console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`);
