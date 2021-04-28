const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
}
for (const key in traineeGrades){
  if (key !== "george")
  console.log(`${key.toUpperCase()}: ${traineeGrades[key]}`)
}

// Prints
// TOM - 20
// ABDUL - 19
