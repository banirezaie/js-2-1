 const flowers = {
  tulip: 20,
  rose: 10,
  lily: 15,
}

for (const key in flowers) {
  // console.log(`${key}: ${flowers[key]}`)
  console.log(`${flowers[key]}`) // return  value of object 

  console.log(`${key}`)  // return key of object
}

// for  in  .... just for  object
//syntax
//for(variable  in  object)
      //statement

//for   of  .... just for array

// Prints
// tulip: 20
// rose: 10
// lily: 15
