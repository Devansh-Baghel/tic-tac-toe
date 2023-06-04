const x = "x";
const o = "o";
const empty = "-";

const gameBoardDisplay = document.querySelector(".board");

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

		if(game.board[i] === "x"){
			cell.classList.add("x");
		} else if(game.board[i] === "o"){
			cell.classList.add("o");
		} else{
			cell.classList.add("empty");
		}
	}
}

displayBoard()

const addMarker = (cell) => {
	const cellIndex = cell.classList[0];
	game.board[cellIndex] = game.turn;
	console.table(game.board);

	// Switch turns
	game.turn = (game.turn === x) ? o : x;
	
};

const cells = document.querySelectorAll(".x, .o, .empty");
cells.forEach((cell) => {
	cell.addEventListener("click", () => {addMarker(cell)});
})