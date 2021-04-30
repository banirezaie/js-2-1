const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

traineeGrades.tom = 20;
traineeGrades.abdul = 19;
delete traineeGrades.george;

for (let test in traineeGrades) {
  console.log(`${test}-`.toUpperCase() + `${traineeGrades[test]}`);
}

// Prints
// TOM - 20
// ABDUL - 19
