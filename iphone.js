let phone = {
  brand: "iPhone",
  model: "iPhone X",
  launchYear: 2017,
  isUnlocked: true,
};

let phoneBrand = `${phone.brand} ${phone.launchYear}`;
let phoneLaunchYear = phone["launchYear"];

console.log(phoneBrand);
// console.log(phoneLaunchYear);
