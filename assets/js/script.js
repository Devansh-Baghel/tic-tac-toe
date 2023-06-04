const x = "x";
const o = "o";
const empty = "-";

const gameBoardDisplay = document.querySelector(".board");
const infoText = document.querySelector("span");

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
		cell.classList.add("empty")
	}
}

displayBoard()

const addMarker = (cell) => {
	const cellIndex = cell.classList[0];
	game.board[cellIndex] = game.turn;

	if (cell.classList[1] !== "empty"){
		return
	}

	cell.classList.remove("empty");
	cell.classList.add(game.turn);
	cell.innerText = game.turn;
	console.table(game.board);
	
	
	// Switch turns
	game.turn = (game.turn === x) ? o : x;
	infoText.innerText = game.turn.toUpperCase();
	
};

const cells = document.querySelectorAll("p");
cells.forEach((cell) => {
	cell.addEventListener("click", () => {addMarker(cell)});
})