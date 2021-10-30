function bankRobbery() {
	const heros = ["Spiderman", "Batman", "Superman"];
	function whoHelps() {
		//LEXICAL SCOPE

		const hero = heros[2];
		console.log(heros[1]); // Batman
		function whoWins() {
			//LEXICAL SCOPE

			const test = "we just want to test";
			console.log(hero); // Superman
			console.log(heros[0]); // Spiderman
		}
		whoWins();
	}
	whoHelps();
}
bankRobbery();
