const x = "x";
const o = "o";

const playerSelectDialog = document.querySelector(".player-select");
const playerSelectForm = document.querySelector(".player-select form");
const playerSelectSubmitButton = document.querySelector("#next-button");
const markerSelectDialog = document.querySelector(".marker-select");
const markerSelectForm = document.querySelector("#marker-select-dialog form");
const markerSelectSubmitButton = document.querySelector("#marker-select-submit");


const gameBoardDisplay = document.querySelector(".board");
const cells = document.querySelectorAll("p");
const infoText = document.querySelector("span");
const infoTextHeading = document.querySelector("h1");


let game = {
	board: [
		1, 2, 3,
		4, 5, 6,
		7, 8, 9
	],
	turn: "x",
	playerOne: {
		name: "",
		marker: ""
	},
	playerTwo: {
		name: "",
		marker: ""
	}
}


const addPlayer = () => {
	game.playerOne.name = document.querySelector("#player1").value;
	game.playerTwo.name = document.querySelector("#player2").value;
	playerSelectDialog.close();
	document.querySelector("#player1-marker-select").innerText = game.playerOne.name;
	document.querySelector("#player2-marker-select").innerText = game.playerTwo.name;
	markerSelectDialog.showModal();
}

const addMarkerToPlayer = () => {
	document.querySelector("[name=player1-radio]").checked ? game.playerOne.marker = "x" : game.playerOne.marker = "o";
	document.querySelector("[name=player2-radio]").checked ? game.playerTwo.marker = "x" : game.playerTwo.marker = "o";
	markerSelectDialog.close();
}

const addMarkerToBoard = (cell) => {
	const cellIndex = cell.classList[0];
	game.board[cellIndex] = game.turn;
	
	if (gameBoardDisplay.classList[1] === "over"){ return }
	
	cell.classList.add(game.turn);
	cell.innerText = game.turn;
	console.table(game.board);
	
	// Logic to check for game over
	const includesAny = [1,2,3,4,5,6,7,8,9].some(element => game.board.includes(element));
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
	
	swapTurns();
};

const swapTurns = () => {
	game.turn = (game.turn === x) ? o : x;
	infoText.innerText = game.turn.toUpperCase();
}

playerSelectForm.addEventListener("submit", e => {
	e.preventDefault();
	addPlayer();
}, {once: true});

markerSelectForm.addEventListener("submit", e => {
	e.preventDefault();
	addMarkerToPlayer();
}, {once: true})

cells.forEach(cell => {
	cell.addEventListener("click", () => {addMarkerToBoard(cell)}, {once: true});
})