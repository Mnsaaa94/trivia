$(document).ready(function() {
	//what variable equals what value
	var playerName = '';
	var correctCounter = 0;
	var triesLeft = 3;
	var playerAnswer1 = '';
	var correctAnswer1 = 'snow white';
	var playerAnswer2 = '';
	var correctAnswer2 = 'walt disney';
	var playerAnswer3 = '';
	var correctAnswer3 = 'olaf';
	var playerAnswer4 = '';
	var correctAnswer4 = 'pink';
	var playerAnswer5 = '';
	var correctAnswer5 = 'pumpkin';

	// Hide Player Name
	$('#dashboard').hide();
	$('#question1').hide();
	$('#question2').hide();
	$('#question3').hide();
	$('#question4').hide();
	$('#question5').hide();
	$('#correct-message1').hide();
	$('#incorrect-message1').hide();
	$('#correct-message2').hide();
	$('#incorrect-message2').hide();
	$('#correct-message3').hide();
	$('#incorrect-message3').hide();
	$('#correct-message4').hide();
	$('#incorrect-message4').hide();
	$('#correct-message5').hide();
	$('#incorrect-message5').hide();
	$('#lose-game-message').hide();
	$('#win-game-message').hide();

	// Allow user to type name immediately on page load
	$('#player-name').focus();
	$('#question1-player-answer').focus();
	$('#question2-player-answer').focus();
	$('#question3-player-answer').focus();
	$('#question4-player-answer').focus();
	$('#question5-player-answer').focus();

	// When user submits name, welcome screen disappears
	function removeWelcomeScreen() {
		$('#welcome-screen').detach();
		$('#dashboard').show().addClass('animated fadeIn');
		$('#question1').show().addClass('animated fadeIn').focus();
	};

	// Store player name
	$('#name-button').on('click', function(e) {
		// prevents form from submitting to a database
		e.preventDefault();
		// Assigns user's input to the variable playerName
		playerName = $('#player-name').val();
		console.log(playerName);
		$('#show-player-name').text(playerName);
		$('#welcome-screen').addClass('animated fadeOut');
		$('#tries-left').text(triesLeft);
		setTimeout(removeWelcomeScreen, 1000);
	});

	/***********************************************
						QUESTION 1
	***********************************************/

	// Store answer 1
	$('#question1-button').on('click', function(e) {
		// prevents form from submitting to a database
		e.preventDefault();
		// Assigns user's input to the variable playerAnswer1
		playerAnswer1 = $('#question1-player-answer').val().trim().toLowerCase();
		console.log(playerAnswer1);
		// This starts showPlayerAnswer1 function
		answerCheck1();
	});

	// Show answer 1
	function showPlayerAnswer1() {
		$('#show-player-answer1').text(playerAnswer1);
		$('#show-correct-answer1').text(correctAnswer1);
	};

	// fade out message
	function fadeOutAnswerCheck() {
		$('#incorrect-message1').removeClass('fadeIn').addClass('fadeOut');
	};

	function fadeOutQuestion1() {
		$('#question1').addClass('animated fadeOut');
		setTimeout($('#question1').detach(), 2500);
		$('#question2').show().addClass('animated fadeIn');
	};

	function triesLeftCountdown() {
		triesLeft--;
		$('#tries-left').text(triesLeft);
		if(triesLeft === 0) {
			$('#question1').addClass('animated fadeOut');
			$('#question1').detach();
			$('#lose-game-message').show().addClass('animated fadeIn');
		};
	};

	// Check answer 1
	function answerCheck1() {
		if(playerAnswer1 === correctAnswer1) {
			// if answer is right
			console.log("Player's answer is correct!");
			$('#correct-message1').show().addClass('animated fadeIn');
			correctCounter++;
			$('#score').text(correctCounter);
			setTimeout(fadeOutQuestion1, 2500);
		}
		else {
			// if answer is wrong
			console.log("Player's answer is incorrect");
			$('#incorrect-message1').show().addClass('animated fadeIn');
			triesLeftCountdown();
			setTimeout(fadeOutAnswerCheck, 2500);
		}
	};

	/**************************************************
						QUESTION 2
	**************************************************/

	// Store answer 2
	$('#question2-button').on('click', function(e) {
		// prevents form from submitting to a database
		e.preventDefault();
		// Assigns user's input to the variable playerAnswer2
		playerAnswer2 = $('#question2-player-answer').val().trim();
		console.log(playerAnswer2);
		// This starts showPlayerAnswer1 function
		answerCheck2();
	});

	// Show answer 2
	function showPlayerAnswer2() {
		$('#show-player-answer2').text(playerAnswer2);
		$('#show-correct-answer2').text(correctAnswer2);
	};

	// fade out message
	function fadeOutAnswerCheck2() {
		$('#incorrect-message2').removeClass('fadeIn').addClass('fadeOut');
	};

	function fadeOutQuestion2() {
		$('#question2').addClass('animated fadeOut');
		setTimeout($('#question2').detach(), 2500);
		$('#question3').show().addClass('animated fadeIn');
	};

	function triesLeftCountdown() {
		triesLeft--;
		$('#tries-left').text(triesLeft);
		if(triesLeft === 0) {
			$('#question2').addClass('animated fadeOut');
			$('#question2').detach();
			$('#lose-game-message').show().addClass('animated fadeIn');
		};
	};

	// Check answer 2
	function answerCheck2() {
		if(playerAnswer2 === correctAnswer2) {
			// if answer is right
			console.log("Player's answer is correct!");
			$('#correct-message2').show().addClass('animated fadeIn');
			correctCounter++;
			$('#score').text(correctCounter);
			setTimeout(fadeOutQuestion2, 2500);
		}
		else {
			// if answer is wrong
			console.log("Player's answer is incorrect");
			$('#incorrect-message2').show().addClass('animated fadeIn');
			triesLeftCountdown();
			setTimeout(fadeOutAnswerCheck2, 2500);
		}
	};

	/********************************************************
						QUESTION 3
	********************************************************/

	// Store answer 3
	$('#question3-button').on('click', function(e) {
		// prevents form from submitting to a database
		e.preventDefault();
		// Assigns user's input to the variable playerAnswer2
		playerAnswer3 = $('#question3-player-answer').val().trim();
		console.log(playerAnswer3);
		// This starts showPlayerAnswer1 function
		answerCheck3();
	});

	// Show answer 3
	function showPlayerAnswer3() {
		$('#show-player-answer3').text(playerAnswer3);
		$('#show-correct-answer3').text(correctAnswer3);
	};

	// fade out message
	function fadeOutAnswerCheck3() {
		$('#incorrect-message3').removeClass('fadeIn').addClass('fadeOut');
	};

	function fadeOutQuestion3() {
		$('#question3').addClass('animated fadeOut');
		setTimeout($('#question3').detach(), 2500);
		$('#question4').show().addClass('animated fadeIn');
	};

	function triesLeftCountdown() {
		triesLeft--;
		$('#tries-left').text(triesLeft);
		if(triesLeft === 0) {
			$('#question3').addClass('animated fadeOut');
			$('#question3').detach();
			$('#lose-game-message').show().addClass('animated fadeIn');
		};
	};

	// Check answer 3
	function answerCheck3() {
		if(playerAnswer3 === correctAnswer3) {
			// if answer is right
			console.log("Player's answer is correct!");
			$('#correct-message3').show().addClass('animated fadeIn');
			correctCounter++;
			$('#score').text(correctCounter);
			setTimeout(fadeOutQuestion3, 2500);
		}
		else {
			// if answer is wrong
			console.log("Player's answer is incorrect");
			$('#incorrect-message3').show().addClass('animated fadeIn');
			triesLeftCountdown();
			setTimeout(fadeOutAnswerCheck3, 2500);
		}
	};

	/******************************************
				QUESTION 4
	******************************************/

	// Store answer 4
	$('#question4-button').on('click', function(e) {
		// prevents form from submitting to a database
		e.preventDefault();
		// Assigns user's input to the variable playerAnswer2
		playerAnswer4 = $('#question4-player-answer').val().trim();
		console.log(playerAnswer4);
		// This starts showPlayerAnswer4 function
		answerCheck4();
	});

	// Show answer 4
	function showPlayerAnswer4() {
		$('#show-player-answer4').text(playerAnswer4);
		$('#show-correct-answer4').text(correctAnswer4);
	};

	// fade out message
	function fadeOutAnswerCheck4() {
		$('#incorrect-message4').removeClass('fadeIn').addClass('fadeOut');
	};

	function fadeOutQuestion4() {
		$('#question4').addClass('animated fadeOut');
		setTimeout($('#question4').detach(), 2500);
		$('#question5').show().addClass('animated fadeIn');
	};

	function triesLeftCountdown() {
		triesLeft--;
		$('#tries-left').text(triesLeft);
		if(triesLeft === 0) {
			$('#question4').addClass('animated fadeOut');
			$('#question4').detach();
			$('#lose-game-message').show().addClass('animated fadeIn');
		};
	};

	// Check answer 4
	function answerCheck4() {
		if(playerAnswer4 === correctAnswer4) {
			// if answer is right
			console.log("Player's answer is correct!");
			$('#correct-message4').show().addClass('animated fadeIn');
			correctCounter++;
			$('#score').text(correctCounter);
			setTimeout(fadeOutQuestion4, 2500);
		}
		else {
			// if answer is wrong
			console.log("Player's answer is incorrect");
			$('#incorrect-message4').show().addClass('animated fadeIn');
			triesLeftCountdown();
			setTimeout(fadeOutAnswerCheck4, 2500);
		}
	};

	/************************************************
					QUESTION 5
	************************************************/

	// Store answer 5
	$('#question5-button').on('click', function(e) {
		// prevents form from submitting to a database
		e.preventDefault();
		// Assigns user's input to the variable playerAnswer5
		playerAnswer5 = $('#question5-player-answer').val().trim();
		console.log(playerAnswer5);
		// This starts showPlayerAnswer4 function
		answerCheck5();
	});

	// Show answer 5
	function showPlayerAnswer5() {
		$('#show-player-answer5').text(playerAnswer4);
		$('#show-correct-answer5').text(correctAnswer4);
	};

	// fade out message
	function fadeOutAnswerCheck5() {
		$('#incorrect-message5').removeClass('fadeIn').addClass('fadeOut');
	};

	function fadeOutQuestion5() {
		$('#question5').addClass('animated fadeOut');
		setTimeout($('#question5').detach(), 2500);
		$('#win-game-message').show().addClass('animated fadeIn');
	};

	function triesLeftCountdown() {
		triesLeft--;
		$('#tries-left').text(triesLeft);
		if(triesLeft === 0) {
			$('#question5').addClass('animated fadeOut');
			$('#question5').detach();
			$('#lose-game-message').show().addClass('animated fadeIn');
		};
	};

	// Check answer 5
	function answerCheck5() {
		if(playerAnswer5 === correctAnswer5) {
			// if answer is right
			console.log("Player's answer is correct!");
			$('#correct-message5').show().addClass('animated fadeIn');
			correctCounter++;
			$('#score').text(correctCounter);
			setTimeout(fadeOutQuestion5, 2500);
		}
		else {
			// if answer is wrong
			console.log("Player's answer is incorrect");
			$('#incorrect-message5').show().addClass('animated fadeIn');
			triesLeftCountdown();
			setTimeout(fadeOutAnswerCheck5, 2500);
		}
	};

});