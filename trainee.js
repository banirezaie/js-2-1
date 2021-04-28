const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
}
for (let name in traineeGrades) {
  if (traineeGrades[name] > 18) {
    console.log(`${name.toUpperCase()} - ${traineeGrades[name]}`);
  }
}
// Prints
// TOM - 20
// ABDUL - 19
// 
