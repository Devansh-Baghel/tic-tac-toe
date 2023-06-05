const x = "x";
const o = "o";

const gameBoardDisplay = document.querySelector(".board");
const infoText = document.querySelector("span");
const infoTextHeading = document.querySelector("h1");


let game = {
	board: [
		1, 2, 3,
		4, 5, 6,
		7, 8, 9
	],

	turn: "x",
}


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
	const includesAny = [1,2,3,4,5,6,7,8,9].some(element => game.board.includes(element));
	// This is a shitty way to do this i know... im sorry... i'll fix it later
	if (
		(game.board[0] === game.board[1] && game.board[1] === game.board[2]) || // Check for horizontal win
		(game.board[3] === game.board[4] && game.board[4] === game.board[5]) || // Check for horizontal win
		(game.board[6] === game.board[7] && game.board[7] === game.board[8]) || // Check for horizontal win
		(game.board[0] === game.board[3] && game.board[3] === game.board[6]) || // Check for vertical win
		(game.board[1] === game.board[4] && game.board[4] === game.board[7]) || // Check for vertical win
		(game.board[2] === game.board[5] && game.board[5] === game.board[8]) || // Check for vertical win
		(game.board[0] === game.board[4] && game.board[4] === game.board[8]) || // Check for diagonal win
		(game.board[2] === game.board[4] && game.board[4] === game.board[6]) // Check for diagonal win
	) {
		infoTextHeading.innerText = `Game Over! ${game.turn.toUpperCase()} WON!`;
		gameBoardDisplay.classList.add("over");
	}

	else if (!includesAny){
		infoTextHeading.innerText = `It's a Tie!`
	}
	
	
	// Switch turns
	game.turn = (game.turn === x) ? o : x;
	infoText.innerText = game.turn.toUpperCase();
	
};


const cells = document.querySelectorAll("p");
cells.forEach((cell) => {
	cell.addEventListener("click", () => {addMarker(cell)});
})