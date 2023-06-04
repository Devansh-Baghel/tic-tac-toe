const x = "x";
const o = "o";
const empty = "-";

const gameBoardDisplay = document.querySelector(".board");
const infoText = document.querySelector("span");
const infoTextHeading = document.querySelector("h1");

// const playerFactory = (name, marker) => {
	// return { name, marker };
// }

let game = {
	board: [
		empty, empty, empty,
		empty, empty, empty,
		empty, empty, empty
	],

	turn: "x",
	// x: playerFactory("camus", "x"),
	// o: playerFactory("sartre", "0")
}

const displayBoard = () => {
	for(i in game.board){
		const cell = document.createElement("p");
		gameBoardDisplay.appendChild(cell);
		cell.classList.add(i);
		cell.innerText = game.board[i];
	}
}

displayBoard()

const addMarker = (cell) => {
	const cellIndex = cell.classList[0];
	game.board[cellIndex] = game.turn;

	if (gameBoardDisplay.classList[1] === "over"){
		return
	}

	if (cell.classList[1] === "x" || cell.classList[1] === "o"){
		return
	}

	cell.classList.add(game.turn);
	cell.innerText = game.turn;
	console.table(game.board);

	// Logic to check for game over
	// This is a shitty way to do this i know... im sorry... i'll fix it later
	if (
		(game.board[0] === game.board[1] && game.board[1] === game.board[2] && game.board[0] !== empty && game.board[1] !== empty && game.board[2] !== empty) || // Check for horizontal win
		(game.board[3] === game.board[4] && game.board[4] === game.board[5] && game.board[3] !== empty && game.board[4] !== empty && game.board[5] !== empty) || // Check for horizontal win
		(game.board[6] === game.board[7] && game.board[7] === game.board[8] && game.board[6] !== empty && game.board[7] !== empty && game.board[8] !== empty) || // Check for horizontal win
		(game.board[0] === game.board[3] && game.board[3] === game.board[6] && game.board[0] !== empty && game.board[3] !== empty && game.board[6] !== empty) || // Check for vertical win
		(game.board[1] === game.board[4] && game.board[4] === game.board[7] && game.board[1] !== empty && game.board[4] !== empty && game.board[7] !== empty) || // Check for vertical win
		(game.board[2] === game.board[5] && game.board[5] === game.board[8] && game.board[2] !== empty && game.board[5] !== empty && game.board[8] !== empty) || // Check for vertical win
		(game.board[0] === game.board[4] && game.board[4] === game.board[8] && game.board[0] !== empty && game.board[4] !== empty && game.board[8] !== empty) || // Check for diagonal win
		(game.board[2] === game.board[4] && game.board[4] === game.board[6] && game.board[2] !== empty && game.board[4] !== empty && game.board[6] !== empty) // Check for diagonal win
	) {
		infoTextHeading.innerText = `Game Over! ${game.turn.toUpperCase()} WON!`;
		gameBoardDisplay.classList.add("over");
	}
	
	
	// Switch turns
	game.turn = (game.turn === x) ? o : x;
	infoText.innerText = game.turn.toUpperCase();
	
};


const cells = document.querySelectorAll("p");
cells.forEach((cell) => {
	cell.addEventListener("click", () => {addMarker(cell)});
})