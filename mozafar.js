/*
You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

*/
let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};
// زهرا معینی 
// ONLY EDIT BELOW THIS LINE
// Object.keys mame object
//Object.value مقدار object
let mentorsNames = Object.keys(mentorsAges);

let mentorsNamedUppercased = mentorsNames.map((mentorName) =>mentorName.toUpperCase());

// ONLY EDIT ABOVE THIS LINE

console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]

// dw
// sxdsd
// sdsd
