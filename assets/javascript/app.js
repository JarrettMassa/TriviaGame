$(document).ready(function() {

var questionCounter = 0;
var rightCounter = 0;
var wrongCounter = 0;
var gameStarted=false;
var currentTimeout;
var currentInterval;
var seconds = 0;
var answerOK = false;
var answerNum = 0;


clearBoard();

$(".logo").on("click" , function() {
	gameStarted=true;
	questionCounter++;
	$('.correct-count').text("Correct: " + rightCounter);
	$('.incorrect-count').text("Incorrect: " + wrongCounter);
	loadQuestion();
});

$(".answer-button").on("click" , function() {
	if (answerOK != true){
		return;
	}
	answerNum = $(this).attr('value');
	$(".your-answer").text($(this).text());
});


function loadQuestion(){
	clearBoard();
	if (questionCounter === 1){
		$(".logo").remove();
		$(".game-vid").prepend($("<video id='myVideo' width='480' height='360' />"));
		$("#myVideo").attr('src', 'assets/videos/question1.mp4');
		$('video').trigger('play');
		seconds = 41;
		correctAnswer = 2;

		currentTimeout= setTimeout(function(){
			answerOK = true;
			$('.question').html("Question: Dennis is asshole, why Charlie hate?");
			$('.button1').html("Because Dennis fought the Dayman!");
			$('.button2').html("Because Dennis is a bastard man!");
			$('.button3').html("Because Dennis slept with the waitress!");
			$('.button4').html("Because Milk Steak!");
		}, 9000);

		currentInterval = setInterval(function(){ 
			if (seconds <= 0){
				clearInterval(currentInterval);
				checkAnswer();
			}
			$('.clock').html("Time: " + seconds);
			seconds--;
		}, 1000);
	}
	else if(questionCounter === 2){
		$("#myVideo").remove();
		$(".game-vid").prepend($("<video id='myVideo2' width='480' height='360' />"));
		$("#myVideo2").attr('src', 'assets/videos/question2.mp4');
		$('video').trigger('play');
		seconds = 57;
		correctAnswer = 3;

		currentTimeout = setTimeout(function(){
			answerOK = true;
			$('.question').html("Question: What Philadelphia Flyer holds the franchise record for goals in a season?");
			$('.button1').html("Mario Lemieux");
			$('.button2').html("Wayne Gretzky");
			$('.button3').html("Reggie Leech");
			$('.button4').html("Rickety Cricket");
		}, 17000);
		
		currentInterval = setInterval(function(){ 
			if (seconds <= 0){
				clearInterval(currentInterval);
				checkAnswer();
			}
			$('.clock').html("Time: " + seconds);
			seconds--;
		}, 1000);

	}
	else if(questionCounter === 3){
		$("#myVideo2").remove();
		$(".game-vid").prepend($("<video id='myVideo3' width='480' height='360' />"));
		$("#myVideo3").attr('src', 'assets/videos/question3.mp4');
		$('video').trigger('play');
		seconds = 21;
		correctAnswer = 1;

		currentTimeout = setTimeout(function(){
			answerOK = true;
			$('.question').html("Question: Name something people are afraid of.");
			$('.button1').html("Clowns");
			$('.button2').html("People's knees");
			$('.button3').html("Dragons");
			$('.button4').html("Nightcrawlers");
		}, 5000);

		currentInterval = setInterval(function(){ 
			if (seconds <= 0){
				clearInterval(currentInterval);
				checkAnswer();
			}

			$('.clock').html("Time: " + seconds);
			seconds--;
		}, 1000);
	}
}

function clearBoard(){
	answerOK = false;
	answerNum = 0;
	$('.your-answer').text("");
	$('.question').html("Question:");
	$('.button1').html("Answer #1");
	$('.button2').html("Answer #2");
	$('.button3').html("Answer #3");
	$('.button4').html("Answer #4");
	$('.correct-answer').text("");
	$('.answer-picked').text("");
	clearInterval(currentInterval);
	clearTimeout(currentTimeout);
}

function checkAnswer(){
	$('.your-answer').text("Your answer: " + $('.your-answer').text());
	$('.answer-button').each(function(){
		var x = $(this).attr("value");
		var y = $(this).html();
		if (x == correctAnswer){
			debugger
			$('.correct-answer').text("Correct answer: " + $(this).text());
		}
	});
	debugger

	if (answerNum == correctAnswer){
		rightCounter++;
	}
	else{
		wrongCounter++;
	}
	$('.correct-count').text("Correct: " + rightCounter);
	$('.incorrect-count').text("Incorrect: " + wrongCounter);

	currentTimeout= setTimeout(function(){
		questionCounter++;
		if (questionCounter <= 3){
			loadQuestion();
		}
	}, 7000);
	
}

}); // End $(document).ready
