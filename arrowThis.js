const person = {
  firstName: "Donald",
  lastName: "Trump",
  fullName() {
    //   //SCOPE      local
    console.log(this)
    return `${this.firstName} ${this.lastName}`
  },
  hisName: () => {
    //SCOPE    global
    console.log(this)
    return `${person.firstName} ${person.lastName}`
  },
  shoutName() {
    setTimeout(function () {
      console.log(this.fullName())
    }, 3000)
  },
  sayName() {
    setTimeout(() => {
      // console.log(this)
      console.log(this.fullName())
    }, 3000)
  },
}

// console.log(person.hisName())
console.log(person.shoutName())

//   //take a look at window.setTimeout

//this + =>         window
//this + normal function        =>same object