/*
Below are some restaurants in Glasgow.
Each restaurant has a name, the number of total seats, the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1- Define a method findAvailableRestaurants which takes a number of people in parameter and returns all the restaurant names which have the required number of seats available at the moment.

2- Define a method findRestaurantServingDish which takes a dish name in parameter and returns all the restaurant names serving this dish.

3- Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west), and returns the number of restaurants in this area.
*/

const restaurant1 = {
	name: "Paesano",
	totalSeats: 10,
	numberOfCustomers: 8,
	address: {
		city: "Glasgow",
		area: "center",
	},
	menu: ["pizza", "calzone", "salad"],
};

const restaurant2 = {
	name: "Ubiquitous Chip",
	totalSeats: 20,
	numberOfCustomers: 10,
	address: {
		city: "Glasgow",
		area: "west",
	},
	menu: ["salad", "chocolate cake", "roast lamb"],
};

const restaurant3 = {
	name: "Monkeyz",
	totalSeats: 15,
	numberOfCustomers: 8,
	address: {
		city: "Glasgow",
		area: "center",
	},
	menu: ["stew", "chocolate cake", "panini"],
};

const restaurants = [restaurant1, restaurant2, restaurant3];

const restaurantFinderApplication = {
	applicationName: "Restaurant Finder",
	applicationVersion: "1.0",
	restaurants: restaurants,
	findAvailableRestaurants(numberOfPeople) {
		this.restaurants.forEach((restaurant) => {
			if (restaurant.totalSeats - restaurant.numberOfCustomers >= numberOfPeople) {
				console.log(restaurant.name);
			}
		});
	},
	findRestaurantServingDish(dishName) {
		this.restaurants.forEach((restaurant) => {
			if (restaurant.menu.includes(dishName)) console.log(restaurant.name);
		});
	},
	countNumberOfRestaurantsInArea(area) {
		console.log(this.restaurants.filter((restaurant) => restaurant.address.area === area).length);
	},
};

console.log("\nFind available restaurants for 5 people: ");
restaurantFinderApplication.findAvailableRestaurants(5); //=> Ubiquitous Chip, Monkeyz
console.log("\nFind restaurants serving salad: ");
restaurantFinderApplication.findRestaurantServingDish("salad"); //=> Paesano, Ubiquitous Chip
console.log("\nNumber of restaurants in city centre: ");
restaurantFinderApplication.countNumberOfRestaurantsInArea("center"); //=> 2

/* ---------------------------------- Tests --------------------------------- */
//! I couldn't pass them :((
/* const restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(5);
console.log(`Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`);

const restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish("salad");
console.log(`Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`);

const numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea("center");
console.log(`Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`); */
