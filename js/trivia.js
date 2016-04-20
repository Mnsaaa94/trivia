$(document).ready(function() {
	//what variable equals what value
	var playerName = '';
	var correctCounter = 0;
	var playerAnswer1 = '';
	var correctAnswer1 = 'snow white'
	
	var playerAnswer2 = '';
	var corectAnswer2 = 'hi';

	// Hide Player Name
	$('#dashboard').hide();
	$('#question1').hide();
	$('#question2').hide();
	$('#correct-message1').hide();
	$('#incorrect-message1').hide();

	// Allow user to type name immediately on page load
	$('#player-name').focus();

	// When user submits name, welcome screen disappears
	function removeWelcomeScreen() {
		$('#welcome-screen').detach();
		$('#dashboard').show().addClass('animated fadeIn');
		$('#question1').show().addClass('animated fadeIn').focus();
		$('#question2').show().addClass('animated fadeIn').focus();
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
		setTimeout(removeWelcomeScreen, 1000);
	});

	// Store answer 1
	$('#question1-button').on('click', function(e) {
		// prevents form from submitting to a database
		e.preventDefault();
		// Assigns user's input to the variable playerAnswer1
		playerAnswer1 = $('#question1').val().trim().toLowerCase();
		console.log('the players answer for question 1 is' + playerAnswer1);
		// This starts showPlayerAnswer1 function
		checkAnswer1();
	});

	// Show answer 1
	function showPlayerAnswer1() {
		$('#show-player-answer1').text(playerAnswer1);
		$('#show-correct-answer1').text(correctAnswer1);
	};

	// Check answer 1
	function checkAnswer1() {
		if(playerAnswer1 === correctAnswer1) {
			console.log("Player's answer is correct!");
			$('#correct-message1').show().addClass('animated fadeIn');
			correctCounter++;
			$('#score').text(correctCounter);
		}
		else {
			console.log("Player's answer is incorrect");
			$('#incorrect-message1').show().addClass('animated fadeIn');
		}
	};
/*
	// Store answer 2
	$('#question2-button').on('click', function(e) {
		e.preventDefault();
		playerAnswer2 = $('#question2').val().trim();
		console.log(playerAnswer2);
		showPlayerAnswer2();
	});

	// Show answer 2
	function showPlayerAnswer2() {
		$('#show-player-answer2').text(playerAnswer2);
		$('#show-correct-answer2').text(correctAnswer2);
	};
*/

});