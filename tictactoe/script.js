// FIRST GET THE BOARD TO TAKE THE PLAYERS MARK AND FILL IT TO THE BOARD PIECE FUNCTION THIS TO WRITE THE INNER HTML

// THEN SET THE ALTERNATING PLAYER TURN TO ALTERNATE BETWEEN PLAYER X & PLAYER O - IF MODULUS OF COUNTER IS = TO 0 THEN PLAYER X TURN ELSE PLAYER O TURN!

// THEN VALIDATE THE PIECE BEING ENTERED INTO THE BOARD SPACE IS EMPTY OR ALREADY FILLED

// CREATE A GAMEPLAY COUNTER TO ONLY ALLOW MAXIMUM OF 9 PLAYS (ONLY 9 SPACES TO FILL)

// VALIDATE IF THE PLAYER HAS ALREADY WON OR NOT

//








const boardSpace = document.querySelector('#game-board');

const playGame = document.getElementById('play-game');

const newGame = document.getElementById('new-game');



let winArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

let chosenSquare = 0;

let playCount = 0;

let playsLeft = 9;

let inPlayX = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

let inPlayO = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
 



// new game clears the board and throws all the empty spaces into an array which can be looped through

newGame.onclick = function(){
	event.preventDefault();
	location.reload();
	boardSpace.classList.remove('hidden');
}

playGame.onclick = function (){
	event.preventDefault();
	boardSpace.classList.remove('hidden');
} 

function updateBoard(square){
	
	// store as veriable, otherwise calling function multiple times
	let currentPlayer = playerTurn();
	 
	 if(square.innerHTML == ' '){
		if(currentPlayer == 'X'){
			inPlayX[square.id - 1] = parseInt(square.id);
			winOrLose(inPlayX, 'X');
		} else {
			inPlayO[square.id - 1] = parseInt(square.id);
			winOrLose(inPlayO, 'O');
		}
		square.innerHTML = currentPlayer;
	} else {
		window.alert('Please pick an empty space!');
		playCount = playCount - 1;
	}
			
	}


// Calculates which players turn it is
function playerTurn() {
		if ((playCount % 2) == 0){
			playCount = playCount + 1;
			playsLeft = playsLeft - 1;
			return 'X';
			
		}
		playCount = playCount + 1;
		playsLeft = playsLeft - 1;
		return 'O';
		
	}



// When player takes turn and clicks on space
boardSpace.onclick = function(event) {
	updateBoard(event.target);
	console.log(playsLeft)


};



// Win or Lose Validator
function winOrLose(checkArray, player) {
	// IF inPlayX.join() == for(let n = 0; n < win[i].length; n++) win[].join

	console.log(winArray);
	
	//if the inPlayX equals win
	for(let i = 0; i < winArray.length; i++){
		let winStatus = true;
		for(let n = 0; n < winArray[i].length; n++){
			if(!checkArray.includes(winArray[i][n])){
				winStatus = false;
				break;
			}

		}
		if(winStatus == true){
			
			const popUp = document.getElementById('pop-up');
			
			popUp.classList.remove('hidden');

			const newWin = document.createElement('h1');

			newWin.innerHTML = `Player ${player} wins! `;

			popUp.appendChild(newWin);

			return;

		
		} else if (winStatus == false && playsLeft== 0) {

			const popUp = document.getElementById('pop-up');
			
			popUp.classList.remove('hidden');

			const newDraw = document.createElement('h1');

			newDraw.innerHTML = `It's a draw! Try again!`;

			popUp.appendChild(newDraw);

			return;

		}
	}
}



function validSpace(chosenSpace) {

	// i is the "ID number" of chosenSpace
	let i = chosenSpace;
	// Check if gameboard id is empty, if it is, put in the currentPlayer
	if (gameBoard[i] == ' '){
			chosenSpace.innerHTML = currentPlayer;
			break;
		}
		window.alert('Your chosen space is taken! Pick another that is not taken!')
	}



