// const x = "&times;";
const x = "x";
const o = "o";

const gameBoardDisplay = document.querySelector(".board");

// Main gameboard obj
let gameBoard = {
	board: [x, o, x, o],
}

// Factory for creating players
const playerFactory = (name) => {
	return { name };
}

// Players
const camus = playerFactory("camus");
const sartre = playerFactory("sartre");

// Function of display board on html
const displayBoard = () => {
	for(i in gameBoard.board){
		const cell = document.createElement("p");
		gameBoardDisplay.appendChild(cell);
		cell.classList.add(i);
		cell.innerText = gameBoard.board[i];

		if(gameBoard.board[i] === "x"){
			cell.classList.add("x");
		} else{
			cell.classList.add("o");
		}
	}
}

displayBoard()