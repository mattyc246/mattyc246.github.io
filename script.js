	// Script to run Romanize on webpage!
	
	let buttonSubmit = document.querySelector('#convert');

	buttonSubmit.onclick = function(event){

		event.preventDefault()

		let input = document.getElementById('rom-input').value
		let num = parseInt(input);


		function numberToRoman(num) {
		   		    if (!Number.isInteger(num)) return false; 
		   		    let i, romNum, decimal , roman;
		   		    romNum = "";
		   		    decimal = [1,   4,   5,   9,  10,  40,  50,  90, 100, 400, 500, 900,1000];
		   		    roman = ["I","IV", "V","IX", "X","XL", "L","XC", "C","CD", "D","CM", "M"];
		   		    for (i = 12; i >= 0; i--) {
		   		        while (num >= decimal[i]) {
		   		            romNum += roman[i];
		   		            num -= decimal[i];
		   		        }
		   		    }
		   		return romNum;
		   		}

		
		if (num < 2000){

			console.log(num)
			let romNum = numberToRoman(num);
			let romanized = document.getElementById('romanized')


			
			let displayRomNum = document.createElement('h1');
			displayRomNum.innerHTML = ' ' + romNum + ' ';
			romanized.appendChild(displayRomNum);
			console.log(displayRomNum)
			}

		else {
			window.alert('Sorry! Please choose a number lower than 2000!')
		}
	}

	// Lightbox & Image Gallery Script

	const closeButton = document.querySelector('.lightbox-close');
	const lightBox = document.querySelector('.lightbox');
	const galleryItems = document.querySelectorAll('.gallery-item');
	const lightboxImage = document.querySelector('.lightbox-image');
	
	function showImage(event){

		lightBox.classList.remove('hidden');

			const photoClickedOn = event.target; 
			const galleryItemParent = photoClickedOn.parentElement;

			lightboxImage.innerHTML = galleryItemParent.innerHTML;
		}

		function hideImage(event){
			event.preventDefault();
			lightBox.classList.add('hidden');
		}

	closeButton.onclick = hideImage;

	

	for (let i = 0; i < galleryItems.length; i++){
		let item = galleryItems[i];

		item.onclick = showImage;
	}

	// videobox Script

	const videoButton = document.querySelector('.videobox-close');
	const videoBox = document.querySelector('.videobox');
	const videoItem = document.getElementById('sepang');
	
	
	function showVideo(event){

		videoBox.classList.remove('hidden');
		
		}

		function hideVideo(event){
			event.preventDefault();
			videoBox.classList.add('hidden');
		}

	videoButton.onclick = hideVideo;

	videoItem.onclick = showVideo;


	// Hangman Word Game Script
	const guessList = ['bananas', 'pineapples', 'lemons', 'apples', 'oranges', 'mango', 'durian', 'jackfruit', 'mangosteen', 'lychee']

	let wordToGuess = '';

	let wordState = [];

	let remainingGuesses = 10;

	let prevGuesses = [];

	function displayWordState(state){
		let output = '';

		for(let i = 0; i < state.length; i++){
			const char = state[i];
				output = output + char;
				output = output + " ";
		}

		const wordStateContainer = document.getElementById('word');
		wordStateContainer.innerHTML = output;
	}

	function displayGuessesLeft(num){
		document.getElementById('guesses-left').innerHTML = num;
	}

	const list = document.getElementById('past-guess')


	function displayPreviousGuesses(guessesArray){

		list.innerHTML = '';
		for(let i = 0; i < guessesArray.length; i++){

			const guess = document.createElement('li');
			guess.innerHTML = guessesArray[i];
			list.appendChild(guess);
		}
	}

	function userGuess(wordToGuess, wordState, currentGuess){
		for(let i = 0; i < wordToGuess.length; i++){
			if(wordToGuess[i] == currentGuess){
				wordState[i] = currentGuess;
			}
		}

		displayWordState(wordState);
		const won = winOrLose(wordState);
		if (won){
			window.alert('You Win! Press "New Game" to try again!');
		}

	}

	function setupForm(){

		const form = document.getElementById('player-input');
		const input = document.getElementById('guess-input')



		form.onsubmit = function(event){
			event.preventDefault();
			const currentInput = input.value.toLowerCase();
			input.value = '';
			if(!validateGuess(currentInput, prevGuesses)){
				window.alert('Please enter a single character that you have not used before!')
				return;
			}

			
			prevGuesses.push(currentInput);
			remainingGuesses = remainingGuesses - 1;
			displayGuessesLeft(remainingGuesses);
			const won = winOrLose(wordState);
			if (won){
				window.alert('You Win! Press "New Game" to try again!');
			}

			else if (remainingGuesses == 0){
				window.alert('You Lost!');
				setupForm();
			};
			userGuess(wordToGuess, wordState, currentInput);
			displayPreviousGuesses(prevGuesses);
		}

		function setup(){
			for(let i = 0; i < wordToGuess.length; i++){
				wordState.push('_')
			}

		displayGuessesLeft(remainingGuesses);
		displayWordState(wordState);
		displayPreviousGuesses(prevGuesses);
		}

		setup();

	}

	function randomGuess(){
		let i = Math.floor(Math.random() * guessList.length);
		return wordToGuess = guessList[i];
	};
		

	const newGame = document.getElementById('new-game')

	newGame.onclick = function(event){
			prevGuesses = [];
			wordState = [];
			remainingGuesses = 0;
			remainingGuesses = remainingGuesses + 10;
			randomGuess();
			setupForm();
		
	};

	
	function winOrLose(wordState){
		let hasEmptySpace = false;
		for(let i = 0; i < wordState.length; i++){
			if (wordState[i] == '_'){
				hasEmptySpace = true;
			}
		}
		return !hasEmptySpace;
	}

	function validateGuess(guess, prevGuesses){

		if(guess.length == 1 && prevGuesses.indexOf(guess) == -1){
			return true;
		}
		return false;
	}



	


















