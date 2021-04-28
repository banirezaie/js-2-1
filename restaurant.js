/* take a look at restaurant, you task is toL

1- create a variable named 'fullAddress' that points to a string using the information from restaurant.
2- full address should point to a string that includes the address, city, state, and zipcode from the restaurant object. 


good luck
*/

//PLEASE DO NOT TOUCH THIS LINE!
const restaurant = {
  name: "brother's of Rahmani except jafar",
  address: `${Math.floor(Math.random() * 100 + 1)} Shah yad Ave`,
  city: "Tehran",
  state: "Persia",
  zipcode: "99999",
}
//YOUR CODE GOES DOWN HERE:
// const fullAddress = console.log(restaurant.address, restaurant.city, restaurant.state, restaurant.zipcode);
const fullAddress = `${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode}`;   //it's better to code like this.
console.log(fullAddress);
