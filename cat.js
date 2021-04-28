const cat = {
	name: "cat",
	color: "grey",
	breed: "persian cat",
	meow() {
		return `${this.color} ${this.breed} cats are amazing`;
	},
	thisIs: `this is ${this}`,
};

console.log(cat.meow()); // grey persian cat cats are amazing
