//DON'T PANIC IF IT'S HARD TO REMEMBER, YOU CAN COME BACK HERE
//MAKE SURE OPEN IT IN A BROWSER WINDOW, YOU CAN RUN index.html
//window

const cat = {
  name: "cat",
  color: "grey",
  breed: "persian cat",
  meow() {
    console.log(`${this.color} ${this.breed} cats are amazing`)
  },
  // thisIs: `this is ${this}`,
}

console.log(cat.meow())

const meow2 = cat.meow

// console.log(cat.meow2)
