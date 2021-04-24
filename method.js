//Math

const myMath = {
  PI: 3.14,
  square: function (num) {
    return num * num
  },
  cube: function (num) {
    return num * num * num
  },
}

console.log(myMath.square(12))
console.log(myMath.cube(12))
console.log(myMath.PI)
console.log(myMath.square(myMath.PI))