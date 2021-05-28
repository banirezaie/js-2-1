function bankRobbery() {
  const heros = ["spiderman", "batman", "superman"];
  function whoHelps() {
    //LEXICAL SCOPE
    const hero = heros[2];
    // console.log(heros[1])
    function whoWins() {
      //LEXICAL SCOPE
      const test = "we just want to test";
      console.log(hero);
      console.log(heros[0]);
    }
    whoWins();
  }
  whoHelps();
}

bankRobbery();
