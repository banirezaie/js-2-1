const person = {
  firstName: "Donald",
  lastName: "Trump",
  fullName() {
    //SCOPE local
    //function
    console.log(this) 
    // return `${this.firstName} ${this.lastName}`   
   // "this" it means find firstName in this object
  },

  // in to the object when we want to access the ditels of object with function we should use "this"

  hisName: () => {
  // arrow function  
  // SCOPE global => in brozer window
  // when we use arrow function we can't use "this"
    console.log(this)
    // return `${this.firstName} ${this.lastName}` //error
  },
  
  shoutName() {
    setTimeout(function () {
      // because setTimeout is global and we should  use arrow function 
      console.log(this.fullName())
    }, 3000)
  },
  //take a look at window.setTimeout
  
  sayName: function () {
    setTimeout(() => { 
      // console.log(this)
      console.log(this.fullName())
    }, 3000)
  },

}


console.log(person.sayName())



//*******
//this + =>                   window
// this + normal func         same object





// const person = {
//   firstName: "Donald",
//   lastName: "Trump",
//   fullName() {
//     console.log(this)
//     return `${this.firstName} ${this.lastName}`
//     // "this" it means find firstName in this object
//   },
//   hisName: () => {
//     console.log(this)
//     return `${this.firstName} ${this.lastName}`
//   },
//   shoutName() {
//     setTimeout(function () {
//       console.log(this.fullName())
//     }, 3000)
//   },
//   //take a look at window.setTimeout
//   sayName: function () {
//     setTimeout(() => {
//       console.log(this)
//       console.log(this.fullName())
//     }, 3000)
//   },
// }