const person = {
  firstName: "Donald",
  lastName: "Trump",
  fullName() {
    //SCOPE
    console.log(this) 
    return `${this.firstName} ${this.lastName}`   
   // "this" it means find firstName in this object
  },
}


console.log(person.fullName())




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