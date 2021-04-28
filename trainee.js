const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
}
delete traineeGrades.george;
for(const names in traineeGrades){
  console.log(`${names.toUpperCase()} - ${traineeGrades[names]}`);
}
// Prints
// TOM - 20
// ABDUL - 19
