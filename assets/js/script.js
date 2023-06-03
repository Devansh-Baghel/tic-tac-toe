const x = "&times;";
const o = "o";

// Main gameboard obj
let gameBoard = {
	board: [],
}

// Factory for creating players
const playerFactory = (name) => {
	return { name };
}

// Players
const camus = playerFactory("camus");
const sartre = playerFactory("sartre");

// Function of display board on html
