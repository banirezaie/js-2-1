const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
}
let keys;
for (let key in traineeGrades) {
if (key.length<6) {
  keys=key.toUpperCase();
 console.log(keys +" - "+ traineeGrades[key]);
}
}
// Prints
// TOM - 20
// ABDUL - 19
