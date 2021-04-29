function bankRobbery() {
  const heros = ["spiderman", "batman", "superman"]
  function whoHelps() {
    //LEXICAL SCOPE
    const hero = heros[0]
    console.log(heros[1])

    function whoWin(){
      console.log(heros[2])
      console.log(hero)
    }
    whoWin()
  }
  whoHelps()
  // let's write our codes here
}
bankRobbery()

// inside function can know outside function but outside function can not know somethinds inside the inside function